import { VocabItem, PoliceItem, RoleItem, GossipItem, GrammarRuleItem, QuizCategory } from './types';

export const VOCAB_DATA: VocabItem[] = [
  { 
    word: "Nasty", 
    synonym: "Unpleasant", 
    context: "Bilbo hates adventures.",
    pronunciation: "/ˈnɑː.sti/",
    quizzes: [
      {
        question: "Don't read the comments on that viral TikTok video. People are being really ___.",
        options: ["Clever", "Nasty", "Amusing"],
        answer: "Nasty"
      },
      {
        question: "I checked my bank account and saw I lost $500. It was a ___ surprise.",
        options: ["Nasty", "Clever", "Funny"],
        answer: "Nasty"
      }
    ],
    speakingQuestions: [
      "Have you ever received a nasty comment on social media? How did you react?",
      "What is a nasty habit that costs people a lot of money?",
      "Is it nasty to show off your money on Instagram, or is it normal?"
    ]
  },
  { 
    word: "Amusing", 
    synonym: "Funny / Entertaining", 
    context: "Gandalf finds Bilbo funny.",
    pronunciation: "/əˈmjuː.zɪŋ/",
    quizzes: [
      {
        question: "That streamer's reaction to losing the game was highly ___.",
        options: ["Nasty", "Amusing", "Sad"],
        answer: "Amusing"
      },
      {
        question: "My English teacher made an ___ mistake during the live class.",
        options: ["Expensive", "Amusing", "Digital"],
        answer: "Amusing"
      }
    ],
    speakingQuestions: [
      "What do you find more amusing: TikTok trends or YouTube gamers?",
      "Tell us about an amusing misunderstanding you had in English.",
      "Do you think pranks on friends are amusing or just mean?"
    ]
  },
  { 
    word: "Clever", 
    synonym: "Smart / Intelligent", 
    context: "Wizards are very clever.",
    pronunciation: "/ˈklev.ər/",
    quizzes: [
      {
        question: "She used a ___ trick to get 10k followers in one week.",
        options: ["Nasty", "Clever", "Boring"],
        answer: "Clever"
      },
      {
        question: "Investing in that skin for the game wasn't very ___. You can't sell it back.",
        options: ["Clever", "Amusing", "Loud"],
        answer: "Clever"
      }
    ],
    speakingQuestions: [
      "What is a clever way to save money while having fun?",
      "Who is the cleverest content creator you follow?",
      "Do you use any clever apps to help you learn languages?"
    ]
  },
];

export const GRAMMAR_RULES: GrammarRuleItem[] = [
  {
    rule: "Present Simple → Past Simple",
    examples: [
      { direct: "I like tea.", reported: "He said he liked tea." },
      { direct: "We live in a hole.", reported: "He said they lived in a hole." },
      { direct: "She hates loud noises.", reported: "He said she hated loud noises." }
    ]
  },
  {
    rule: "Present Continuous → Past Continuous",
    examples: [
      { direct: "I am reading a map.", reported: "He said he was reading a map." },
      { direct: "They are cooking dinner.", reported: "He said they were cooking dinner." },
      { direct: "It is raining outside.", reported: "He said it was raining outside." }
    ]
  },
  {
    rule: "Will → Would",
    examples: [
      { direct: "I will help you.", reported: "He said he would help me." },
      { direct: "It will be dangerous.", reported: "He said it would be dangerous." },
      { direct: "They will arrive soon.", reported: "He said they would arrive soon." }
    ]
  }
];

export const GOSSIP_DATA: GossipItem[] = [
  {
    speaker: "Gandalf",
    direct: "I am looking for someone to share in an adventure.",
    reported: "He said he was looking for someone to share in an adventure.",
    rule: "Present Continuous → Past Continuous"
  },
  {
    speaker: "Bilbo",
    direct: "We do not want any adventures here.",
    reported: "He said they did not want any adventures there.",
    rule: "Present Simple → Past Simple"
  },
  {
    speaker: "Gandalf",
    direct: "You will have a tale to tell.",
    reported: "He said I would have a tale to tell.",
    rule: "Future Simple → Conditional"
  },
  {
    speaker: "Bilbo",
    direct: "I can't believe this is happening!",
    reported: "He said he couldn't believe that was happening.",
    rule: "Modal Present → Modal Past"
  }
];

