/* Questions and Answers */
// Scenario 1
export const scenario_1 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "Mother notices that daughter is texting alot.  She wonders if daughter has a boyfriend. What should she do?", 
        choices: ["Talk to her", "Secretly take her phone", "", ""], 
    },
    { isFinal: false, // A
        c1: 3, c2: 4, c3: 1, c4: 1, score: +5, 
        question: "Mother decides to talk to daughter about her texting habits. How should she approach daughter?", 
        choices: ["Approach daughter with openness and ability to listen.", "Approach daughter nervous and defensive.", "", ""], 
    },
    { isFinal: false, // B
        c1: 7, c2: 8, c3: 2, c4: 2, score: -5, 
        question: "Mother secretly gets daughter's phone and looks at her texts. What might happen next?", 
        choices: ["She finds out that daughter is talking to a boy, and will go to daughter with what she read.", "Daughter catches mother reading her text messages.", "", ""], 
    },
    { isFinal: false, // A1
        c1: 5, c2: 5, c3: 3, c4: 3, score: +5, 
        question: "Mother approaches daughter, saying 'I know you're growing up to be a young woman. If you ever need any advice, well, I'm here!'. How might daughter respond?", 
        choices: ["Daughter says, 'Alright. Thanks, mom.'", "Daughter says, 'Don't worry about it, mom.'", "", ""], 
    },
    { isFinal: false, // A2
        c1: 6, c2: 6, c3: 4, c4: 4, score: -5, 
        question: "Mother approaches daughter, saying 'I saw you spending too much time on your phone! You shouldn't be talking to boys!'. How might daughter respond?", 
        choices: ["Daughter says, 'Ugh, well what would YOU know?!'", "Daughter says, 'You have no idea what you're talking about.'", "", ""], 
    },
    { isFinal: true, // A1 outcome, game over
        c1: 5, c2: 5, c3: 5, c4: 5, score: 0, 
        question: "After mother offers daughter some emotional support, daughter feels like she can trust her mother.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2 outcome, game over
        c1: 6, c2: 6, c3: 6, c4: 6, score: 0, 
        question: "Mother and daughter get into an argument, and daughter walks away.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B1
        c1: 9, c2: 9, c3: 7, c4: 7, score: -5, 
        question: "Mother approaches daughter about what she read on her phone. What might Mother say?", 
        choices: ["'I just went through your phone, and... I want to talk to you about this boy you're seeing.", "'You're too young to be doing this!'", "", ""], 
    },
    { isFinal: true, // B2
        c1: 10, c2: 10, c3: 10, c4: 8, score: +5, 
        question: "Daughter catches her mother reading her texts, saying 'Mom, WHAT are you doing?! Stop going through my phone!'. How might mother respond?", 
        choices: ["'I'm your mother. You know I care about you.'", "'I can't believe the way you're showing yourself off to this boy.'", "'You're too young to be doing this!'", ""], 
    },
    { isFinal: true, // B1 outcome, game over
        c1: 9, c2: 9, c3: 9, c4: 9, score: 0, 
        question: "Mother and daughter have a big argument that doesn't get resolved.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // B2 outcome, game over
        c1: 10, c2: 10, c3: 10, c4: 10, score: 0, 
        question: "Mother and daughter have a big argument. Daughter doesn't talk to her mother for a few days.", 
        choices: ["Finish game", "", "", ""], 
    },
];

// Scenario 2
export const scenario_2 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 7, c3: 0, c4: 0, score: 0, 
        question: "Daughter has been hanging out with her male classmate, Joe. They have been studying and hanging out together more and more often. They both have feelings for each other. Daughter is thinking to tell her mother that she likes Joe, and she wants to get advice from her mother.", 
        choices: ["Daughter talks about Joe, and how they have been spending time together and her feelings.", "Daughter hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him.", "", ""], 
    },
    { isFinal: false, // A
        c1: 2, c2: 3, c3: 4, c4: 1, score: +5, 
        question: "Daughter talks to her mother about Joe. What might happen?", 
        choices: ["Mother initiates open communication and gives her information about healthy relationships.", "Mother initiates the conversation with veiled messages – “be careful.”", "Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend.", ""], 
    },
    { isFinal: true, // A1 outcome, game over
        c1: 2, c2: 2, c3: 2, c4: 2, score: +5, 
        question: "Daughter listens to her mother's advice. Daughter feels more comfortable and asks and talks more frequently.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2 outcome, game over
        c1: 3, c2: 3, c3: 3, c4: 3, score: 0, 
        question: "Daughter gets confused by her mother's unclear message. She's not satisfied with the conversation, and she thinks she should ask her friends.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A3
        c1: 5, c2: 6, c3: 4, c4: 4, score: 0, 
        question: "Daughter listens to her mother tell her having a boyfriend is not an option. What might happen?", 
        choices: ["Daughter agrees with her mother.", "Daughter gets upset.", "", ""], 
    },
    { isFinal: true, // A3 a outcome, game over
        c1: 5, c2: 5, c3: 5, c4: 5, score: 0, 
        question: "Daughter says okay and decides to continue to see Joe secretly.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 b outcome, game over
        c1: 6, c2: 6, c3: 6, c4: 6, score: -5, 
        question: "Daughter gets upset from her mother's angry reaction. Daughter goes to her room and decides not to talk about anything with her mother.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B
        c1: 8, c2: 9, c3: 7, c4: 7, score: -5, 
        question: "Daughter hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him.", 
        choices: ["Daughter keeps lying that she is spending time together with her girl friends.", "Mother finds out that daughter has been lying about Joe.", "", ""], 
    },
    { isFinal: true, // B1 outcome, game over
        c1: 8, c2: 8, c3: 8, c4: 8, score: -5, 
        question: "Daughter makes a habit of hiding her relationship with Joe to her mother, and the communication between her and her mother is getting shorter.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B2
        c1: 10, c2: 11, c3: 9, c4: 9, score: 0, 
        question: "Mother finds out that daughter has been lying about Joe.", 
        choices: ["Mother becomes angry and grounds daughter for punishment with no communication", "Mother tries to give daughter a chance to explain what happened", "", ""], 
    },
    { isFinal: false, // B2 outcome, leads to A3: A3a, A3b
        c1: 4, c2: 10, c3: 10, c4: 10, score: -5, 
        question: "After Mother grounds daughter, what might happen next?", 
        choices: ["Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend.", "", "", ""], 
    },
    { isFinal: false, // B2 outcome, leads to A: A1, A2
        c1: 1, c2: 11, c3: 11, c4: 11, score: +5, 
        question: "Daughter's mother tries to give her a chance to explain what happened. What might happen next?", 
        choices: ["Daughter talks about Joe, and how they have been spending time together and her feelings.", "", "", ""], 
    },
];

