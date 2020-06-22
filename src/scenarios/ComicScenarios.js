// Scenario 6
export const D6 = [
    {
        background: "Your friend started engaging in sexual activity. She told you about her vaginal discomfort; she expressed her fear and uncertainty and asked you for help since she cannot communicate about sexual health with her mother.",
        next: 1,
    },
    {
        background: "You want to help your friend, but you don't have anyone to talk with except your mother. You are hesitating to start a conversation, but finally you do. You tell your mother about your friend and what's going on with her from A to Z.",
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
        emotion: 2,
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
        emotion: 3,
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
        emotion: 2,
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
        emotion: 3,
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
        emotion: 1,
        dialogue: "Hi sweetie, how was your day?",
        next: 15,
    },
    {
        speaker: "Daughter",
        emotion: 4,
        dialogue: "Hi mom. It was good.",
        next: 16,
    },
    {
        speaker: "Mother",
        emotion: 5,
        dialogue: "Is everything okay?",
        next: 17,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Um... Mom, there's something with my friend I want to tell you about.",
        next: 18,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Okay, I can listen and try to help.",
        next: 19,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "Mom, do you remember my friend Jennie? We were talking today during break, and she told me she is having her period, but its yellow. She said that it smells so bad and she has been having them for a week now.",
        next: 20,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Hmm. That's concerning. Has she talked with her mother about that?",
        next: 21,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "No. She can't!",
        next: 22,
    },
    {
        speaker: "Mother",
        emotion: 5,
        dialogue: "Oh sweetie, why can't she talk to her mom?",
        next: 23,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Because... A couple of weeks ago, the day I walked home alone, she was going out with her boyfriend. She told me they went to his grandmother's house and they had sex.",
        next: 24,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Oh. It sounds like Jennie has an STI, or a sexually transmitted infection.",
        next: 25,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Huh? How do you know that?",
        next: 26,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Well, her vaginal discharge has a bad smell. I can only imagine that she feels really uncomfortable, too. And since she's also sexually active, those are some probable signs that she has an STI.",
        choices: ["How do you get an STI?", "Never mind"],
        c1: 27,
        c2: 62,
    },
    // Option 1
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "Oh, OK. So, my friend might have an STI. How does one get STI? Will she be okay? Do I have STI now after hugging her because she was crying?",
        next: 28,
        score: +5,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Sweetie, what do you know about chlamydia?",
        choices: ["It comes from sex?", "I don't know"],
        c1: 29,
        c2: 30,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Um... It comes from sex? I'm guessing that since it's one of the most common STIs.",
        next: 31,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "I don't know anything about it.",
        next: 31,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "So, chlamydia is a common STI. In most cases there are no symptoms, especially among youth aged between 15 to 24 years.",
        next: 32,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "That's scary mom. So how does one get chlamydia? Who is at risk of getting it?",
        next: 33,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, chlamydia is passed on through sexual contact.",
        next: 34,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "So, is this like HIV? Does it last forever?!",
        next: 35,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, people who have chlamydia can get the infection treated. But people who have had chlamydia and have been treated may get infected again if they have sexual contact with a person infected with chlamydia.",
        next: 36,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Mom, who is at risk of getting chlamydia?",
        next: 37,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Hmm. So, after talking about how does one get chlamydia, who do you think is at risk of getting chlamydia?",
        choices: ["Everyone", "People who have sex", "People who have sex with infected partners"],
        c1: 38,
        c2: 39,
        c3: 40,
    },
    {
        speaker: "Daughter",
        emotion: 6,
        dialogue: "Everyone is at risk of getting chlamydia.",
        next: 41,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Is it just people who have sex?",
        next: 41,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Is it just people who have sex with infected partners?",
        next: 41,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Any sexually active person can be infected with chlamydia. It is very common STI, especially among young people. Young people who don't use condoms consistently are at risk.",
        next: 42,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Oh, okay. I have another question. How does one know that she has chlamydia? What are the symptoms?",
        next: 43,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "That's a good question, sweetie. Someone can have chlamydia without any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        next: 44,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "If someone has symptoms, this may be how they would experience it: abnormal vaginal discharge, which may have a strong smell; a burning sensation when urinating; and pain during sexual activity.",
        next: 45,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Huh, I see. Having it doesn't necessarily mean showing symptoms, which is scary! So, how can we protect ourselves from getting it?",
        next: 46,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're asking some good questions! So, latex male condoms, when used consistently and correctly, can reduce the risk of chlamydia and other STIs.",
        next: 47,
    },
    {
        speaker: "Mother",
        emotion: 7,
        dialogue: "I think that a sexual relationship is complicated and needs open communication between the people involved. My hope for you is to have a close open relationship with a partner who treats you with respect.",
        next: 48,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "But mom, what should my friend do? How can she get tested? Is it a painful test?",
        next: 49,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Not at all, sweetie. A girl can collect the sample herself by inserting a swab like a tampon, and rotating it several times, then inserting it in a container that is given.",
        next: 50,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "That's a relief! At least she can get tested without pain, or having to have that exam!",
        next: 51,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "And what's the treatment? Should someone who has chlamydia be admitted to the hospital?",
        next: 52,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "No. Chlamydia can be easily treated with antibiotics.",
        next: 53,
    },
    {
        speaker: "Daughter",
        emotion: 4,
        dialogue: "Okay. Mom, thank you so much for telling me about this. I had no idea this was what chlamydia was all about.",
        next: 54,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're welcome, sweetie! And don't forget- I'm here to talk with you about your problems and help you, regardless of the topic.",
        next: 55,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Thanks, mom!",
        next: 56,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Did you have anything else on your mind?",
        choices: ["How can I help Jennie?", "Forget it"],
        c1: 57,
        c2: 62,
    },
    // Option 1a
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "So mom, how can I help my friend? What can I do? What's wrong with her?",
        next: 58,
        score: +5,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Well sweetie, the most important thing is that she gets checked by a nurse practitioner or physician. She can go to any Planned Parenthood center and get checked.",
        next: 59,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "Hmm... is it something serious?!",
        next: 60,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "It might just be that Jennie has chlamydia. Luckily, chlamydia is treatable. It's better for her to get treated as soon as possible.",
        next: 61,
    },
    // game over
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Okay. I'll let her know. Thanks, mom!",
        gameOver: true,
    },
    // Option 2: Daughter refuses to help Jennie
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Um... Actually, I guess I should focus on my studies and forget about her problems. It's almost the end of the year, and I need to be ready for exams.",
        gameOver: true,
        score: -10,
    },
];

