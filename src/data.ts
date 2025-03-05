import { Level } from './types';

export const levels: Level[] = [
  {
    id: 1,
    title: "Mental Wellness Basics",
    requiredCoins: 0,
    questions: [
      {
        id: 1,
        text: "How do you typically handle stress in challenging situations?",
        options: [
          "I avoid the situation completely",
          "I face it head-on but often feel overwhelmed",
          "I break it down into smaller, manageable steps",
          "I seek help from others when needed"
        ],
        correctAnswer: 2,
        explanation: "Breaking down challenges helps maintain mental clarity and reduces overwhelming feelings.",
        coins: 10
      },
      {
        id: 2,
        text: "What's your go-to method for relaxation?",
        options: [
          "Scrolling social media",
          "Deep breathing exercises",
          "Watching TV shows",
          "Playing video games"
        ],
        correctAnswer: 1,
        explanation: "Deep breathing is scientifically proven to reduce stress and anxiety levels.",
        coins: 15
      },
      {
        id: 3,
        text: "How do you deal with negative thoughts?",
        options: [
          "Let them consume me",
          "Ignore them completely",
          "Challenge them with positive evidence",
          "Share them on social media"
        ],
        correctAnswer: 2,
        explanation: "Challenging negative thoughts with evidence helps build emotional resilience.",
        coins: 20
      },
      {
        id: 4,
        text: "What's your approach to setting personal goals?",
        options: [
          "I don't set goals",
          "I set extremely high goals",
          "I set realistic, achievable goals",
          "I let others set goals for me"
        ],
        correctAnswer: 2,
        explanation: "Setting realistic goals promotes sustainable personal growth and motivation.",
        coins: 15
      },
      {
        id: 5,
        text: "How do you maintain work-life balance?",
        options: [
          "Work comes first always",
          "Set clear boundaries",
          "Handle things as they come",
          "Ignore personal life"
        ],
        correctAnswer: 1,
        explanation: "Clear boundaries are essential for maintaining mental well-being and preventing burnout.",
        coins: 20
      },
      {
        id: 6,
        text: "What's your response to failure?",
        options: [
          "Give up immediately",
          "Blame others",
          "Learn from the experience",
          "Pretend it didn't happen"
        ],
        correctAnswer: 2,
        explanation: "Viewing failure as a learning opportunity builds resilience and growth mindset.",
        coins: 25
      },
      {
        id: 7,
        text: "How do you handle conflicts with others?",
        options: [
          "Avoid them completely",
          "Become aggressive",
          "Listen and communicate openly",
          "Gossip about it"
        ],
        correctAnswer: 2,
        explanation: "Open communication builds stronger relationships and reduces stress.",
        coins: 20
      },
      {
        id: 8,
        text: "What's your morning routine like?",
        options: [
          "Rush immediately to work",
          "Start with mindfulness",
          "Check social media first",
          "Skip breakfast"
        ],
        correctAnswer: 1,
        explanation: "Starting the day mindfully sets a positive tone for better mental health.",
        coins: 15
      },
      {
        id: 9,
        text: "How do you practice self-care?",
        options: [
          "I don't have time for it",
          "Only when stressed",
          "Regular scheduled activities",
          "Through retail therapy"
        ],
        correctAnswer: 2,
        explanation: "Regular self-care is crucial for maintaining long-term mental wellness.",
        coins: 20
      },
      {
        id: 10,
        text: "What's your approach to seeking help?",
        options: [
          "Never ask for help",
          "Only in emergencies",
          "Regularly when needed",
          "Depend entirely on others"
        ],
        correctAnswer: 2,
        explanation: "Seeking help when needed is a sign of strength and self-awareness.",
        coins: 25
      }
    ]
  },
  {
    id: 2,
    title: "Emotional Intelligence",
    requiredCoins: 100,
    questions: [
      {
        id: 1,
        text: "How do you recognize your emotions?",
        options: [
          "I ignore them",
          "I journal about them",
          "I let them control me",
          "I discuss with friends"
        ],
        correctAnswer: 1,
        explanation: "Journaling helps in understanding and processing emotions effectively.",
        coins: 20
      },
      {
        id: 2,
        text: "What do you do when feeling overwhelmed?",
        options: [
          "Push through it",
          "Take a mindful break",
          "Give up completely",
          "Blame others"
        ],
        correctAnswer: 1,
        explanation: "Taking mindful breaks helps prevent burnout and maintains emotional balance.",
        coins: 25
      },
      {
        id: 3,
        text: "How do you handle criticism?",
        options: [
          "Take it personally",
          "Ignore it completely",
          "Learn from it constructively",
          "Get defensive"
        ],
        correctAnswer: 2,
        explanation: "Constructive handling of criticism promotes personal growth and resilience.",
        coins: 30
      },
      {
        id: 4,
        text: "What's your approach to empathy?",
        options: [
          "Avoid others' feelings",
          "Try to fix everything",
          "Listen and understand",
          "Judge their situation"
        ],
        correctAnswer: 2,
        explanation: "Active listening and understanding builds stronger emotional connections.",
        coins: 25
      },
      {
        id: 5,
        text: "How do you manage anger?",
        options: [
          "Suppress it",
          "Express it immediately",
          "Process it healthily",
          "Take it out on others"
        ],
        correctAnswer: 2,
        explanation: "Healthy processing of anger prevents emotional and relationship damage.",
        coins: 30
      },
      {
        id: 6,
        text: "What's your response to joy?",
        options: [
          "Downplay it",
          "Share it with others",
          "Feel guilty about it",
          "Keep it to yourself"
        ],
        correctAnswer: 1,
        explanation: "Sharing joy multiplies happiness and strengthens social bonds.",
        coins: 20
      },
      {
        id: 7,
        text: "How do you handle disappointment?",
        options: [
          "Dwell on it",
          "Ignore it",
          "Learn and move forward",
          "Blame yourself"
        ],
        correctAnswer: 2,
        explanation: "Learning from disappointment builds emotional resilience.",
        coins: 25
      },
      {
        id: 8,
        text: "What's your approach to gratitude?",
        options: [
          "Never think about it",
          "Practice it daily",
          "Only when things are good",
          "Compare with others"
        ],
        correctAnswer: 1,
        explanation: "Regular gratitude practice improves mental well-being and perspective.",
        coins: 20
      },
      {
        id: 9,
        text: "How do you deal with change?",
        options: [
          "Resist it always",
          "Panic about it",
          "Adapt gradually",
          "Rush into it"
        ],
        correctAnswer: 2,
        explanation: "Gradual adaptation to change reduces stress and anxiety.",
        coins: 25
      },
      {
        id: 10,
        text: "What's your approach to emotional boundaries?",
        options: [
          "No boundaries",
          "Set healthy limits",
          "Complete isolation",
          "Let others decide"
        ],
        correctAnswer: 1,
        explanation: "Healthy emotional boundaries protect mental well-being.",
        coins: 30
      }
    ]
  },
  {
    id: 3,
    title: "Stress Management",
    requiredCoins: 250,
    questions: [
      {
        id: 1,
        text: "How do you handle work pressure?",
        options: [
          "Work longer hours",
          "Prioritize and delegate",
          "Ignore deadlines",
          "Give up tasks"
        ],
        correctAnswer: 1,
        explanation: "Effective prioritization reduces work-related stress.",
        coins: 30
      },
      {
        id: 2,
        text: "What's your sleep routine?",
        options: [
          "Irregular schedule",
          "Consistent bedtime",
          "Work until exhausted",
          "Depends on mood"
        ],
        correctAnswer: 1,
        explanation: "Regular sleep patterns are crucial for stress management.",
        coins: 25
      },
      {
        id: 3,
        text: "How do you manage time?",
        options: [
          "No planning",
          "Strict scheduling",
          "Flexible planning",
          "Procrastinate"
        ],
        correctAnswer: 2,
        explanation: "Flexible time management reduces stress while maintaining productivity.",
        coins: 30
      },
      {
        id: 4,
        text: "What's your exercise routine?",
        options: [
          "No exercise",
          "Regular activity",
          "Extreme workouts",
          "Only when stressed"
        ],
        correctAnswer: 1,
        explanation: "Regular physical activity helps manage stress levels.",
        coins: 25
      },
      {
        id: 5,
        text: "How do you handle multiple tasks?",
        options: [
          "Multitask always",
          "One at a time",
          "Avoid tasks",
          "Rush through them"
        ],
        correctAnswer: 1,
        explanation: "Focusing on one task reduces cognitive load and stress.",
        coins: 30
      },
      {
        id: 6,
        text: "What's your approach to breaks?",
        options: [
          "No breaks needed",
          "Regular intervals",
          "Only when exhausted",
          "Long, infrequent breaks"
        ],
        correctAnswer: 1,
        explanation: "Regular breaks maintain productivity and reduce stress.",
        coins: 25
      },
      {
        id: 7,
        text: "How do you handle deadlines?",
        options: [
          "Last minute rush",
          "Plan ahead",
          "Ignore them",
          "Get overwhelmed"
        ],
        correctAnswer: 1,
        explanation: "Planning ahead reduces deadline-related stress.",
        coins: 30
      },
      {
        id: 8,
        text: "What's your nutrition approach?",
        options: [
          "Skip meals often",
          "Balanced meals",
          "Stress eating",
          "Random eating"
        ],
        correctAnswer: 1,
        explanation: "Proper nutrition supports stress management.",
        coins: 25
      },
      {
        id: 9,
        text: "How do you handle digital overload?",
        options: [
          "Always connected",
          "Set usage limits",
          "Avoid technology",
          "No boundaries"
        ],
        correctAnswer: 1,
        explanation: "Digital boundaries prevent information overload and stress.",
        coins: 30
      },
      {
        id: 10,
        text: "What's your relaxation technique?",
        options: [
          "No relaxation",
          "Regular meditation",
          "Only entertainment",
          "Sleep it off"
        ],
        correctAnswer: 1,
        explanation: "Regular relaxation practices are essential for stress management.",
        coins: 25
      }
    ]
  },
  {
    id: 4,
    title: "Relationship Building",
    requiredCoins: 400,
    questions: [
      {
        id: 1,
        text: "How do you maintain friendships?",
        options: [
          "Wait for contact",
          "Regular check-ins",
          "Only when needed",
          "Social media only"
        ],
        correctAnswer: 1,
        explanation: "Regular communication maintains strong friendships.",
        coins: 30
      },
      {
        id: 2,
        text: "What's your conflict resolution style?",
        options: [
          "Avoid conflict",
          "Open discussion",
          "Aggressive approach",
          "Silent treatment"
        ],
        correctAnswer: 1,
        explanation: "Open communication resolves conflicts effectively.",
        coins: 35
      },
      {
        id: 3,
        text: "How do you show appreciation?",
        options: [
          "Assume they know",
          "Express it directly",
          "Only on occasions",
          "Keep it to yourself"
        ],
        correctAnswer: 1,
        explanation: "Direct expression of appreciation strengthens relationships.",
        coins: 30
      },
      {
        id: 4,
        text: "What's your listening style?",
        options: [
          "Think of responses",
          "Active listening",
          "Interrupt often",
          "Get distracted"
        ],
        correctAnswer: 1,
        explanation: "Active listening builds understanding and trust.",
        coins: 35
      },
      {
        id: 5,
        text: "How do you handle trust?",
        options: [
          "Trust no one",
          "Build it gradually",
          "Trust immediately",
          "Test people"
        ],
        correctAnswer: 1,
        explanation: "Gradual trust-building creates lasting relationships.",
        coins: 30
      },
      {
        id: 6,
        text: "What's your approach to boundaries?",
        options: [
          "No boundaries",
          "Clear communication",
          "Rigid walls",
          "Others decide"
        ],
        correctAnswer: 1,
        explanation: "Clear boundaries create healthy relationships.",
        coins: 35
      },
      {
        id: 7,
        text: "How do you support others?",
        options: [
          "Solve their problems",
          "Listen and validate",
          "Give advice only",
          "Avoid involvement"
        ],
        correctAnswer: 1,
        explanation: "Listening and validation provide meaningful support.",
        coins: 30
      },
      {
        id: 8,
        text: "What's your approach to forgiveness?",
        options: [
          "Hold grudges",
          "Process and release",
          "Forget instantly",
          "Seek revenge"
        ],
        correctAnswer: 1,
        explanation: "Healthy forgiveness maintains relationship well-being.",
        coins: 35
      },
      {
        id: 9,
        text: "How do you handle differences?",
        options: [
          "Force agreement",
          "Respect diversity",
          "Avoid discussion",
          "Judge others"
        ],
        correctAnswer: 1,
        explanation: "Respecting differences enriches relationships.",
        coins: 30
      },
      {
        id: 10,
        text: "What's your commitment style?",
        options: [
          "Avoid commitments",
          "Honor promises",
          "Over-commit",
          "Break easily"
        ],
        correctAnswer: 1,
        explanation: "Honoring commitments builds trust and reliability.",
        coins: 35
      }
    ]
  },
  {
    id: 5,
    title: "Personal Growth",
    requiredCoins: 600,
    questions: [
      {
        id: 1,
        text: "How do you approach learning?",
        options: [
          "Avoid new things",
          "Continuous growth",
          "Only when required",
          "Compare with others"
        ],
        correctAnswer: 1,
        explanation: "Continuous learning promotes personal development.",
        coins: 40
      },
      {
        id: 2,
        text: "What's your goal-setting approach?",
        options: [
          "No goals",
          "SMART goals",
          "Vague wishes",
          "Others' goals"
        ],
        correctAnswer: 1,
        explanation: "SMART goals guide meaningful personal growth.",
        coins: 45
      },
      {
        id: 3,
        text: "How do you handle feedback?",
        options: [
          "Reject it",
          "Learn from it",
          "Take it personally",
          "Ignore it"
        ],
        correctAnswer: 1,
        explanation: "Learning from feedback enables personal improvement.",
        coins: 40
      },
      {
        id: 4,
        text: "What's your self-reflection practice?",
        options: [
          "Avoid reflection",
          "Regular practice",
          "Only in crisis",
          "Overthink everything"
        ],
        correctAnswer: 1,
        explanation: "Regular self-reflection promotes self-awareness.",
        coins: 45
      },
      {
        id: 5,
        text: "How do you approach challenges?",
        options: [
          "Avoid them",
          "Growth opportunities",
          "Get overwhelmed",
          "Give up easily"
        ],
        correctAnswer: 1,
        explanation: "Viewing challenges as opportunities promotes growth.",
        coins: 40
      },
      {
        id: 6,
        text: "What's your approach to comfort zones?",
        options: [
          "Never leave",
          "Gradual expansion",
          "Reckless risks",
          "Stay comfortable"
        ],
        correctAnswer: 1,
        explanation: "Gradual expansion of comfort zones enables growth.",
        coins: 45
      },
      {
        id: 7,
        text: "How do you measure progress?",
        options: [
          "Compare with others",
          "Personal benchmarks",
          "Ignore progress",
          "External validation"
        ],
        correctAnswer: 1,
        explanation: "Personal benchmarks provide meaningful progress measures.",
        coins: 40
      },
      {
        id: 8,
        text: "What's your approach to habits?",
        options: [
          "Resist change",
          "Build gradually",
          "Force changes",
          "No structure"
        ],
        correctAnswer: 1,
        explanation: "Gradual habit building creates lasting change.",
        coins: 45
      },
      {
        id: 9,
        text: "How do you handle setbacks?",
        options: [
          "Give up",
          "Learn and adjust",
          "Blame others",
          "Ignore them"
        ],
        correctAnswer: 1,
        explanation: "Learning from setbacks strengthens resilience.",
        coins: 40
      },
      {
        id: 10,
        text: "What's your vision for growth?",
        options: [
          "No vision",
          "Clear direction",
          "Others' vision",
          "Unrealistic plans"
        ],
        correctAnswer: 1,
        explanation: "A clear vision guides meaningful personal growth.",
        coins: 45
      }
    ]
  }
];

export const calculateTitle = (correctAnswers: number): string => {
  if (correctAnswers >= 9) return "Mental Wellness Master";
  if (correctAnswers >= 7) return "Emotional Intelligence Expert";
  if (correctAnswers >= 5) return "Mindfulness Practitioner";
  if (correctAnswers >= 3) return "Wellness Apprentice";
  return "Beginning Explorer";
};