// Scenario 3
export const scenario_3 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 10, c3: 0, c4: 0, score: 0, 
        question: "As daughter continues to meet with Joe, they develop intimacy by holding hands, hugging, and kissing. Daughter starts to feel pressure by Joe and is uncomfortable. She wants to seek advice, but from who?", 
        choices: ["Mother", "Friends", "", ""], 
    },
    { isFinal: false, // A
        c1: 2, c2: 4, c3: 7, c4: 1, score: +5, 
        question: "Daughter approaches her mother and asks her for advice. How might her mother react?", 
        choices: ["Hear her out", "Unsure", "Surprised", ""], 
    },
    { isFinal: false, // A1
        c1: 3, c2: 2, c3: 2, c4: 2, score: +5, 
        question: "Daughter's mother openly listens to daughter's concerns and provides age appropriate information about healthy relationships in a nonjudgmental way.", 
        choices: ["Continue", "", "", ""], 
    },
    { isFinal: true, // A1 outcome, game over
        c1: 3, c2: 3, c3: 3, c4: 3, score: +5, 
        question: "This frequent open communication leads the mother and daughter to talk about preventive care of sexual health – e.g. HPV vaccination", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A2
        c1: 5, c2: 6, c3: 4, c4: 4, score: 0, 
        question: "Daughter's mother gets nervous and anxious. Mother wishes she could explain to daughter, but she doesn't feel confident enough to provide the appropriate information. What might happen next?", 
        choices: ["Try her best to help daughter anyway", "Steer away from the topic", "", ""], 
    },
    { isFinal: true, // A2 a outcome, game over
        c1: 5, c2: 5, c3: 5, c4: 5, score: +5, 
        question: "Mother seeks for resources that she can provide for daughter. Later, she finds time to sit with daughter to have the conversation.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2 b outcome, game over
        c1: 6, c2: 6, c3: 6, c4: 6, score: -5, 
        question: "Mother gets upset and reacts defensively.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A3
        c1: 8, c2: 9, c3: 7, c4: 7, score: -5, 
        question: "Mother is surprised by daughter's relationship with Joe and gets upset. Mother tells her that seeing a guy is not an option, and that school is more important than a boyfriend. What might daughter do?", 
        choices: ["Say okay", "Walk away from Mother", "", ""], 
    },
    { isFinal: true, // A3 a outcome, game over
        c1: 8, c2: 8, c3: 8, c4: 8, score: -5, 
        question: "Daughter says okay and decides to continue to see Joe secretly.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 b outcome, game over
        c1: 9, c2: 9, c3: 9, c4: 9, score: -5, 
        question: "Daughter gets upset from her mother's angry reaction. Daughter goes to her room and decides not to talk about anything with her mother.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B
        c1: 11, c2: 12, c3: 10, c4: 10, score: 0, 
        question: "Daughter seeks advice from her girl friends and the internet. What kind of advice might daughter come across?", 
        choices: ["Explore more", "Ask Mother", "", ""], 
    },
    { isFinal: true, // B1 outcome, game over
        c1: 11, c2: 11, c3: 11, c4: 11, score: 0, 
        question: "Daughter's friends tell her that it is okay and encourage her to explore more. The information about importance of her rights to be able to say no is not mentioned.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // B2 outcome, game over
        c1: 12, c2: 12, c3: 12, c4: 12, score: +5, 
        question: "Daughter's friends share their positive experiences about the communication with their mothers and encourage her to ask her mother.", 
        choices: ["Finish game", "", "", ""], 
    },
];