export const M6 = [
    {
        background: "Your daughter's friend, Jennie, has started engaging in sexual activity. She is the daughter of your neighbor and best friend. You overheard them talking with each other about Jennie's vaginal discomfort, which started after her first-time sexual activity couple weeks ago. Jennie expressed her fear and uncertainty and asked your daughter for help since she cannot communicate about sexual health with her mother.",
        next: 1,
    },
    {
        background: "You are concerned and want to discuss the topic with your daughter.",
        next: 2,
    },
    {
        text: "Jennie, who is the daughter of your neighbor and best friend, is also the best friend of your daughter. She comes over on a weekend to spend some time with your daughter.",
        next: 3,
    },
    {
        text: "They enter your daughter’s room and close the door. But since the cat likes going in and out, they crack open the door.",
        next: 4,
    },
    {
        text: "After the mother is done cooking, she decides to get some juice and cake for the girls. She walks towards her daughter's room and overhears a conversation related to sex. She stops and tries to listen to the conversation.",
        next: 5,
    },
    {
        speaker: "Friend",
        dialogue: "It feels like I am having my period, but it is thick and yellow. It's been a while now. And it smells so bad.",
        next: 6,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Really? Have you seen anyone for that? Have you told your mom?",
        next: 7,
    },
    {
        speaker: "Friend",
        dialogue: "What are you talking about? I can't tell my mom, she'll be angry...",
        next: 8,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Why? What's wrong? When did it start?",
        next: 9,
    },
    {
        speaker: "Friend",
        dialogue: "Um... do you remember a couple weeks ago, when Derrick asked me to go out with him after school and you walked home alone?",
        next: 10,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Yeah, I remember.",
        next: 11,
    },
    {
        speaker: "Friend",
        dialogue: "Okay, well... That day, we went to his grandmother's basement and we had sex.",
        next: 12,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "And you started having this problem after that...",
        next: 13,
    },
    {
        speaker: "Friend",
        dialogue: "Yes! I need help, but I don't know where and how. I'm scared to tell my mom or even to tell Derrick. He might break up with me.",
        next: 14,
    },
    {
        text: "Back to the present, daughter is watching TV. Mother approaches and sits next to her daughter, starts watching the movie with her. A couple of minutes later, while watching, she starts a conversation.",
        next: 15,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Sweetheart, how was your day?",
        next: 16,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Oh, hey mom. It was good.",
        next: 17,
    },    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "How were your classes? How’s your friend Jennie doing?",
        next: 18,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Classes were good. I got A on biology. She's doing well.",
        next: 19,
    },    {
        speaker: "Mother",
        emotion: 7,
        dialogue: "...Can we talk, sweetie? I want to tell you about something.",
        next: 20,
    },
    {
        speaker: "Daughter",
        emotion: 6,
        dialogue: "Oh! Okay. Anything wrong?",
        next: 21,
    },    {
        speaker: "Mother",
        emotion: 5,
        dialogue: "Sweetie, I overheard you the other day talking with Jennie about her problem.",
        next: 22,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Mom!",
        next: 23,
    },
    {
        speaker: "Mother",
        emotion: 7,
        dialogue: "And I want to apologize for eavesdropping. It's just that, well, I want you to know that you can trust me in your problems.",
        next: 24,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Um... Okay. I appreciate that. ",
        next: 25,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "So, do you know what’s going on with your friend?",
        next: 26,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "No, I have no idea. She feels like she is having her period, but it's yellow.",
        choices: ["She might have an STI", "Forget about it"],
        c1: 27,
        c2: 59,
    },
    // Option 1
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "It sounds like Jennie has an STI, or a sexually transmitted infection.",
        next: 28,
        score: +5,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Huh? How do you know that?",
        next: 29,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Well, her vaginal discharge has a bad smell. I can only imagine that she feels really uncomfortable, too. And since she's also sexually active, those are some probable signs that she has an STI.",
        next: 30,
    },
    {
        speaker: "Daughter",
        emotion: 6,
        dialogue: "Oh, OK. So, my friend might have an STI. How does one get STI? Will she be okay? Do I have STI now after hugging her because she was crying?",
        next: 31,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Sweetie, what do you know about chlamydia?",
        next: 32,
    },
    {
        speaker: "Daughter",
        emotion: 6,
        dialogue: "Um... Well, it comes from sex, right? It must be really common.",
        next: 33,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Right, chlamydia is a common STI. In most cases there are no symptoms, especially among youth aged between 15 to 24 years.",
        next: 34,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "That's scary mom. So how does one get chlamydia? Who is at risk of getting it?",
        next: 35,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, chlamydia is passed on through sexual contact.",
        next: 36,
    },
    // Option 1a
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "So, is this like HIV? Does it last forever?!",
        choices: ["Yes", "No"],
        c1: 37,
        c2: 38,
    },
    // Wrong option
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Yes, the infection is like HIV. It's caused by a virus, but your body can develop a resistance to the virus only for so long.",
        next: 39,
        score: -5,
    },
    // Correct option
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, people who have chlamydia can get the infection treated. But people who have had chlamydia and have been treated may get infected again if they have sexual contact with a person infected with chlamydia.",
        next: 40,
        score: +5,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "That's horrible! Mom, who is at risk of getting chlamydia?",
        next: 41,
    },
    {
        speaker: "Daughter",
        emotion: 4,
        dialogue: "Oh... so that's good, then Jennie will be okay! Mom, who is at risk of getting chlamydia?",
        next: 41,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Hmm. So, after talking about how does one get chlamydia, who do you think is at risk of getting chlamydia?",
        next: 42,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Is it just people who have sex with infected partners?",
        next: 43,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Any sexually active person can be infected with chlamydia. It is very common STI, especially among young people. Young people who don't use condoms consistently are at risk.",
        next: 44,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Oh, okay. I have another question. How does one know that she has chlamydia? What are the symptoms?",
        next: 45,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "That's a good question, sweetie. Someone can have chlamydia without any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        next: 46,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "If someone has symptoms, this may be how they would experience it: abnormal vaginal discharge, which may have a strong smell; a burning sensation when urinating; and pain during sexual activity.",
        next: 47,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Huh, I see. Having it doesn't necessarily mean showing symptoms, which is scary! So, how can we protect ourselves from getting it?",
        next: 48,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're asking some good questions! So, latex male condoms, when used consistently and correctly, can reduce the risk of chlamydia and other STIs.",
        next: 49,
    },
    {
        speaker: "Mother",
        dialogue: "I think that a sexual relationship is complicated and needs open communication between the people involved. My hope for you is to have a close open relationship with a partner who treats you with respect.",
        next: 50,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "But mom, what should my friend do? How can she get tested? Is it a painful test?",
        next: 51,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Not at all, sweetie. A girl can collect the sample herself by inserting a swab like a tampon, and rotating it several times, then inserting it in a container that is given.",
        next: 52,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "That's a relief! At least she can get tested without pain, or having to have that exam!",
        next: 53,
    },
    // Option 1b
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "And what's the treatment? Should someone who has chlamydia be admitted to the hospital?",
        choices: ["Yes", "No"],
        c1: 54,
        c2: 55,
    },
    // Wrong option
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Yes. Because chlamydia is a virus, you need to be stabilized in the hospital.",
        next: 56,
        score: -5,
    },
    // Correct option
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "No. Chlamydia can be easily treated with antibiotics.",
        next: 56,
        score: +5,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Okay. Mom, thank you so much for telling me about this. I had no idea this was what chlamydia was all about.",
        next: 57,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're welcome, sweetie! And don't forget- I'm here to talk with you about your problems and help you, regardless of the topic.",
        next: 58,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Thanks, mom!",
        gameOver: true,
    },
    // Option 2
    {
        speaker: "Mother",
        emotion: 4,
        dialogue: "Sweetie, your friend seems to be in trouble, and her problems are not the responsibility of either of us. You are a smart student, and you should be focusing on your school and studies, and never talk with your friend again.",
        next: 60,
        score: -20,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Okay mom. I agree that I should focus on my studies and forget about her problems since it is almost the end of the year and I need to be ready for the exams.",
        gameOver: true,
    },
];

