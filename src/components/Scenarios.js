/* Questions and Answers */
// Scenario 1
export const scenario_1 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "Janet notices that her Jackie Jackie is texting a lot. She wonders if Jackie has a boyfriend. What should Janet do?", 
        choices: ["Talk to Jackie.", "Secretly get Jackie's phone and look at her texts.", "", ""], 
        answer: "Talk to Jackie." },
    { isFinal: false, // A
        c1: 3, c2: 4, c3: 1, c4: 1, score: +5, 
        question: "Janet decides to talk to Jackie about her texting habits. How should she approach Jackie?", 
        choices: ["Approach Jackie with openness and ability to listen.", "Approach Jackie nervous and defensive.", "", ""], 
        answer: "Approach Jackie with openness and ability to listen." },
    { isFinal: false, // B
        c1: 7, c2: 8, c3: 2, c4: 2, score: -5, 
        question: "Janet secretly gets Jackie's phone and looks at her texts. What might happen next?", 
        choices: ["She finds out that Jackie is talking to a boy, and will go to Jackie with what she read.", "Jackie catches her mom reading her text messages.", "", ""], 
        answer: "She finds out that Jackie is talking to a boy, and will go to Jackie with what she read." },
    { isFinal: false, // A1
        c1: 5, c2: 5, c3: 3, c4: 3, score: +5, 
        question: "Janet approaches Jackie, saying 'I know you're growing up to be a young woman. If you ever need any advice, well, I'm here!'. How might Jackie respond?", 
        choices: ["Jackie says, 'Alright. Thanks, mom.'", "Jackie says, 'Don't worry about it, mom.'", "", ""], 
        answer: "Jackie says, 'Alright. Thanks, mom.'" },
    { isFinal: false, // A2
        c1: 6, c2: 6, c3: 4, c4: 4, score: -5, 
        question: "Janet approaches Jackie, saying 'I saw you spending too much time on your phone! You shouldn't be talking to boys!'. How might Jackie respond?", 
        choices: ["Jackie says, 'Ugh, well what would YOU know?!'", "Jackie says, 'You have no idea what you're talking about.'", "", ""], 
        answer: "Jackie says, 'Ugh, well what would YOU know?!'" },
    { isFinal: true, // A1 outcome, game over
        c1: 5, c2: 5, c3: 5, c4: 5, score: 0, 
        question: "After Janet offers Jackie some emotional support, Jackie feels like she can trust her mom.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" },
    { isFinal: true, // A2 outcome, game over
        c1: 6, c2: 6, c3: 6, c4: 6, score: 0, 
        question: "Janet and Jackie get into an argument, and Jackie walks away.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" },
    { isFinal: false, // B1
        c1: 9, c2: 9, c3: 7, c4: 7, score: -5, 
        question: "Janet approaches Jackie about what she read on her phone. What might Janet say?", 
        choices: ["'Jackie, I just went through your phone, and... I want to talk to you about this boy you're seeing.", "'Jackie, you're too young to be doing this!'", "", ""], 
        answer: "'Jackie, I just went through your phone, and... I want to talk to you about this boy you're seeing." },
    { isFinal: true, // B2
        c1: 10, c2: 10, c3: 10, c4: 8, score: +5, 
        question: "Jackie catches her mom reading her texts, saying 'Mom, WHAT are you doing?! Stop going through my phone!'. How might Janet respond?", 
        choices: ["'Jackie, I'm your mother. You know I care about you.'", "'I can't believe the way you're showing yourself off to this boy.'", "'Jackie, you're too young to be doing this!'", ""], 
        answer: "'Jackie, I'm your mother. You know I care about you.'" },
    { isFinal: true, // B1 outcome, game over
        c1: 9, c2: 9, c3: 9, c4: 9, score: 0, 
        question: "Janet and Jackie have a big argument that doesn't get resolved.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" },
    { isFinal: true, // B2 outcome, game over
        c1: 10, c2: 10, c3: 10, c4: 10, score: 0, 
        question: "Janet and Jackie have a big argument. Jackie doesn't talk to her mom for a few days.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" },
];

