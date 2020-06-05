// Scenario 6
export const scenario_6D = [
    {
        background: "Your friend started engaging in sexual activity. She told you about her vaginal discomfort; she expressed her fear and uncertainty and asked you for help since she cannot communicate about sexual health with her mother.",
        next: 1,
    },
    {
        background: "You want to help your friend, but you don’t have anyone to talk with except your mother. You are hesitating to start a conversation, but finally you do. You tell your mother about your friend and what’s going on with her from A to Z.",
        next: 2,
    },
    {
        text: "Mother is cooking dinner in the kitchen. Daughter just came back from school, and is anxiously standing at the front door. Daughter is fidgeting and tapping her foot on the floor, after what her friend told her at school.",
        next: 3,
    },
    {
        text: "During recess, daughter is sitting next to her friend in an empty classroom. Her friend begins to confide in her about her problem.",
        next: 4,
    },
    {
        speaker: "Friend",
        dialogue: "It feels like I am having my period, but it is thick and yellow. It's been a while now. And it smells so bad.",
        next: 5,
    },
    {
        speaker: "Daughter",
        dialogue: "Really? Have you seen anyone for that? Have you told your mom?",
        next: 6,
    },
    {
        speaker: "Friend",
        dialogue: "What are you talking about? I can't tell my mom, she'll be angry...",
        next: 7,
    },
    {
        speaker: "Daughter",
        dialogue: "Why? What's wrong? When did it start?",
        next: 8,
    },
    {
        speaker: "Friend",
        dialogue: "Um... do you remember a couple weeks ago, when Derrick asked me to go out with him after school and you walked home alone?",
        next: 9,
    },
    {
        speaker: "Daughter",
        dialogue: "Yeah, I remember.",
        next: 10,
    },
    {
        speaker: "Friend",
        dialogue: "Okay, well... That day, we went to his grandmother's basement and we had sex.",
        next: 11,
    },
    {
        speaker: "Daughter",
        dialogue: "And you started having this problem after that...",
        next: 12,
    },
    {
        speaker: "Friend",
        dialogue: "Yes! I need help, but I don't know where and how. I'm scared to tell my mom or even to tell Derrick. He might break up with me.",
        next: 13,
    },
    {
        text: "Back to the present, daughter walks towards her mother with small, hesitant steps. She is biting her nails and looking downwards, trying to prevent eye contact.",
        next: 14,
    },
    {
        speaker: "Mother",
        dialogue: "Hi sweetie, how was your day?",
        next: 15,
    },
    {
        speaker: "Daughter",
        dialogue: "Hi mom. It was good.",
        next: 16,
    },
    {
        speaker: "Mother",
        dialogue: "Is everything okay?",
        next: 17,
    },
    {
        speaker: "Daughter",
        dialogue: "Um... Mom, there's something with my friend I want to tell you about.",
        next: 18,
    },
    {
        speaker: "Mother",
        dialogue: "Okay, I can listen and try to help.",
        next: 19,
    },
    {
        speaker: "Daughter",
        dialogue: "Mom, do you remember my friend Jennie? We were talking today during break, and she told me she is having her period, but its yellow. She said that it smells so bad and she has been having them for a week now.",
        next: 20,
    },
    {
        speaker: "Mother",
        dialogue: "Hmm. That's concerning. Has she talked with her mother about that?",
        next: 21,
    },
    {
        speaker: "Daughter",
        dialogue: "No. She can't!",
        next: 22,
    },
    {
        speaker: "Mother",
        dialogue: "Oh sweetie, why can't she talk to her mom?",
        next: 23,
    },
    {
        speaker: "Daughter",
        dialogue: "Because... A couple of weeks ago, the day I walked home alone, she was going out with her boyfriend. She told me they went to his grandmother's house and they had sex.",
        next: 24,
    },
    {
        speaker: "Mother",
        dialogue: "Oh. It sounds like Jennie has an STI, or a sexually transmitted infection.",
        next: 25,
    },
    {
        speaker: "Daughter",
        dialogue: "Huh? How do you know that?",
        next: 26,
    },
    {
        speaker: "Mother",
        dialogue: "Well, it seems like her vaginal discharge has a bad smell. It also must be making her feel really uncomfortable, too. And since she's sexually active too, those are some probable signs that she has an STI.",
        choices: ["How do you get an STI?", "How can I help Jennie?", "Never mind"],
        c1: 27,
        c2: ...,
        c3: ...,
    },
    {
        speaker: "Daughter",
        dialogue: "Oh...",
        next: 28,
    },
    {
        speaker: "Mother",
        dialogue: "Well, ",
        next: 29,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
    {
        speaker: "",
        dialogue: "",
        next: 15,
    },
];

/*
    { isFinal: false, // Scenario
        c1: 1, score: 0, 
        question: "Charline and Jennie are best friends in middle school. Charline has been having vaginal discharge for a while now. She has told Jennie that she has had sex with her boyfriend last month for the first time. Today, during break, she sits in a private area with Jennie and talks about her vaginal discharge and how she is scared but cannot tell her mom about it.", 
        choices: ["Jennie is concerned and talks to her own mom"], 
    },
    { isFinal: false, // A1 cont. 2, not a question
        c1: 6, score: +5, 
        isInfobox: true,
        h1: "What is Chlamydia?",
        p1: "Chlamydia is one of the sexually transmitted infections (STIs). You can get chlamydia during oral, vaginal, or anal sex with someone who has the infection. Chlamydia doesn't usually cause any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        h2: "Symptoms of Chlamydia for girls",
        // use | delimiter to separate bullet points
        list: "Abnormal vaginal discharge, which may have a strong smell|A burning sensation when urinating|Pain during intercourse",
        h3: "What happens when the infection is not treated?", 
        p2: "If it is not treated, the infection can spread, and you might get lower abdominal pain, pain during sex, nausea, or fever.",
        choices: ["Continue"], 
    }

*/