export const POLICE_DATA: PoliceItem[] = [
  { prompt: "Gandalf: 'I am looking for someone...'", start: "He told me he", answer: "was looking", end: "for someone." },
  { prompt: "Gandalf: 'You know my name.'", start: "He said I", answer: "knew", end: "his name." },
  { prompt: "Gandalf: 'Do you remember I belong to it?'", start: "He asked if I", answer: "remembered", end: "he belonged to it." },
  { prompt: "Gandalf: 'I shall inform the others.'", start: "He said he", answer: "would inform", end: "the others." },
  { prompt: "Gandalf: 'It will be very good for you.'", start: "He said it", answer: "would be", end: "very good for me." },
  { prompt: "Bilbo: 'We do not want any adventures here.'", start: "I told him we", answer: "did not want", end: "any adventures there." },
];

export const ROLES: RoleItem[] = [
  { title: "The Gandalf", desc: "You are an intense guest. You want to sell a trip to Mars. You won't take no for an answer.", iconType: 'sales' },
  { title: "The Bilbo", desc: "You just want to eat plov and relax. You are polite but you refuse everything.", iconType: 'host' },
  { title: "The Spy", desc: "Listen to the conversation. Later, report exactly what they said to the class.", iconType: 'spy' },
];

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    title: "1. Present Simple → Past Simple",
    context: "The Annoying Roommate",
    grammarInfo: {
      rule: "One Step Back: V1 → V2",
      form: "Subject + V2 (Past Simple)",
      exampleDirect: "I eat all the pizza.",
      exampleReported: "He admitted he ate all the pizza."
    },
    test: [
      { question: "'I sleep until noon.' → He said he _____ until noon.", options: ["sleeps", "slept", "has slept", "sleeping"], answer: "slept" },
      { question: "'My dog barks at ghosts.' → She said her dog _____ at ghosts.", options: ["barked", "barks", "had barked", "was barking"], answer: "barked" },
      { question: "'We don't like cleaning.' → They said they _____ cleaning.", options: ["don't like", "didn't like", "haven't liked", "not liked"], answer: "didn't like" },
      { question: "'I am a pro gamer.' → He told me he _____ a pro gamer.", options: ["is", "were", "was", "had been"], answer: "was" },
      { question: "'She never washes the dishes.' → He complained she never _____ the dishes.", options: ["washed", "washes", "washing", "wash"], answer: "washed" },
      { question: "'I have a headache.' → She said she _____ a headache.", options: ["has", "had", "have", "having"], answer: "had" },
      { question: "'You are annoying.' → He told me I _____ annoying.", options: ["am", "was", "were", "had been"], answer: "was" },
      { question: "'I work at Starbucks.' → She said she _____ at Starbucks.", options: ["worked", "works", "working", "work"], answer: "worked" },
      { question: "'We play Minecraft every night.' → They said they _____ Minecraft every night.", options: ["played", "play", "playing", "plays"], answer: "played" },
      { question: "'I don't know the answer.' → He said he _____ the answer.", options: ["doesn't know", "didn't know", "hadn't known", "not know"], answer: "didn't know" },
      { question: "'It smells bad in here.' → She said it _____ bad in there.", options: ["smell", "smells", "smelt", "smelling"], answer: "smelt" },
      { question: "'My mom cooks great plov.' → He said his mom _____ great plov.", options: ["cooked", "cooks", "cook", "cooking"], answer: "cooked" },
      { question: "'I need a charger.' → He said he _____ a charger.", options: ["needs", "needed", "need", "needing"], answer: "needed" },
      { question: "'We want to go home.' → They said they _____ to go home.", options: ["want", "wants", "wanted", "had wanted"], answer: "wanted" },
      { question: "'It is not fair.' → She cried that it _____ not fair.", options: ["is", "was", "be", "were"], answer: "was" }
    ],
    exercises: [
      {
        title: "The Gossip Chain - Set A",
        items: [
          { direct: "I love K-Pop.", start: "She said she", answer: "loved", end: "K-Pop." },
          { direct: "I hate math.", start: "He told me he", answer: "hated", end: "math." },
          { direct: "We live in Tashkent.", start: "They said they", answer: "lived", end: "in Tashkent." },
          { direct: "My phone is broken.", start: "He said his phone", answer: "was", end: "broken." },
          { direct: "I don't eat meat.", start: "She said she", answer: "didn't eat", end: "meat." }
        ]
      },
      {
        title: "The Gossip Chain - Set B",
        items: [
          { direct: "It costs too much.", start: "He said it", answer: "cost", end: "too much." },
          { direct: "I understand everything.", start: "She said she", answer: "understood", end: "everything." },
          { direct: "My cat hates you.", start: "He joked that his cat", answer: "hated", end: "me." },
          { direct: "We are best friends.", start: "They said they", answer: "were", end: "best friends." },
          { direct: "I study English.", start: "He told me he", answer: "studied", end: "English." }
        ]
      },
      {
        title: "The Gossip Chain - Set C",
        items: [
          { direct: "I exercise daily.", start: "She said she", answer: "exercised", end: "daily." },
          { direct: "You talk too much.", start: "He told me I", answer: "talked", end: "too much." },
          { direct: "I want a refund.", start: "The customer said he", answer: "wanted", end: "a refund." },
          { direct: "The Wi-Fi is slow.", start: "They complained the Wi-Fi", answer: "was", end: "slow." },
          { direct: "I don't have cash.", start: "He said he", answer: "didn't have", end: "cash." }
        ]
      }
    ]
  },
  {
    title: "2. Present Continuous → Past Continuous",
    context: "The Gamer's Lag",
    grammarInfo: {
      rule: "Am/Is/Are → Was/Were",
      form: "Subject + Was/Were + V-ing",
      exampleDirect: "I am lagging!",
      exampleReported: "He screamed that he was lagging."
    },
    test: [
      { question: "'I am winning!' → He said he _____ winning.", options: ["is", "was", "had been", "were"], answer: "was" },
      { question: "'They are cheating!' → He shouted that they _____ cheating.", options: ["are", "were", "have been", "had been"], answer: "were" },
      { question: "'My mom is calling me.' → He said his mom _____ him.", options: ["is calling", "was calling", "called", "calls"], answer: "was calling" },
      { question: "'We are losing control.' → They said they _____ control.", options: ["were losing", "are losing", "lost", "lose"], answer: "were losing" },
      { question: "'I am not playing anymore.' → She said she _____ anymore.", options: ["is not playing", "was not playing", "didn't play", "not playing"], answer: "was not playing" },
      { question: "'You are standing in the fire.' → He told me I _____ in the fire.", options: ["am standing", "was standing", "were standing", "stood"], answer: "was standing" },
      { question: "'The game is loading.' → He said the game _____ loading.", options: ["was", "is", "were", "has"], answer: "was" },
      { question: "'People are watching us.' → She whispered that people _____ them.", options: ["are watching", "were watching", "watched", "watch"], answer: "were watching" },
      { question: "'I am streaming right now.' → He said he _____ right then.", options: ["was streaming", "is streaming", "streamed", "streams"], answer: "was streaming" },
      { question: "'My computer is dying.' → She cried that her computer _____ dying.", options: ["is", "was", "were", "died"], answer: "was" },
      { question: "'We are waiting for you.' → They told me they _____ for me.", options: ["waited", "are waiting", "were waiting", "waiting"], answer: "were waiting" },
      { question: "'It is raining outside.' → He said it _____ outside.", options: ["was raining", "is raining", "rained", "rains"], answer: "was raining" },
      { question: "'They are not listening.' → She complained they _____ listening.", options: ["were not", "are not", "did not", "do not"], answer: "were not" },
      { question: "'I am fixing the bug.' → The dev said he _____ the bug.", options: ["fixed", "is fixing", "was fixing", "fixes"], answer: "was fixing" },
      { question: "'You are being toxic.' → He told me I _____ toxic.", options: ["was being", "am being", "were being", "be"], answer: "was being" }
    ],
    exercises: [
      {
        title: "The Party Report - Set A",
        items: [
          { direct: "I am dancing.", start: "She said she", answer: "was dancing" },
          { direct: "He is sleeping on the sofa.", start: "She said he", answer: "was sleeping", end: "on the sofa." },
          { direct: "We are leaving now.", start: "They said they", answer: "were leaving", end: "then." },
          { direct: "I am eating chips.", start: "He said he", answer: "was eating", end: "chips." },
          { direct: "The music is playing too loud.", start: "They said the music", answer: "was playing", end: "too loud." }
        ]
      },
      {
        title: "The Party Report - Set B",
        items: [
          { direct: "I am not feeling well.", start: "She said she", answer: "was not feeling", end: "well." },
          { direct: "They are taking photos.", start: "He said they", answer: "were taking", end: "photos." },
          { direct: "You are driving too fast.", start: "She told him he", answer: "was driving", end: "too fast." },
          { direct: "I am looking for my keys.", start: "He said he", answer: "was looking", end: "for his keys." },
          { direct: "We are having fun.", start: "They said they", answer: "were having", end: "fun." }
        ]
      },
      {
        title: "The Party Report - Set C",
        items: [
          { direct: "The baby is crying.", start: "She said the baby", answer: "was crying" },
          { direct: "I am studying for IELTS.", start: "He said he", answer: "was studying", end: "for IELTS." },
          { direct: "She is ignoring me.", start: "He complained she", answer: "was ignoring", end: "him." },
          { direct: "We are planning a trip.", start: "They said they", answer: "were planning", end: "a trip." },
          { direct: "I am just joking.", start: "He said he", answer: "was just joking" }
        ]
      }
    ]
  },
  {
    title: "3. Past Simple / Present Perfect → Past Perfect",
    context: "The Excuse Maker",
    grammarInfo: {
      rule: "Did/Have Done → Had Done",
      form: "Subject + Had + V3",
      exampleDirect: "I lost my bag.",
      exampleReported: "He said he had lost his bag."
    },
    test: [
      { question: "'I forgot my book.' → He said he _____ his book.", options: ["forgot", "has forgotten", "had forgotten", "forget"], answer: "had forgotten" },
      { question: "'My dog ate it.' → He claimed his dog _____ it.", options: ["ate", "had eaten", "has eaten", "eats"], answer: "had eaten" },
      { question: "'I have finished it already.' → She said she _____ it already.", options: ["has finished", "finished", "had finished", "finishes"], answer: "had finished" },
      { question: "'I didn't see the message.' → He said he _____ the message.", options: ["didn't see", "hasn't seen", "hadn't seen", "saw"], answer: "hadn't seen" },
      { question: "'We went to the doctor.' → They said they _____ to the doctor.", options: ["went", "had gone", "have gone", "go"], answer: "had gone" },
      { question: "'I have never been there.' → She told us she _____ never _____ there.", options: ["has/been", "had/been", "was/being", "have/been"], answer: "had/been" },
      { question: "'You promised me.' → She said I _____ her.", options: ["promised", "have promised", "had promised", "promise"], answer: "had promised" },
      { question: "'I bought a new phone.' → He showed us the phone he _____.", options: ["bought", "had bought", "has bought", "buys"], answer: "had bought" },
      { question: "'The Wi-Fi stopped working.' → He said the Wi-Fi _____ working.", options: ["stopped", "has stopped", "had stopped", "stops"], answer: "had stopped" },
      { question: "'I have lost my wallet.' → He realized he _____ his wallet.", options: ["lost", "has lost", "had lost", "loses"], answer: "had lost" },
      { question: "'We didn't know about the test.' → They claimed they _____ about the test.", options: ["didn't know", "haven't known", "hadn't known", "don't know"], answer: "hadn't known" },
      { question: "'She sent the email yesterday.' → He said she _____ the email the day before.", options: ["sent", "has sent", "had sent", "sends"], answer: "had sent" },
      { question: "'I have seen this movie.' → He said he _____ that movie.", options: ["saw", "had seen", "has seen", "sees"], answer: "had seen" },
      { question: "'They left early.' → She noted that they _____ early.", options: ["left", "had left", "have left", "leave"], answer: "had left" },
      { question: "'I broke my leg.' → He said he _____ his leg.", options: ["broke", "had broken", "has broken", "breaks"], answer: "had broken" }
    ],
    exercises: [
      {
        title: "The Police Report - Set A",
        items: [
          { direct: "I stole the car.", start: "The thief admitted he", answer: "had stolen", end: "the car." },
          { direct: "I didn't do it.", start: "He said he", answer: "had not done", end: "it." },
          { direct: "I have seen the suspect.", start: "The witness said she", answer: "had seen", end: "the suspect." },
          { direct: "We escaped through the window.", start: "They admitted they", answer: "had escaped", end: "through the window." },
          { direct: "The bank closed at 5.", start: "He said the bank", answer: "had closed", end: "at 5." }
        ]
      },
      {
        title: "The Police Report - Set B",
        items: [
          { direct: "I have lived here for years.", start: "He said he", answer: "had lived", end: "there for years." },
          { direct: "She wrote a letter.", start: "He said she", answer: "had written", end: "a letter." },
          { direct: "We didn't hear the alarm.", start: "They said they", answer: "had not heard", end: "the alarm." },
          { direct: "I have cooked dinner.", start: "Mom said she", answer: "had cooked", end: "dinner." },
          { direct: "He crashed the car.", start: "She said he", answer: "had crashed", end: "the car." }
        ]
      },
      {
        title: "The Police Report - Set C",
        items: [
          { direct: "I have finished the level.", start: "He bragged he", answer: "had finished", end: "the level." },
          { direct: "You lied to me.", start: "She said I", answer: "had lied", end: "to her." },
          { direct: "I found a cat.", start: "He said he", answer: "had found", end: "a cat." },
          { direct: "We haven't met.", start: "She said they", answer: "had not met" },
          { direct: "The movie started.", start: "He said the movie", answer: "had started" }
        ]
      }
    ]
  },
  {
    title: "4. Future (Will) → Conditional (Would)",
    context: "Empty Promises",
    grammarInfo: {
      rule: "Will → Would",
      form: "Subject + Would + Verb",
      exampleDirect: "I will love you forever.",
      exampleReported: "He said he would love me forever."
    },
    test: [
      { question: "'I will lower taxes.' → He promised he _____ lower taxes.", options: ["will", "would", "had", "has"], answer: "would" },
      { question: "'We will build a bridge.' → They said they _____ build a bridge.", options: ["will", "would", "are", "can"], answer: "would" },
      { question: "'It will be amazing.' → He said it _____ be amazing.", options: ["would", "will", "was", "is"], answer: "would" },
      { question: "'I won't lie to you.' → He swore he _____ lie to us.", options: ["won't", "wouldn't", "didn't", "hadn't"], answer: "wouldn't" },
      { question: "'You will see changes.' → He said we _____ see changes.", options: ["will", "would", "saw", "see"], answer: "would" },
      { question: "'I will help you tomorrow.' → He said he _____ help me the next day.", options: ["will", "would", "can", "could"], answer: "would" },
      { question: "'We will never surrender.' → They said they _____ never surrender.", options: ["would", "will", "did", "do"], answer: "would" },
      { question: "'It will rain later.' → The forecast said it _____ rain later.", options: ["will", "would", "is", "was"], answer: "would" },
      { question: "'I will call you.' → He said he _____ call me.", options: ["will", "would", "calls", "called"], answer: "would" },
      { question: "'She will be late.' → He said she _____ be late.", options: ["would", "will", "is", "was"], answer: "would" },
      { question: "'They will arrive soon.' → He noted they _____ arrive soon.", options: ["will", "would", "are", "have"], answer: "would" },
      { question: "'I will not do it.' → He refused and said he _____ do it.", options: ["will not", "wouldn't", "didn't", "doesn't"], answer: "wouldn't" },
      { question: "'We will win.' → The captain said they _____ win.", options: ["would", "will", "won", "win"], answer: "would" },
      { question: "'You will regret this.' → The villain said I _____ regret that.", options: ["will", "would", "did", "do"], answer: "would" },
      { question: "'It will cost $50.' → He said it _____ cost $50.", options: ["will", "would", "costs", "cost"], answer: "would" }
    ],
    exercises: [
      {
        title: "The Fortune Teller - Set A",
        items: [
          { direct: "You will be rich.", start: "She predicted I", answer: "would", end: "be rich." },
          { direct: "You will meet a tall stranger.", start: "She said I", answer: "would", end: "meet a tall stranger." },
          { direct: "It will happen soon.", start: "She said it", answer: "would", end: "happen soon." },
          { direct: "You won't be lonely.", start: "She said I", answer: "would not", end: "be lonely." },
          { direct: "Everything will be okay.", start: "She said everything", answer: "would", end: "be okay." }
        ]
      },
      {
        title: "The Fortune Teller - Set B",
        items: [
          { direct: "I will buy the car.", start: "Dad said he", answer: "would", end: "buy the car." },
          { direct: "We will go to Disneyland.", start: "They promised we", answer: "would", end: "go to Disneyland." },
          { direct: "I won't tell anyone.", start: "He promised he", answer: "would not", end: "tell anyone." },
          { direct: "The test will be easy.", start: "The teacher said the test", answer: "would", end: "be easy." },
          { direct: "I'll be right back.", start: "He said he", answer: "would", end: "be right back." }
        ]
      },
      {
        title: "The Fortune Teller - Set C",
        items: [
          { direct: "It will snow tomorrow.", start: "The TV said it", answer: "would", end: "snow the next day." },
          { direct: "I will fix the roof.", start: "He said he", answer: "would", end: "fix the roof." },
          { direct: "They will get married.", start: "She gossiped that they", answer: "would", end: "get married." },
          { direct: "I will send the money.", start: "He said he", answer: "would", end: "send the money." },
          { direct: "You will love this song.", start: "He said I", answer: "would", end: "love that song." }
        ]
      }
    ]
  },
  {
    title: "5. Wh-Questions",
    context: "The Jealous Partner",
    grammarInfo: {
      rule: "No do/did + Subject before Verb",
      form: "Wh-word + Subject + Verb",
      exampleDirect: "Where do you live?",
      exampleReported: "He asked where I lived."
    },
    test: [
      { question: "'Where are you going?' → He asked where _____.", options: ["are you going", "I was going", "was I going", "am I going"], answer: "I was going" },
      { question: "'What is your name?' → He asked what _____.", options: ["my name is", "was my name", "my name was", "is my name"], answer: "my name was" },
      { question: "'Why did you leave?' → He asked why _____.", options: ["did I leave", "I had left", "I leave", "had I left"], answer: "I had left" },
      { question: "'When does the train leave?' → He asked when the train _____.", options: ["left", "leaves", "did leave", "does leave"], answer: "left" },
      { question: "'Who is that girl?' → She asked who that girl _____.", options: ["is", "was", "be", "were"], answer: "was" },
      { question: "'How much does it cost?' → He asked how much it _____.", options: ["costed", "costs", "cost", "does cost"], answer: "cost" },
      { question: "'Where have you been?' → She asked where I _____ been.", options: ["have", "had", "was", "did"], answer: "had" },
      { question: "'What are you eating?' → He asked what I _____.", options: ["was eating", "am eating", "eat", "ate"], answer: "was eating" },
      { question: "'Why are you crying?' → He asked why I _____ crying.", options: ["am", "was", "were", "did"], answer: "was" },
      { question: "'When will you return?' → He asked when I _____ return.", options: ["will", "would", "do", "did"], answer: "would" },
      { question: "'Where do you work?' → He asked where I _____.", options: ["work", "worked", "did work", "working"], answer: "worked" },
      { question: "'What did she say?' → He asked what she _____.", options: ["said", "had said", "say", "did say"], answer: "had said" },
      { question: "'How old are you?' → He asked how old _____.", options: ["was I", "I was", "am I", "I am"], answer: "I was" },
      { question: "'Who called you?' → He asked who _____ me.", options: ["called", "had called", "calls", "did call"], answer: "had called" },
      { question: "'Why is the sky blue?' → The child asked why the sky _____ blue.", options: ["is", "was", "were", "be"], answer: "was" }
    ],
    exercises: [
      {
        title: "The Celebrity Interview - Set A",
        items: [
          { direct: "Where do you buy your clothes?", start: "The fan asked where", answer: "I bought", end: "my clothes." },
          { direct: "What is your favorite movie?", start: "He asked what my favorite movie", answer: "was" },
          { direct: "Why are you famous?", start: "She asked why I", answer: "was", end: "famous." },
          { direct: "When did you start singing?", start: "He asked when I", answer: "had started", end: "singing." },
          { direct: "How do you stay fit?", start: "She asked how I", answer: "stayed", end: "fit." }
        ]
      },
      {
        title: "The Celebrity Interview - Set B",
        items: [
          { direct: "Where is the bathroom?", start: "He asked where the bathroom", answer: "was" },
          { direct: "What are you doing?", start: "Dad asked what I", answer: "was doing" },
          { direct: "Why did you quit?", start: "The boss asked why I", answer: "had quit" },
          { direct: "Who is your teacher?", start: "Mom asked who my teacher", answer: "was" },
          { direct: "How will you pay?", start: "The waiter asked how I", answer: "would pay" }
        ]
      },
      {
        title: "The Celebrity Interview - Set C",
        items: [
          { direct: "What time is it?", start: "He asked what time it", answer: "was" },
          { direct: "Where did they go?", start: "She asked where they", answer: "had gone" },
          { direct: "Why is he angry?", start: "She asked why he", answer: "was", end: "angry." },
          { direct: "How much money do you have?", start: "He asked how much money I", answer: "had" },
          { direct: "When is the party?", start: "He asked when the party", answer: "was" }
        ]
      }
    ]
  },
  {
    title: "6. Yes/No Questions",
    context: "The Suspicious Mom",
    grammarInfo: {
      rule: "Use If/Whether + No do/did",
      form: "Asked + if + Subject + Verb",
      exampleDirect: "Do you like pizza?",
      exampleReported: "He asked if I liked pizza."
    },
    test: [
      { question: "'Do you have homework?' → Mom asked _____ I had homework.", options: ["that", "if", "did", "what"], answer: "if" },
      { question: "'Did you brush your teeth?' → She asked if I _____ my teeth.", options: ["brushed", "had brushed", "brush", "did brush"], answer: "had brushed" },
      { question: "'Are you hungry?' → She asked _____ I was hungry.", options: ["whether", "that", "did", "are"], answer: "whether" },
      { question: "'Can you help me?' → She asked if I _____ help her.", options: ["can", "could", "did", "will"], answer: "could" },
      { question: "'Is it raining?' → She asked if it _____ raining.", options: ["is", "was", "were", "has"], answer: "was" },
      { question: "'Have you finished?' → She asked if I _____ finished.", options: ["have", "had", "did", "was"], answer: "had" },
      { question: "'Will you be late?' → She asked if I _____ be late.", options: ["will", "would", "do", "did"], answer: "would" },
      { question: "'Do you know him?' → She asked if I _____ him.", options: ["knew", "know", "known", "did know"], answer: "knew" },
      { question: "'Did you break this?' → She asked if I _____ that.", options: ["broke", "had broken", "break", "did break"], answer: "had broken" },
      { question: "'Are you listening?' → She asked if I _____ listening.", options: ["am", "was", "were", "did"], answer: "was" },
      { question: "'Does he speak English?' → She asked if he _____ English.", options: ["spoke", "speaks", "speak", "did speak"], answer: "spoke" },
      { question: "'May I come in?' → He asked if he _____ come in.", options: ["may", "might", "can", "could"], answer: "might" },
      { question: "'Must we go?' → He asked if they _____ go.", options: ["had to", "must", "have to", "should"], answer: "had to" },
      { question: "'Is this yours?' → She asked if that _____ mine.", options: ["is", "was", "were", "be"], answer: "was" },
      { question: "'Did you see the news?' → He asked whether I _____ the news.", options: ["saw", "had seen", "see", "did see"], answer: "had seen" }
    ],
    exercises: [
      {
        title: "The First Date - Set A",
        items: [
          { direct: "Do you like cats?", start: "He asked if I", answer: "liked", end: "cats." },
          { direct: "Are you single?", start: "He asked if I", answer: "was", end: "single." },
          { direct: "Did you enjoy the movie?", start: "She asked if I", answer: "had enjoyed", end: "the movie." },
          { direct: "Can you cook?", start: "She asked if I", answer: "could", end: "cook." },
          { direct: "Will you call me?", start: "She asked if I", answer: "would", end: "call her." }
        ]
      },
      {
        title: "The First Date - Set B",
        items: [
          { direct: "Have you been to Paris?", start: "He asked if I", answer: "had been", end: "to Paris." },
          { direct: "Is this your car?", start: "He asked if that", answer: "was", end: "my car." },
          { direct: "Do you smoke?", start: "She asked if I", answer: "smoked" },
          { direct: "Did you go to university?", start: "She asked if I", answer: "had gone", end: "to university." },
          { direct: "Are you tired?", start: "He asked if I", answer: "was", end: "tired." }
        ]
      },
      {
        title: "The First Date - Set C",
        items: [
          { direct: "Does your dad know?", start: "He asked if my dad", answer: "knew" },
          { direct: "Were you popular in school?", start: "She asked if I", answer: "had been", end: "popular in school." },
          { direct: "Can I kiss you?", start: "He asked if he", answer: "could", end: "kiss me." },
          { direct: "Do you want dessert?", start: "The waiter asked if we", answer: "wanted", end: "dessert." },
          { direct: "Is it time to go?", start: "She asked if it", answer: "was", end: "time to go." }
        ]
      }
    ]
  }
];