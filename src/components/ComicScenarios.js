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
        dialogue: "Well, it seems like her vaginal discharge has a bad smell. It also must be making her feel really uncomfortable, too. And since she's also sexually active, those are some probable signs that she has an STI.",
        choices: ["How do you get an STI?", "Never mind"],
        c1: 27,
        c2: 63,
    },
    // Option 1
    {
        speaker: "Daughter",
        dialogue: "Oh, OK. So, my friend might have an STI. How does one get STI? Will she be okay? Do I have STI now after hugging her because she was crying?",
        next: 28,
        score: +5,
    },
    {
        speaker: "Mother",
        dialogue: "Sweetie, what do you know about chlamydia?",
        choice: ["It comes from sex?", "I don't know"],
        c1: 29,
        c2: 30,
    },
    {
        speaker: "Daughter",
        dialogue: "Um... It comes from sex? I'm guessing that since it's one of the most common STIs.",
        next: 31,
    },
    {
        speaker: "Daughter",
        dialogue: "I don't know anything about it.",
        next: 31,
    },
    {
        speaker: "Mother",
        dialogue: "So, chlamydia is a common STI. In most cases there are no symptoms, especially among youth aged between 15 to 24 years.",
        next: 32,
    },
    {
        speaker: "Daughter",
        dialogue: "That's scary mom. So how does one get chlamydia? Who is at risk of getting it?",
        next: 33,
    },
    {
        speaker: "Mother",
        dialogue: "Well, chlamydia is passed on through sexual contact.",
        next: 34,
    },
    {
        speaker: "Daughter",
        dialogue: "So, is this like HIV? Does it last forever?!",
        next: 35,
    },
    {
        speaker: "Mother",
        dialogue: "Well, people who have chlamydia can get the infection treated. But people who have had chlamydia and have been treated may get infected again if they have sexual contact with a person infected with chlamydia.",
        next: 36,
    },
    {
        speaker: "Daughter",
        dialogue: "Mom, who is at risk of getting chlamydia?",
        next: 37,
    },
    {
        speaker: "Mother",
        dialogue: "Hmm. So, after talking about how does one get chlamydia, who do you think is at risk of getting Chlamydia?",
        choices: ["Everyone", "People who have sex", "People who have sex with infected partners"],
        c1: 38,
        c2: 39,
        c3: 40,
    },
    {
        speaker: "Daughter",
        dialogue: "Everyone is at risk of getting chlamydia.",
        next: 41,
    },
    {
        speaker: "Daughter",
        dialogue: "Is it just people who have sex?",
        next: 41,
    },
    {
        speaker: "Daughter",
        dialogue: "Is it just people who have sex with infected partners?",
        next: 41,
    },
    {
        speaker: "Mother",
        dialogue: "Any sexually active person can be infected with chlamydia. It is very common STI, especially among young people. Young people don’t use condoms consistently are at risk.",
        next: 42,
    },
    {
        speaker: "Daughter",
        dialogue: "That's interesting. I have another question. How does one know that she has chlamydia? What are the symptoms?",
        next: 43,
    },
    {
        speaker: "Mother",
        dialogue: "That's a good question, sweetie. Someone can have chlamydia without any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        next: 44,
    },
    {
        speaker: "Mother",
        dialogue: "If someone has symptoms, this may be how they would experience it: abnormal vaginal discharge, which may have a strong smell; a burning sensation when urinating; and pain during sexual activity.",
        next: 45,
    },
    {
        speaker: "Daughter",
        dialogue: "Huh, I see. Having it doesn't necessarily mean showing symptoms, which is scary! So, how can we protect ourselves from getting it?",
        next: 46,
    },
    {
        speaker: "Mother",
        dialogue: "You're asking some good questions! So, latex male condoms, when used consistently and correctly, can reduce the risk of chlamydia and other STIs.",
        next: 47,
    },
    {
        speaker: "Mother",
        dialogue: "I think that a sexual relationship is complicated and needs open communication between the people involved. My hope for you is to have a close open relationship with a partner who treats you with respect.",
        next: 48,
    },
    {
        speaker: "Daughter",
        dialogue: "But mom, what should my friend do? How can she get tested? Is it a painful test?",
        next: 49,
    },
    {
        speaker: "Mother",
        dialogue: "Not at all, sweetie. A girl can collect the sample herself by inserting a swab like a tampon, and rotating it several times, then inserting it in a container that is given.",
        next: 50,
    },
    {
        speaker: "Daughter",
        dialogue: "That's a relief! At least she can get tested without pain, or having to have that exam!",
        next: 51,
    },
    {
        speaker: "Daughter",
        dialogue: "And what's the treatment? Should someone who has chlamydia be admitted to the hospital?",
        next: 52,
    },
    {
        speaker: "Mother",
        dialogue: "No. Chlamydia can be easily treated with antibiotics.",
        next: 53,
    },
    {
        speaker: "Daughter",
        dialogue: "Okay. Mom, thank you so much for telling me about this. I had no idea this was what chlamydia was all about.",
        next: 54,
    },
    {
        speaker: "Mother",
        dialogue: "You're welcome, sweetie! And don't forget- I'm here to talk with you about your problems and help you, regardless of the topic.",
        next: 55,
    },
    {
        speaker: "Daughter",
        dialogue: "Thanks, mom!",
        next: 56,
    },
    {
        speaker: "Mother",
        dialogue: "Did you have anything else on your mind?",
        choices: ["How can I help Jennie?", "Forget it"],
        c1: 57,
        c2: 63,
    },
    // Option 1a
    {
        speaker: "Daughter",
        dialogue: "So mom, how can I help my friend? What can I do? What's wrong with her?",
        next: 58,
        score: +5,
    },
    {
        speaker: "Mother",
        dialogue: "Well sweetie, the most important thing is that she gets checked by a nurse practitioner or physician. She can go to any Planned Parenthood center and get checked.",
        next: 59,
    },
    {
        speaker: "Daughter",
        dialogue: "Hmm... is it something serious?!",
        next: 60,
    },
    {
        speaker: "Mother",
        dialogue: "It might just be that Jennie has chlamydia. Luckily, chlamydia is treatable. It's better for her to get treated as soon as possible.",
        next: 61,
    },
    // game over
    {
        speaker: "Daughter",
        dialogue: "Okay. I'll let her know. Thanks, mom!",
        gameOver: true,
    },
    // Option 2: Daughter refuses to help Jennie
    {
        speaker: "Daughter",
        dialogue: "Um... Actually, I guess I should focus on my studies and forget about her problems. It's almost the end of the year, and I need to be ready for exams.",
        gameOver: true,
        score: -10,
    },
];
