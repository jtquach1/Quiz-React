// Scenario 6
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
  }, {
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
  }, {
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
  }, {
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

// edited to use videos
export const D6_1 = [
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_1.mp4?raw=true",
    next: 1,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_2.mp4?raw=true",
    next: 2,
  },
  {
    title: "What would be the daughter's reaction?",
    choices: ["Oh, okay. So, my friend might have an STI. How does one get an STI? Will she be okay? Do I have an STI now after hugging her because she was crying?", "Okay, mom. But how can I help my friend?", "I guess I should focus on my studies and forget about her problems. It is almost the end of the year and I need to be ready for exams."],
    bg: "https://raw.githubusercontent.com/jtquach1/Quiz-React/master/assets/backgrounds/gettyimages-1165365520-612x612.jpg",
    c1: 3,
    c2: 14,
  },
  // Option 1
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_3_1.mp4?raw=true",
    next: 4,
    score: +5,
  },
  {
    title: "What would be the daughter's reaction?",
    choices: ["I am guessing it comes from sex since it is one of the most common STIs", "I don't know anything about it"],
    bg: "https://raw.githubusercontent.com/jtquach1/Quiz-React/master/assets/backgrounds/gettyimages-1165365520-612x612.jpg",
    c1: 5,
    c2: 5,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_3_2.mp4?raw=true",
    next: 6,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_4.mp4?raw=true",
    next: 7,
  },
  {
    title: "Who is at risk of getting chlamydia?",
    choices: ["People can get it from hugging someone", "People can get it from toilet seats", "People who have sex with infected partners"],
    bg: "https://raw.githubusercontent.com/jtquach1/Quiz-React/master/assets/backgrounds/gettyimages-1165365520-612x612.jpg",
    c1: 8,
    c2: 8,
    c3: 9,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_5.mp4?raw=true",
    next: 10,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_5.mp4?raw=true",
    next: 10,
    score: +5,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_6.mp4?raw=true",
    next: 11,
  },
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_7.mp4?raw=true",
    next: 12,
  },
  {
    title: "Did you have anything else on your mind?",
    choices: ["How can I help Ciara?", "No, that was all I had on my mind."],
    bg: "https://raw.githubusercontent.com/jtquach1/Quiz-React/master/assets/backgrounds/gettyimages-1165365520-612x612.jpg",
    c1: 13,
    c2: 15,
  },
  // Option 1a
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_8.mp4?raw=true",
    gameOver: true,
    score: +10,
  },
  // Option 2: Daughter refuses to help Ciara
  // Before getting info
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_9.mp4?raw=true",
    gameOver: true,
    score: -10,
  },
  // After getting info
  {
    video: "https://github.com/jtquach1/Quiz-React/blob/master/assets/videos/scenario_6_10.mp4?raw=true",
    gameOver: true,
    score: -10,
  },
];
