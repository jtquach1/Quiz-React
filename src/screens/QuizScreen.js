import React from 'react';
import { StyleSheet } from 'react-native';
import QuizChoice from "../components/QuizChoice";

const QuizScreen = () => {
    /* Questions and Answers */
    // Scenario 1
    const scenario_1 = [
        { isFinal: false, // Scenario
            c1: 1, c2: 2, c3: 0, c4: 0, 
            question: "Janet notices that her daughter Jackie is texting a lot. She wonders if Jackie has a boyfriend. What should Janet do?", 
            choices: ["Talk to Jackie.", "Secretly get Jackie's phone and look at her texts.", "", ""], 
            answer: "Talk to Jackie." },
        { isFinal: false, // A
            c1: 3, c2: 4, c3: 1, c4: 1, 
            question: "Janet decides to talk to Jackie about her texting habits. How should she approach Jackie?", 
            choices: ["Approach Jackie with openness and ability to listen.", "Approach Jackie nervous and defensive.", "", ""], 
            answer: "Approach Jackie with openness and ability to listen." },
        { isFinal: false, // B
            c1: 7, c2: 8, c3: 2, c4: 2, 
            question: "Janet secretly gets Jackie's phone and looks at her texts. What might happen next?", 
            choices: ["She finds out that Jackie is talking to a boy, and will go to Jackie with what she read.", "Jackie catches her mom reading her text messages.", "", ""], 
            answer: "She finds out that Jackie is talking to a boy, and will go to Jackie with what she read." },
        { isFinal: false, // A1
            c1: 5, c2: 5, c3: 3, c4: 3, 
            question: "Janet approaches Jackie, saying 'I know you're growing up to be a young woman. If you ever need any advice, well, I'm here!'. How might Jackie respond?", 
            choices: ["Jackie says, 'Alright. Thanks, mom.'", "Jackie says, 'Don't worry about it, mom.'", "", ""], 
            answer: "Jackie says, 'Alright. Thanks, mom.'" },
        { isFinal: false, // A2
            c1: 6, c2: 6, c3: 4, c4: 4, 
            question: "Janet approaches Jackie, saying 'I saw you spending too much time on your phone! You shouldn't be talking to boys!'. How might Jackie respond?", 
            choices: ["Jackie says, 'Ugh, well what would YOU know?!'", "Jackie says, 'You have no idea what you're talking about.'", "", ""], 
            answer: "Jackie says, 'Ugh, well what would YOU know?!'" },
        { isFinal: true, // A1 outcome, game over
            c1: 5, c2: 5, c3: 5, c4: 5, 
            question: "After Janet offers Jackie some emotional support, Jackie feels like she can trust her mom.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // A2 outcome, game over
            c1: 6, c2: 6, c3: 6, c4: 6, 
            question: "Janet and Jackie get into an argument, and Jackie walks away.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: false, // B1
            c1: 9, c2: 9, c3: 7, c4: 7, 
            question: "Janet approaches Jackie about what she read on her phone. What might Janet say?", 
            choices: ["'Jackie, I just went through your phone, and... I want to talk to you about this boy you're seeing.", "'Jackie, you're too young to be doing this!'", "", ""], 
            answer: "'Jackie, I just went through your phone, and... I want to talk to you about this boy you're seeing." },
        { isFinal: true, // B2
            c1: 10, c2: 10, c3: 10, c4: 8, 
            question: "Jackie catches her mom reading her texts, saying 'Mom, WHAT are you doing?! Stop going through my phone!'. How might Janet respond?", 
            choices: ["'Jackie, I'm your mother. You know I care about you.'", "'I can't believe the way you're showing yourself off to this boy.'", "'Jackie, you're too young to be doing this!'", ""], 
            answer: "'Jackie, I'm your mother. You know I care about you.'" },
        { isFinal: true, // B1 outcome, game over
            c1: 9, c2: 9, c3: 9, c4: 9, 
            question: "Janet and Jackie have a big argument that doesn't get resolved.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // B2 outcome, game over
            c1: 10, c2: 10, c3: 10, c4: 10, 
            question: "Janet and Jackie have a big argument. Jackie doesn't talk to her mom for a few days.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
    ];

    // Scenario custom
    const scenario_custom = [
        { isFinal: false, // Scenario
            c1: 1, c2: 2, c3: 0, c4: 0, 
            question: "Jackie is texting a boy from school. She's getting to know him, and is thinking of getting closer to him. She's worried that her mom might not approve of him. What should Jackie do?", 
            choices: ["Jackie should lie to her mom, since she wouldn't approve of her hanging out with anyone anyways.", "Jackie should tell her mom the truth, that she wants to hang out with a boy.", "", ""], 
            answer: "Janet should tell her mom the truth, that she wants to hang out with a boy." },
        { isFinal: false, // A
            c1: 3, c2: 4, c3: 1, c4: 1, 
            question: "Jackie decides to lie to her mom about how she is hanging out with a girl friend from school. She goes out with the boy and their friends around town. What might happen next?", 
            choices: ["Jackie thinks about gossiping to fit in with her friends.", "Jackie stays out too late.", "", ""], 
            answer: "Jackie stays out too late." },
        { isFinal: false, // B
            c1: 9, c2: 10, c3: 2, c4: 2, 
            question: "Jackie decides to tell her mom about the boy she's interested in. How might her mom Janet take this?", 
            choices: ["Janet freaks out at Jackie.", "Janet reassures Jackie, and gives her advice.", "", ""], 
            answer: "Janet reassures Jackie, and gives her advice." },
        { isFinal: false, // A1
            c1: 5, c2: 6, c3: 3, c4: 3, 
            question: "The boy and her friends joke about kids at school, making fun of people's appearances and bringing up rumors. Jackie doesn't feel comfortable about this, but she doesn't want to lose out on her crush and her only 'friends'. What should she do?", 
            choices: ["Jackie joins in with the gossip.", "Jackie doesn't say anything.", "", ""], 
            answer: "Jackie doesn't say anything." },
        { isFinal: false, // A2
            c1: 7, c2: 8, c3: 4, c4: 4, 
            question: "Jackie hangs out with the boy and her friends, but she missed her mom's calls. What might happen next?", 
            choices: ["Jackie sneaks into her house.", "Jackie calls her mom to pick her up.", "", ""], 
            answer: "Jackie calls her mom to pick her up." },
        { isFinal: true, // A1 outcome, game over
            c1: 5, c2: 5, c3: 5, c4: 5, 
            question: "Jackie goes along with the joking, and she starts worrying about if she should start wearing clothes that make her crush notice her more.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // A1 outcome, game over
            c1: 6, c2: 6, c3: 6, c4: 6, 
            question: "Jackie doesn't say anything, and she starts feeling left out from her friend group.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // A2 outcome, game over
            c1: 7, c2: 7, c3: 7, c4: 7, 
            question: "Jackie walks home and tries to enter the house quietly, hoping her mom doesn't catch her. Janet confronts her, and they have an argument.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // A2 outcome, game over
            c1: 8, c2: 8, c3: 8, c4: 8, 
            question: "Jackie calls her mom, telling her that she was out with friends, and forgot to call back. Her mom has a stern talk with her, and decides to pick her up.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: false, // B1
            c1: 11, c2: 11, c3: 9, c4: 9, 
            question: "Janet confronts Jackie about how she is wasting her time, and tells her that she should focus on school.", 
            choices: ["Jackie says, 'Ugh, you don't get it, mom.'", "Jackie is defensive and tries to ignore her mom.", "", ""], 
            answer: "Jackie says, 'Ugh, you don't get it, mom.'"},
        { isFinal: false, // B2
            c1: 12, c2: 12, c3: 10, c4: 10, 
            question: "Janet confronts Jackie, firmly stating the importance of school. But Janet also reassures her that if she is looking for a good partner, that he should be someone that's not just pretty, but shares the same goals as her.", 
            choices: ["Jackie says, 'That's.. really old-timey, mom.'", "Jackie says, 'Thanks, mom.'", "", ""], 
            answer: "Jackie says, 'Thanks, mom.'" },
        { isFinal: true, // B1 outcome, game over
            c1: 11, c2: 11, c3: 11, c4: 11, 
            question: "Jackie and Janet get into an argument, and Jackie avoids talking to her mom about anything personal for days.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" },
        { isFinal: true, // B2 outcome, game over
            c1: 12, c2: 12, c3: 12, c4: 12, 
            question: "Jackie is overwhelmed, but grateful that her mom didn't yell at her for having a crush.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" }
    ];
    // Scenario 2
    const scenario_2 = [
        { isFinal: false, // Scenario
            c1: 1, c2: 2, c3: 0, c4: 0, 
            question: "Daughter has been hanging out with her male classmate, Joe. They have been studying and hanging out together more and more often. They both have feelings for each other. Daughter is thinking to tell her mother that she likes Joe, and she wants to have an advice from her mother.", 
            choices: ["One choice is daughter talks about Joe, and how they have been spending time together and her feelings.", "Second choice is daughter hesitates to talk with her mother about Joe, and she doesn’t tell her mother about Joe and keeps seeing him.", "", ""], 
            answer: "One choice is daughter talks about Joe, and how they have been spending time together and her feelings." }, 
        { isFinal: false, // A
            c1: 3, c2: 4, c3: 1, c4: 1, 
            question: "Daughter talks to mother about Joe. What might happen?", 
            choices: ["Mother initiates open communication and gives her information about healthy relationships.", "Mother initiates the conversation with veiled messages – “be careful.”", "Mother becomes angry and tells her that seeing a guy is not an option. Mother says about the importance of school than boyfriend.", ""], 
            answer: "Finish game" }, 
        { isFinal: false, // A1 outcome, game over
            c1: 9, c2: 10, c3: 2, c4: 2, 
            question: "Daughter listens her mother’s advice, and daughter feels more comfortable and asks and talks more frequently.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: false, // A2 outcome, game over
            c1: 5, c2: 6, c3: 3, c4: 3, 
            question: "Daughter gets confused by her mother’s unclear message. She’s not satisfied with the conversation, and she thinks she should ask her friends.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: false, // A2
            c1: 7, c2: 8, c3: 4, c4: 4, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // A1 outcome, game over
            c1: 5, c2: 5, c3: 5, c4: 5, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // A1 outcome, game over
            c1: 6, c2: 6, c3: 6, c4: 6, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // A2 outcome, game over
            c1: 7, c2: 7, c3: 7, c4: 7, 
            question: "Jackie walks home and tries to enter the house quietly, hoping her mom doesn't catch her. Janet confronts her, and they have an argument.", 
            choices: ["Finish game", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // A2 outcome, game over
            c1: 8, c2: 8, c3: 8, c4: 8, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: false, // B1
            c1: 11, c2: 11, c3: 9, c4: 9, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: false, // B2
            c1: 12, c2: 12, c3: 10, c4: 10, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // B1 outcome, game over
            c1: 11, c2: 11, c3: 11, c4: 11, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" }, 
        { isFinal: true, // B2 outcome, game over
            c1: 12, c2: 12, c3: 12, c4: 12, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" } 
    ];

    // template for scenario object
    /*
            { isFinal: true, 
            c1: 10, c2: 10, c3: 10, c4: 10, 
            question: "", 
            choices: ["", "", "", ""], 
            answer: "Finish game" },
    */

    // console.log("--------- Printing out all scenarios for debugging");
    // console.log(scenarios);
    // console.log("--------- Done printing all scenarios");

    return (
        // RENDER ONE QUESTION AT A TIME
        <QuizChoice
            scenarios={scenario_custom}
        />
    );
};

const styles = StyleSheet.create({});

export default QuizScreen;