export const test1 = [
    // Question 0
    {
        speaker: "Friend",
        dialogue: "Hi, how are you?",
        choices: ["I'm good", "Go away!"],
        c1: 1,
        c2: 2,
    },
    // Question 1
    {
        speaker: "Daughter",
        dialogue: "I'm good. Let's hang out next time.",
        gameOver: true,
        score: +5,
    },
    // Question 2
    {
        speaker: "Daughter",
        dialogue: "Don't talk to me! Go away!",
        gameOver: true,
        score: -5,
    }
];

export const test2 = [
    // Question 0
    {
        speaker: "Friend",
        dialogue: "About last time we talked...",
        choices: ["Let's hang out", "Can't be friends"],
        c1: 1,
        c2: 2,
    },
    // Question 1
    {
        speaker: "Daughter",
        dialogue: "Hey, let's hang out!",
        gameOver: true,
        score: +5,
    },
    // Question 2
    {
        speaker: "Daughter",
        dialogue: "I don't know if I want to be your friend...",
        gameOver: true,
        score: -5,
    }
];

// edited to use videos
export const D6_1 = [
    {
        background: "Your friend started engaging in sexual activity. She told you about her vaginal discomfort; she expressed her fear and uncertainty and asked you for help since she cannot communicate about sexual health with her mother.",
        next: 1,
    },
    {
        background: "You want to help your friend, but you don't have anyone to talk with except your mother. You are hesitating to start a conversation, but finally you do. You tell your mother about your friend and what's going on with her from A to Z.",
        next: 2,
    },
    {
        text: "Mother is cooking dinner in the kitchen. Daughter just came back from school, and is anxiously standing at the front door. Daughter is fidgeting and tapping her foot on the floor, after what her friend told her at school.",
        next: 3,
    },
    {
        video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_1.mp4?raw=true",
        next: 4,
    },
    {
        text: "During recess, daughter is sitting next to her friend in an empty classroom. Her friend begins to confide in her about her problem.",
        next: 5,
    },
    {
        video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_2.mp4?raw=true",
        next: 6,
    },
    {
        text: "Back to the present, daughter walks towards her mother with small, hesitant steps. She is biting her nails and looking downwards, trying to prevent eye contact.",
        next: 7,
    },
    {
        video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_3.mp4?raw=true",
        next: 8,
    },
    {
        text: "What would be the daughter's reaction?",
        choices: ["Oh, okay. So, my friend might have an STI. How does one get an STI? Will she be okay? Do I have an STI now after hugging her because she was crying?", "Okay, mom. But how can I help my friend?", "I guess I should focus on my studies and forget about her problems. It is almost the end of the year and I need to be ready for exams."],
        c1: 9,
        c2: 39,
        c3: 44,
    },
    // Option 1
    {
        video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_4.mp4?raw=true",
        next: 10,
        score: +5,
    },
    {
        text: "What would be the daughter's reaction?",
        choices: ["It comes from sex?", "I don't know"],
        c1: 11,
        c2: 12,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Um... It comes from sex? I'm guessing that since it's one of the most common STIs.",
        next: 13,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "I don't know anything about it.",
        next: 13,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "So, chlamydia is a common STI. In most cases there are no symptoms, especially among youth aged between 15 to 24 years.",
        next: 14,
    },
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "That's scary mom. So how does one get chlamydia? Who is at risk of getting it?",
        next: 15,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, chlamydia is passed on through sexual contact.",
        next: 16,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "So, is this like HIV? Does it last forever?!",
        next: 17,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Well, people who have chlamydia can get the infection treated. But people who have had chlamydia and have been treated may get infected again if they have sexual contact with a person infected with chlamydia.",
        next: 18,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Mom, who is at risk of getting chlamydia?",
        next: 19,
    },
    {
        speaker: "Mother",
        emotion: 3,
        dialogue: "Hmm. So, after talking about how does one get chlamydia, who do you think is at risk of getting chlamydia?",
        choices: ["Everyone", "People who have sex", "People who have sex with infected partners"],
        c1: 20,
        c2: 21,
        c3: 22,
    },
    {
        speaker: "Daughter",
        emotion: 6,
        dialogue: "Everyone is at risk of getting chlamydia.",
        next: 23,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Is it just people who have sex?",
        next: 23,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Is it just people who have sex with infected partners?",
        next: 23,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "Any sexually active person can be infected with chlamydia. It is very common STI, especially among young people. Young people who don't use condoms consistently are at risk.",
        next: 24,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "Oh, okay. I have another question. How does one know that she has chlamydia? What are the symptoms?",
        next: 25,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "That's a good question, sweetie. Someone can have chlamydia without any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        next: 26,
    },
    {
        speaker: "Mother",
        emotion: 2,
        dialogue: "If someone has symptoms, this may be how they would experience it: abnormal vaginal discharge, which may have a strong smell; a burning sensation when urinating; and pain during sexual activity.",
        next: 27,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Huh, I see. Having it doesn't necessarily mean showing symptoms, which is scary! So, how can we protect ourselves from getting it?",
        next: 28,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're asking some good questions! So, latex male condoms, when used consistently and correctly, can reduce the risk of chlamydia and other STIs.",
        next: 29,
    },
    {
        speaker: "Mother",
        emotion: 7,
        dialogue: "I think that a sexual relationship is complicated and needs open communication between the people involved. My hope for you is to have a close open relationship with a partner who treats you with respect.",
        next: 30,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "But mom, what should my friend do? How can she get tested? Is it a painful test?",
        next: 31,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Not at all, sweetie. A girl can collect the sample herself by inserting a swab like a tampon, and rotating it several times, then inserting it in a container that is given.",
        next: 32,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "That's a relief! At least she can get tested without pain, or having to have that exam!",
        next: 33,
    },
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "And what's the treatment? Should someone who has chlamydia be admitted to the hospital?",
        next: 34,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "No. Chlamydia can be easily treated with antibiotics.",
        next: 35,
    },
    {
        speaker: "Daughter",
        emotion: 4,
        dialogue: "Okay. Mom, thank you so much for telling me about this. I had no idea this was what chlamydia was all about.",
        next: 36,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "You're welcome, sweetie! And don't forget- I'm here to talk with you about your problems and help you, regardless of the topic.",
        next: 37,
    },
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Thanks, mom!",
        next: 38,
    },
    {
        speaker: "Mother",
        emotion: 1,
        dialogue: "Did you have anything else on your mind?",
        choices: ["How can I help Jennie?", "Forget it"],
        c1: 39,
        c2: 44,
    },
    // Option 1a
    {
        speaker: "Daughter",
        emotion: 2,
        dialogue: "So mom, how can I help my friend? What can I do? What's wrong with her?",
        next: 40,
        score: +5,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "Well sweetie, the most important thing is that she gets checked by a nurse practitioner or physician. She can go to any Planned Parenthood center and get checked.",
        next: 41,
    },
    {
        speaker: "Daughter",
        emotion: 5,
        dialogue: "Hmm... is it something serious?!",
        next: 42,
    },
    {
        speaker: "Mother",
        emotion: 6,
        dialogue: "It might just be that Jennie has chlamydia. Luckily, chlamydia is treatable. It's better for her to get treated as soon as possible.",
        next: 43,
    },
    // game over
    {
        speaker: "Daughter",
        emotion: 1,
        dialogue: "Okay. I'll let her know. Thanks, mom!",
        gameOver: true,
    },
    // Option 2: Daughter refuses to help Jennie
    {
        speaker: "Daughter",
        emotion: 3,
        dialogue: "Um... Actually, I guess I should focus on my studies and forget about her problems. It's almost the end of the year, and I need to be ready for exams.",
        gameOver: true,
        score: -10,
    },
];