// Scenario 4
export const scenario_4 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 9, c3: 0, c4: 0, score: 0, 
        question: "Mother starts feeling that daughter is growing up and going into puberty. She notices body changes, and she becomes concerned daughter's attitude and knowledge about puberty and the changes she is going through.", 
        choices: ["Mother-daughter time", "Hesistant because of lack of knowledge", "", ""], 
    },
    { isFinal: false, // A
        c1: 2, c2: 6, c3: 1, c4: 1, score: +5, 
        question: "Mother plans to have a mother-daughter time to educate her daughter. What might she do?", 
        choices: ["Find appropriate resources", "Communicate own experience", "", ""], 
    },
    { isFinal: false, // A1
        c1: 3, c2: 4, c3: 2, c4: 2, score: 0, 
        question: "Mother knows where to find the appropriate resources and obtain the knowledge about secondary sex characteristics with psychological changes and appropriate anatomical terminologies such as anatomy of reproductive organs or menarche.", 
        choices: ["Educate in depth", "Encourage questions", "", ""], 
    },
    { isFinal: false, // A1 a
        c1: 5, c2: 3, c3: 3, c4: 3, score: +5, 
        question: "Mother educates her daughter with appropriate and in-depth knowledgeable information. What happens with her daughter?", 
        choices: ["Daughter has sufficient knowledge", "", "", ""], 
    },
    { isFinal: false, // A1 b
        c1: 5, c2: 4, c3: 4, c4: 4, score: +10, 
        question: "Mother feels confident enough to encourage her daughter to ask questions and answer back with correct information. This leads to have more open communication. What happens with her daughter?", 
        choices: ["Daughter has sufficient knowledge", "", "", ""], 
    },
    { isFinal: true, // A1 i outcome, game over
        c1: 5, c2: 5, c3: 5, c4: 5, score: +5, 
        question: "Daughter has sufficient knowledge of menstruation prior to starting her menarche. Daughter expects to have it positively.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A2
        c1: 7, c2: 8, c3: 6, c4: 6, score: -5, 
        question: "Mother initiates the communication with menarche and other menstruation symptoms and hygiene management from her own experience. What might happen?", 
        choices: ["Incorrect information", "Not in-depth", "", ""], 
    },
    { isFinal: true, // A2 a, game over
        c1: 7, c2: 7, c3: 7, c4: 7, score: -5, 
        question: "Mother provides incorrect information about menstruation.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2 b, game over
        c1: 8, c2: 8, c3: 8, c4: 8, score: +5, 
        question: "Mother correctly provides the menstruation information but doesn’t provide in-depth educational information.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B
        c1: 10, c2: 13, c3: 9, c4: 9, score: 0, 
        question: "Mother feels she needs to educate her daughter about puberty, but she is hesitant because of her lack of proper knowledge and resources. What might happen next?", 
        choices: ["She's embarassed", "She seeks help", "", ""], 
    },
    { isFinal: false, // B1
        c1: 11, c2: 10, c3: 10, c4: 10, score: -5, 
        question: "Mother feels embarrassed and postpends the communication opportunity. What happens to her daughter?", 
        choices: ["Doesn't know about period", "", "", ""], 
    },
    { isFinal: false, // B1 a
        c1: 12, c2: 11, c3: 11, c4: 11, score: -5, 
        question: "Daughter doesn’t know about menstruation prior to starting her menarche.", 
        choices: ["Continue", "", "", ""], 
    },
    { isFinal: true, // B1 i outcome, game over
        c1: 12, c2: 12, c3: 12, c4: 12, score: -5, 
        question: "Daughter feels shocked and embarrassed by having a period because of insufficient education.", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // B2 outcome, game over
        c1: 13, c2: 13, c3: 13, c4: 13, score: +5, 
        question: "Mother seeks help to find the resources and learns the appropriate information, then educate her daughter.", 
        choices: ["Finish game", "", "", ""], 
    },
];

// Scenario 5
export const scenario_5 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A1
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A3
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 a outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 b outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A2 outcome, game over
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B1
        c1: 11, c2: 11, c3: 9, c4: 9, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B2
        c1: 12, c2: 12, c3: 10, c4: 10, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B1 outcome, game over
        c1: 11, c2: 11, c3: 11, c4: 11, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B2 outcome, game over
        c1: 12, c2: 12, c3: 12, c4: 12, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
];


// template for scenario object
/*
    { isFinal: true, 
        c1: 10, c2: 10, c3: 10, c4: 10, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
/////////
export const scenario_3 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A1
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A2
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A3
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 a outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: true, // A3 b outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // A2 outcome, game over
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
    },
    { isFinal: false, // B1
        c1: 11, c2: 11, c3: 9, c4: 9, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B2
        c1: 12, c2: 12, c3: 10, c4: 10, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B1 outcome, game over
        c1: 11, c2: 11, c3: 11, c4: 11, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
    { isFinal: false, // B2 outcome, game over
        c1: 12, c2: 12, c3: 12, c4: 12, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
    },
];
*/