// Scenario 2
export const scenario_2 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 7, c3: 0, c4: 0, score: 0, 
        question: "Jackie has been hanging out with her male classmate, Joe. They have been studying and hanging out together more and more often. They both have feelings for each other. Jackie is thinking to tell her mother that she likes Joe, and she wants to get advice from her mother.", 
        choices: ["Jackie talks about Joe, and how they have been spending time together and her feelings.", "Jackie hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him.", "", ""], 
        answer: "Jackie talks about Joe, and how they have been spending time together and her feelings." }, 
    { isFinal: false, // A
        c1: 2, c2: 3, c3: 4, c4: 1, score: +5, 
        question: "Jackie talks to her mother about Joe. What might happen?", 
        choices: ["Mother initiates open communication and gives her information about healthy relationships.", "Mother initiates the conversation with veiled messages – “be careful.”", "Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend.", ""], 
        answer: "Mother initiates open communication and gives her information about healthy relationships." }, 
    { isFinal: true, // A1 outcome
        c1: 2, c2: 2, c3: 2, c4: 2, score: 0, 
        question: "Jackie listens to her mother's advice. Jackie feels more comfortable and asks and talks more frequently.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A2 outcome
        c1: 3, c2: 3, c3: 3, c4: 3, score: 0, 
        question: "Jackie gets confused by her mother's unclear message. She's not satisfied with the conversation, and she thinks she should ask her friends.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // A3
        c1: 5, c2: 6, c3: 4, c4: 4, score: -5, 
        question: "Jackie listens to her mother tell her having a boyfriend is not an option. What might happen?", 
        choices: ["Jackie agrees with her mother.", "Jackie gets upset.", "", ""], 
        answer: "Jackie gets upset." }, 
    { isFinal: true, // A3 a outcome
        c1: 5, c2: 5, c3: 5, c4: 5, score: 0, 
        question: "Jackie says okay and decides to continue to see Joe secretly.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A3 b outcome
        c1: 6, c2: 6, c3: 6, c4: 6, score: 0, 
        question: "Jackie gets upset by the way of mother's reaction being angry. Jackie goes to her room and decides not to talk about anything with her mother.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B
        c1: 8, c2: 9, c3: 7, c4: 7, score: -5, 
        question: "Jackie hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him.", 
        choices: ["Jackie keeps lying that she is spending time together with her girls’ friends.", "Mother finds out that her daughter has been lying about Joe.", "", ""], 
        answer: "Mother finds out that her daughter has been lying about Joe." }, 
    { isFinal: true, // B1 outcome
        c1: 8, c2: 8, c3: 8, c4: 8, score: 0, 
        question: "Jackie makes a habit of hiding her relationship with Joe to her mother, and the communication between her and her mother is getting shorter.", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B2
        c1: 10, c2: 11, c3: 9, c4: 9, score: 0, 
        question: "Mother finds out that Jackie has been lying about Joe.", 
        choices: ["Mother becomes angry and grounds Jackie for punishment with no communication", "Mother tries to give Jackie a chance to explain what happened", "", ""], 
        answer: "Mother tries to give Jackie a chance to explain what happened" }, 
    { isFinal: false, // B2 outcome, leads to A3: A3a, A3b
        c1: 4, c2: 10, c3: 10, c4: 10, score: 0, 
        question: "After Jackie's mother grounds her, what might happen next?", 
        choices: ["Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend.", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B2 outcome, leads to A: A1, A2
        c1: 1, c2: 11, c3: 11, c4: 11, score: 0, 
        question: "Jackie's mother tries to give her a chance to explain what happened. What might happen next?", 
        choices: ["Jackie talks about Joe, and how they have been spending time together and her feelings.", "", "", ""], 
        answer: "Jackie talks about Joe, and how they have been spending time together and her feelings." } 
];

// Scenario 3
export const scenario_3 = [
    { isFinal: false, // Scenario
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // A
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A1
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A2
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // A3
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A3 a outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: true, // A3 b outcome
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // A2 outcome, game over
        c1: 1, c2: 2, c3: 0, c4: 0, score: 0, 
        question: "", 
        choices: ["Finish game", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B1
        c1: 11, c2: 11, c3: 9, c4: 9, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B2
        c1: 12, c2: 12, c3: 10, c4: 10, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B1 outcome, game over
        c1: 11, c2: 11, c3: 11, c4: 11, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
        answer: "Finish game" }, 
    { isFinal: false, // B2 outcome, game over
        c1: 12, c2: 12, c3: 12, c4: 12, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
        answer: "Finish game" } 
];


// template for scenario object
/*
        { isFinal: true, 
        c1: 10, c2: 10, c3: 10, c4: 10, score: 0, 
        question: "", 
        choices: ["", "", "", ""], 
        answer: "Finish game" },
*/
