// Scenario 6
export const scenario_6D = [
    { isFinal: false, // Scenario
        c1: 1, score: 0, 
        question: "Charline and Jennie are best friends in middle school. Charline has been having vaginal discharge for a while now. She has told Jennie that she has had sex with her boyfriend last month for the first time. Today, during break, she sits in a private area with Jennie and talks about her vaginal discharge and how she is scared but cannot tell her mom about it.", 
        choices: ["Jennie is concerned and talks to her own mom"], 
    },
    { isFinal: false, // Scenario cont.
        c1: 2, c2: 8, score: +5, 
        question: "Jennie decides to talk with her mother about Charline's problem and the history of sex. How might Jennie's mom respond?", 
        choices: ["Start a conversation", "Ignore Charline"], 
    },
    { isFinal: false, // A
        c1: 3, score: +5, 
        question: "Jennie and her mom start a conversation about different types of STI's, focusing on Chlamydia, modes of transmission, symptoms and methods of protection", 
        choices: ["Continue"], 
    },
    { isFinal: false, // A1
        c1: 4, c2: 4, score: +5, 
        question: "Mom asks, 'Jennie, what do you know about Chlamydia?' How might Jennie respond?", 
        choices: ["It comes from sex?", "I don't know anything about it"], 
    },
    { isFinal: false, // A1 cont.
        c1: 5, score: 0, 
        question: "Mom says, 'Well, let us sit and discuss what is Chlamydia, where does it come from, what are the symptoms and how to be protected.'", 
        choices: ["Continue"], 
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
    },
    { isFinal: false, // A1 cont. 3
        c1: 7, score: +5, 
        question: "Jennie says, 'Thanks mom! How can we help Charline?'", 
        choices: ["Continue"], 
    },
    { isFinal: true, // A1 outcome, game over
        c1: 7, score: +5, 
        question: "Jennie's mother says, 'You should advise her to see a physician.'", 
        choices: ["Finish game"], 
    },
    { isFinal: false, // B
        c1: 9, score: -10, 
        question: "Jennie's mom tells her that Charline's problem is not her responsibility and she should stop talking with her.", 
        choices: ["Continue"], 
    },
    { isFinal: true, // B1 outcome, game over
        c1: 9, score: 0, 
        isInfobox: true,
        h1: "What is Chlamydia?",
        p1: "Chlamydia is one of the sexually transmitted infections (STIs). You can get chlamydia during oral, vaginal, or anal sex with someone who has the infection. Chlamydia doesn't usually cause any symptoms. So, you may not realize that you have it. People with chlamydia who have no symptoms can still pass the disease to others.",
        h2: "Symptoms of Chlamydia for girls are",
        // use | delimiter to separate bullet points
        list: "Abnormal vaginal discharge, which may have a strong smell|A burning sensation when urinating|Pain during intercourse",
        h3: "What happens when the infection is not treated?", 
        p2: "If it is not treated, the infection can spread, and you might get lower abdominal pain, pain during sex, nausea, or fever.",
        choices: ["Finish game"], 
    },
];
