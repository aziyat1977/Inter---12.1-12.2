import React, { useEffect, useState, useRef } from 'react';
import { Monitor, Smartphone } from 'lucide-react';

interface ScreenAdapterProps {
  children: React.ReactNode;
}

interface ScreenState {
  mode: 'flow' | 'cinema';
  scale: number;
  width: number;
  height: number;
  deviceType: 'mobile' | 'desktop';
}

/**
 * ScreenAdapter - Ultra Strong Mechanism
 * 
 * Algorithm:
 * 1. Measures the viewport continuously.
 * 2. If the device is strictly mobile (portrait or small width), it uses 'flow' mode (native scrolling).
 * 3. If the device is desktop/landscape/projector, it uses 'cinema' mode.
 *    - Cinema mode creates a virtual canvas (1600x900 base) and scales it to fit the window perfectly.
 *    - This ensures layouts designed for 1080p look identical on 4k projectors or 720p laptops.
 */
const ScreenAdapter: React.FC<ScreenAdapterProps> = ({ children }) => {
  const [state, setState] = useState<ScreenState>({
    mode: 'flow',
    scale: 1,
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    deviceType: 'desktop'
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adapt = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      // Heuristic detection
      const isPortrait = h > w;
      const isSmallScreen = w < 1024; // iPad Pro and smaller is usually "touch/flow" territory
      const isMobile = isPortrait || isSmallScreen;

      if (isMobile) {
        // FLOW MODE: Use standard Responsive Web Design
        setState({
          mode: 'flow',
          scale: 1,
          width: w,
          height: h,
          deviceType: 'mobile'
        });
        document.body.style.overflow = 'auto';
        document.body.style.position = 'static';
      } else {
        // CINEMA MODE: Scale to fit
        // Target Reference: 1600x900 (A comfortable desktop/projector aspect)
        const baseW = 1600;
        const baseH = 900;
        
        // Calculate the scale needed to contain the base resolution within the window
        // We add a tiny margin (0.95) to ensure no scrollbars appear due to subpixel rendering
        const scaleX = w / baseW;
        const scaleY = h / baseH;
        const scale = Math.min(scaleX, scaleY) * 0.98;

        setState({
          mode: 'cinema',
          scale: scale,
          width: w,
          height: h,
          deviceType: 'desktop'
        });
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.height = '100%';
      }
    };

    // Initial call
    adapt();

    // Debounce resize slightly for performance
    let timeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(adapt, 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', adapt);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', adapt);
      document.body.style.overflow = '';
      document.body.style.position = '';
    };
  }, []);

  if (state.mode === 'flow') {
    return (
      <div 
        className="w-full min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300 relative overflow-x-hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {children}
        {/* Mobile Indicator (Optional, for debugging or UI) */}
        {/* <div className="fixed bottom-2 right-2 opacity-20 pointer-events-none">
          <Smartphone size={16} />
        </div> */}
      </div>
    );
  }

  // Cinema Mode Render
  return (
    <div 
      className="fixed inset-0 bg-stone-900 dark:bg-stone-950 flex items-center justify-center overflow-hidden"
    >
      <div 
        id="cinema-stage"
        style={{
          width: '1600px', // The Virtual Resolution
          height: '900px', // The Virtual Resolution
          transform: `scale(${state.scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 0 100px rgba(0,0,0,0.5)', // Cinematic shadow
        }}
        className="bg-stone-50 dark:bg-stone-950 relative overflow-hidden transition-colors duration-300"
      >
        {children}
      </div>
      
      {/* Cinematic Letterboxing/Background fill happens automatically via flex centering */}
    </div>
  );
};

export default ScreenAdapter;