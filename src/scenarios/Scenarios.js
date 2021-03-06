/* Questions and Answers */
// Scenario 1
export const scenario_1 = [
  {
    isFinal: false, // Scenario
    c1: 1, c2: 2, score: 0,
    question: "Mother notices that daughter is texting alot.  She wonders if daughter has a boyfriend. What should she do?",
    choices: ["Talk to her", "Secretly take her phone"],
  },
  {
    isFinal: false, // A
    c1: 3, c2: 4, score: +5,
    question: "Mother decides to talk to daughter about her texting habits. How should she approach daughter?",
    choices: ["Approach daughter with openness and ability to listen.", "Approach daughter nervous and defensive."],
  },
  {
    isFinal: false, // B
    c1: 7, c2: 8, score: -5,
    question: "Mother secretly gets daughter's phone and looks at her texts. What might happen next?",
    choices: ["She finds out that daughter is talking to a boy, and will go to daughter with what she read.", "Daughter catches mother reading her text messages."],
  },
  {
    isFinal: false, // A1
    c1: 5, c2: 5, score: +5,
    question: "Mother approaches daughter, saying 'I know you're growing up to be a young woman. If you ever need any advice, well, I'm here!'. How might daughter respond?",
    choices: ["Daughter says, 'Alright. Thanks, mom.'", "Daughter says, 'Don't worry about it, mom.'"],
  },
  {
    isFinal: false, // A2
    c1: 6, c2: 6, score: -5,
    question: "Mother approaches daughter, saying 'I saw you spending too much time on your phone! You shouldn't be talking to boys!'. How might daughter respond?",
    choices: ["Daughter says, 'Ugh, well what would YOU know?!'", "Daughter says, 'You have no idea what you're talking about.'"],
  },
  {
    isFinal: true, // A1 outcome, game over
    c1: 5, score: 0,
    question: "After mother offers daughter some emotional support, daughter feels like she can trust her mother.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A2 outcome, game over
    c1: 6, score: 0,
    question: "Mother and daughter get into an argument, and daughter walks away.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B1
    c1: 9, c2: 9, score: -5,
    question: "Mother approaches daughter about what she read on her phone. What might Mother say?",
    choices: ["'I just went through your phone, and... I want to talk to you about this boy you're seeing.", "'You're too young to be doing this!'"],
  },
  {
    isFinal: true, // B2
    c1: 10, c2: 10, c3: 10, score: +5,
    question: "Daughter catches her mother reading her texts, saying 'Mom, WHAT are you doing?! Stop going through my phone!'. How might mother respond?",
    choices: ["'I'm your mother. You know I care about you.'", "'I can't believe the way you're showing yourself off to this boy.'", "'You're too young to be doing this!'"],
  },
  {
    isFinal: true, // B1 outcome, game over
    c1: 9, score: 0,
    question: "Mother and daughter have a big argument that doesn't get resolved.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // B2 outcome, game over
    c1: 10, score: 0,
    question: "Mother and daughter have a big argument. Daughter doesn't talk to her mother for a few days.",
    choices: ["Finish game"],
  },
];

// Scenario 2
export const scenario_2 = [
  {
    isFinal: false, // Scenario
    c1: 1, c2: 7, score: 0,
    question: "Daughter has been hanging out with her male classmate, Joe. They have been studying and hanging out together more and more often. They both have feelings for each other. Daughter is thinking to tell her mother that she likes Joe, and she wants to get advice from her mother.",
    choices: ["Daughter talks about Joe, and how they have been spending time together and her feelings.", "Daughter hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him."],
  },
  {
    isFinal: false, // A
    c1: 2, c2: 3, score: +5,
    question: "Daughter talks to her mother about Joe. What might happen?",
    choices: ["Mother initiates open communication and gives her information about healthy relationships.", "Mother initiates the conversation with veiled messages – “be careful.”", "Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend."],
  },
  {
    isFinal: true, // A1 outcome, game over
    c1: 2, score: +5,
    question: "Daughter listens to her mother's advice. Daughter feels more comfortable and asks and talks more frequently.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A2 outcome, game over
    c1: 3, score: 0,
    question: "Daughter gets confused by her mother's unclear message. She's not satisfied with the conversation, and she thinks she should ask her friends.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // A3
    c1: 5, c2: 6, score: 0,
    question: "Daughter listens to her mother tell her having a boyfriend is not an option. What might happen?",
    choices: ["Daughter agrees with her mother.", "Daughter gets upset."],
  },
  {
    isFinal: true, // A3 a outcome, game over
    c1: 5, score: 0,
    question: "Daughter says okay and decides to continue to see Joe secretly.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A3 b outcome, game over
    c1: 6, score: -5,
    question: "Daughter gets upset from her mother's angry reaction. Daughter goes to her room and decides not to talk about anything with her mother.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B
    c1: 8, c2: 9, score: -5,
    question: "Daughter hesitates to talk with her mother about Joe, and she doesn't tell her mother about Joe and keeps seeing him.",
    choices: ["Daughter keeps lying that she is spending time together with her girl friends.", "Mother finds out that daughter has been lying about Joe."],
  },
  {
    isFinal: true, // B1 outcome, game over
    c1: 8, score: -5,
    question: "Daughter makes a habit of hiding her relationship with Joe to her mother, and the communication between her and her mother is getting shorter.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B2
    c1: 10, c2: 11, score: 0,
    question: "Mother finds out that daughter has been lying about Joe.",
    choices: ["Mother becomes angry and grounds daughter for punishment with no communication", "Mother tries to give daughter a chance to explain what happened"],
  },
  {
    isFinal: false, // B2 outcome, leads to A3: A3a, A3b
    c1: 4, score: -5,
    question: "After Mother grounds daughter, what might happen next?",
    choices: ["Mother becomes angry and tells her that seeing a guy is not an option. Mother says school is more important than having a boyfriend."],
  },
  {
    isFinal: false, // B2 outcome, leads to A: A1, A2
    c1: 1, score: +5,
    question: "Daughter's mother tries to give her a chance to explain what happened. What might happen next?",
    choices: ["Daughter talks about Joe, and how they have been spending time together and her feelings."],
  },
];

// Scenario 3
export const scenario_3 = [
  {
    isFinal: false, // Scenario
    c1: 1, c2: 10, score: 0,
    question: "As daughter continues to meet with Joe, they develop intimacy by holding hands, hugging, and kissing. Daughter starts to feel pressure by Joe and is uncomfortable. She wants to seek advice, but from who?",
    choices: ["Mother", "Friends"],
  },
  {
    isFinal: false, // A
    c1: 2, c2: 4, c3: 7, score: +5,
    question: "Daughter approaches her mother and asks her for advice. How might her mother react?",
    choices: ["Hear her out", "Unsure", "Surprised"],
  },
  {
    isFinal: false, // A1
    c1: 3, score: +5,
    question: "Daughter's mother openly listens to daughter's concerns and provides age appropriate information about healthy relationships in a nonjudgmental way.",
    choices: ["Continue"],
  },
  {
    isFinal: true, // A1 outcome, game over
    c1: 3, score: +5,
    question: "This frequent open communication leads the mother and daughter to talk about preventive care of sexual health – e.g. HPV vaccination",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // A2
    c1: 5, c2: 6, score: 0,
    question: "Daughter's mother gets nervous and anxious. Mother wishes she could explain to daughter, but she doesn't feel confident enough to provide the appropriate information. What might happen next?",
    choices: ["Try her best to help daughter anyway", "Steer away from the topic"],
  },
  {
    isFinal: true, // A2 a outcome, game over
    c1: 5, score: +5,
    question: "Mother seeks for resources that she can provide for daughter. Later, she finds time to sit with daughter to have the conversation.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A2 b outcome, game over
    c1: 6, score: -5,
    question: "Mother gets upset and reacts defensively.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // A3
    c1: 8, c2: 9, score: -5,
    question: "Mother is surprised by daughter's relationship with Joe and gets upset. Mother tells her that seeing a guy is not an option, and that school is more important than a boyfriend. What might daughter do?",
    choices: ["Say okay", "Walk away from Mother"],
  },
  {
    isFinal: true, // A3 a outcome, game over
    c1: 8, score: -5,
    question: "Daughter says okay and decides to continue to see Joe secretly.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A3 b outcome, game over
    c1: 9, score: -5,
    question: "Daughter gets upset from her mother's angry reaction. Daughter goes to her room and decides not to talk about anything with her mother.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B
    c1: 11, c2: 12, score: 0,
    question: "Daughter seeks advice from her girl friends and the internet. What kind of advice might daughter come across?",
    choices: ["Explore more", "Ask Mother"],
  },
  {
    isFinal: true, // B1 outcome, game over
    c1: 11, score: 0,
    question: "Daughter's friends tell her that it is okay and encourage her to explore more. The information about importance of her rights to be able to say no is not mentioned.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // B2 outcome, game over
    c1: 12, score: +5,
    question: "Daughter's friends share their positive experiences about the communication with their mothers and encourage her to ask her mother.",
    choices: ["Finish game"],
  },
];

// Scenario 4
export const scenario_4 = [
  {
    isFinal: false, // Scenario
    c1: 1, c2: 9, score: 0,
    question: "Mother starts feeling that daughter is growing up and going into puberty. She notices body changes, and she becomes concerned daughter's attitude and knowledge about puberty and the changes she is going through.",
    choices: ["Mother-daughter time", "Hesistant because of lack of knowledge"],
  },
  {
    isFinal: false, // A
    c1: 2, c2: 6, score: +5,
    question: "Mother plans to have a mother-daughter time to educate her daughter. What might she do?",
    choices: ["Find appropriate resources", "Communicate own experience"],
  },
  {
    isFinal: false, // A1
    c1: 3, c2: 4, score: 0,
    question: "Mother knows where to find the appropriate resources and obtain the knowledge about secondary sex characteristics with psychological changes and appropriate anatomical terminologies such as anatomy of reproductive organs or menarche.",
    choices: ["Educate in depth", "Encourage questions"],
  },
  {
    isFinal: false, // A1 a
    c1: 5, score: +5,
    question: "Mother educates her daughter with appropriate and in-depth knowledgeable information. What happens with her daughter?",
    choices: ["Daughter has sufficient knowledge"],
  },
  {
    isFinal: false, // A1 b
    c1: 5, score: +10,
    question: "Mother feels confident enough to encourage her daughter to ask questions and answer back with correct information. This leads to have more open communication. What happens with her daughter?",
    choices: ["Daughter has sufficient knowledge"],
  },
  {
    isFinal: true, // A1 i outcome, game over
    c1: 5, score: +5,
    question: "Daughter has sufficient knowledge of menstruation prior to starting her menarche. Daughter expects to have it positively.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // A2
    c1: 7, c2: 8, score: -5,
    question: "Mother initiates the communication with menarche and other menstruation symptoms and hygiene management from her own experience. What might happen?",
    choices: ["Incorrect information", "Not in-depth"],
  },
  {
    isFinal: true, // A2 a, game over
    c1: 7, score: -5,
    question: "Mother provides incorrect information about menstruation.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // A2 b, game over
    c1: 8, score: +5,
    question: "Mother correctly provides the menstruation information but doesn't provide in-depth educational information.",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B
    c1: 10, c2: 13, score: 0,
    question: "Mother feels she needs to educate her daughter about puberty, but she is hesitant because of her lack of proper knowledge and resources. What might happen next?",
    choices: ["She's embarassed", "She seeks help"],
  },
  {
    isFinal: false, // B1
    c1: 11, score: -5,
    question: "Mother feels embarrassed and postpends the communication opportunity. What happens to her daughter?",
    choices: ["Doesn't know about period"],
  },
  {
    isFinal: false, // B1 a
    c1: 12, score: -5,
    question: "Daughter doesn't know about menstruation prior to starting her menarche.",
    choices: ["Continue"],
  },
  {
    isFinal: true, // B1 i outcome, game over
    c1: 12, score: -5,
    question: "Daughter feels shocked and embarrassed by having a period because of insufficient education.",
    choices: ["Finish game"],
  },
  {
    isFinal: true, // B2 outcome, game over
    c1: 13, score: +5,
    question: "Mother seeks help to find the resources and learns the appropriate information, then educate her daughter.",
    choices: ["Finish game"],
  },
];

// Scenario 5
export const scenario_5 = [
  {
    isFinal: false, // Scenario
    c1: 1, score: 0,
    question: "One day, the daughter talks to her mother about the conversation with her female friend at school. Her friend told her that recently she and her boyfriend had sex (without using a condom) first time. Her friend was worried about being pregnant. But she's sure that she does not have Gonorrhea because she does not have any symptoms and she learned that people can know by look at their body whether they have Gonorrhea or not.",
    choices: ["Mother listens to her story about her friend."],
  },
  {
    isFinal: false, // Scenario, continued.
    c1: 2, c2: 4, score: 0,
    question: "After listening to her daughter, the mother asks her daughter what Gonorrhea is. How might the daughter respond?",
    choices: ["I don't know", "I know"],
  },
  {
    isFinal: false, // A
    c1: 3, score: 0,
    question: "Daughter tells her mother she doesn't know what it is.",
    choices: ["Mother knows how to inform her daughter"],
  },
  {
    isFinal: false, // A1
    c1: 6, score: 0,
    question: "Mother sits with her daughter and initiate the conversation about STIs, specifically Gonorrhea. Mother talks about STIs including Gonorrhea how this is transmitted, and how to protect from getting it.",
    choices: ["Continue"],
  },
  {
    isFinal: false, // B
    c1: 5, score: 0,
    question: "Daughter says, 'You can get Gonorrhea from sex, but if you don't have symptoms, you don't have it. Right?' How might the mother respond?",
    choices: ["Knows daughter is incorrect, but doesn't know how to tell her"],
  },
  {
    isFinal: false, // B1
    c1: 6, score: 0,
    question: "Mother understands her daughter has the wrong information and she wants to educate her with the correct information. But she does not know how to.",
    choices: ["Continue"],
  },
  {
    isFinal: false, // C
    c1: 7, score: +5,
    isInfobox: true,
    h1: "Rationale & Resources",
    // use | delimiter to separate bullet points
    list: "Gonorrhea is one of the sexually transmitted infections (STIs), and second most common STIs in the U.S. It is asymptomatic, which means most of the time people will not have symptom when they are infected.|For female, gonorrhea can spread through vaginal fluids, semen during vaginal, anal, or oral sex with an infected person. It grows in the genital tract and can be found in the mouth, eyes, throat, and anus.|Left untreated, this damage can lead to a difficult pregnancy or prevent her from ever having a baby.",
    resourceText: "CDC resources about Gonorrhea",
    resourceLink: "https://www.cdc.gov/std/gonorrhea/Gonorrhea-FS.pdf",
    choices: ["Continue"],
  },
  {
    isFinal: true, // C1 outcome, game over
    c1: 7, score: +5,
    question: "Mother got information through “Rationale & Resources”; she educates her daughter with the correct information.",
    choices: ["Finish game"],
  },
];

// Scenario 6
export const scenario_6 = [
  {
    isFinal: false, // Scenario
    c1: 1, score: 0,
    question: "Charline and Jennie are best friends in middle school. Charline has been having vaginal discharge for a while now. She has told Jennie that she has had sex with her boyfriend last month for the first time. Today, during break, she sits in a private area with Jennie and talks about her vaginal discharge and how she is scared but cannot tell her mom about it.",
    choices: ["Jennie is concerned and talks to her own mom"],
  },
  {
    isFinal: false, // Scenario cont.
    c1: 2, c2: 8, score: +5,
    question: "Jennie decides to talk with her mother about Charline's problem and the history of sex. How might Jennie's mom respond?",
    choices: ["Start a conversation", "Ignore Charline"],
  },
  {
    isFinal: false, // A
    c1: 3, score: +5,
    question: "Jennie and her mom start a conversation about different types of STI's, focusing on Chlamydia, modes of transmission, symptoms and methods of protection",
    choices: ["Continue"],
  },
  {
    isFinal: false, // A1
    c1: 4, c2: 4, score: +5,
    question: "Mom asks, 'Jennie, what do you know about Chlamydia?' How might Jennie respond?",
    choices: ["It comes from sex?", "I don't know anything about it"],
  },
  {
    isFinal: false, // A1 cont.
    c1: 5, score: 0,
    question: "Mom says, 'Well, let us sit and discuss what is Chlamydia, where does it come from, what are the symptoms and how to be protected.'",
    choices: ["Continue"],
  },
  {
    isFinal: false, // A1 cont. 2, not a question
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
  {
    isFinal: false, // A1 cont. 3
    c1: 7, score: +5,
    question: "Jennie says, 'Thanks mom! How can we help Charline?'",
    choices: ["Continue"],
  },
  {
    isFinal: true, // A1 outcome, game over
    c1: 7, score: +5,
    question: "Jennie's mother says, 'You should advise her to see a physician.'",
    choices: ["Finish game"],
  },
  {
    isFinal: false, // B
    c1: 9, score: -10,
    question: "Jennie's mom tells her that Charline's problem is not her responsibility and she should stop talking with her.",
    choices: ["Continue"],
  },
  {
    isFinal: true, // B1 outcome, game over
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

// Scenario 7
export const scenario_7 = [
  {
    isFinal: false, // Scenario
    c1: 1, score: +5,
    question: "Mother and daughter found out that her uncle is diagnosed with HIV+. This news prompts the mother and daughter to communicate about HIV, what HIV positive means, and how people live with HIV+.",
    choices: ["Mother starts the conversation"],
  },
  {
    isFinal: false, // Scenario cont.
    c1: 2, c2: 3, score: +5,
    question: "Mother explains to her daughter about HIV. What happens next?",
    choices: ["Refer to Mother's Resources", "Daughter asks her mother how people get infected."],
  },
  {
    isFinal: false, // A
    c1: 3, score: +5,
    isInfobox: true,
    h1: "Mother's Resources",
    h2: "HIV≠AIDS",
    // use | delimiter to separate bullet points
    list: "Human immunodeficiency virus (HIV) is a virus that attacks the immune system.|AIDS (acquired immune deficiency syndrome) is referred to as advanced HIV infection or latestage HIV.|HIV can hide long period time in T-cell or CD4 cell in the body|HIV can destroy many CD4 cells, so that the body can't fight infections and diseases anymore; at this point, HIV infection can lead to AIDS.",
    choices: ["Daughter asks her mother how people get infected."],
  },
  {
    isFinal: false, // B
    c1: 4, score: 0,
    question: "Daughter asks, 'How do people get HIV?",
    choices: ["Mother responds to her question."],
  },
  {
    isFinal: false, // B1
    c1: 5, score: 0,
    isInfobox: true,
    h1: "Mother's Resources",
    h2: "How do people get HIV?",
    // use | delimiter to separate bullet points
    list: "HIV is spread through certain body fluids – blood, breast milk, semen, pre-cum, and vaginal fluids that must come in contact with a mucous membrane (found in mouth, vagina, penis, and rectum) or damaged tissue or be directly injected into the bloodstream.|You can get HIV from unprotected sex (vaginal, anal, or oral) (without using condom) and from shared needles used for injecting drugs.|HIV does not survive long outside of the human body. It is not transmitted by touching, insect bites, toilet seats, sharing dishes, or kissing.",
    choices: ["Daughter asks her mother what HIV positive means."],
  },
  {
    isFinal: false, // B2
    c1: 6, score: 0,
    question: "Daughter asks, 'Uncle has HIV now. Is he going to be sick right away? How will he live with HIV?'",
    choices: ["Mother explains."],
  },
  {
    isFinal: true, // B2a
    c1: 6, score: 0,
    isInfobox: true,
    h1: "Mother's Resources",
    // use | delimiter to separate bullet points
    list: "People who are HIV positive means they have HIV in their body. Some people get flu-like symptoms, but they go away. These people are infected but may not look or feel sick, and not everyone will get sick immediately.|Unlike other viruses, the body cannot get rid of HIV completely, which means once people have HIV, they will live with it for their lives.|Although currently there is no effective cure for HIV, it can be controlled with proper antiretroviral therapy treatment, and people can live long and healthy lives.",
    resourceText: "CDC resources about HIV:",
    resourceLink: "https://www.cdc.gov/hiv/pdf/library/",
    choices: ["Finish game"],
  },
];

// template for scenario object
/*
export const scenario_7 = [
  { isFinal: false, // Scenario
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: false, // A
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: true, // A1
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: true, // A2
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: false, // A3
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: true, // A3 a outcome
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: true, // A3 b outcome
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: false, // B
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
  { isFinal: false, // A2 outcome, game over
    c1: 1, c2: 2, c3: 0, c4: 0, score: 0,
    question,
    choices: ["Finish game"],
  },
];
*/

// template for infobox in a scenario object
// omit props that aren't used
// otherwise using empty string is rendered, creates big blank space
/*
  { isFinal: true, // B2a
    c1: 6, c2: 6, c3: 6, c4: 6, score: 0,
    isInfobox: true,
    h1: "Mother's Resources",
    p1: "Paragraph 1",
    h2: "Header 2",
    // use | delimiter to separate bullet points
    list: "foo|bar|baz",
    h3: "Header 3",
    p2: "Paragraph 2",
    choices: ["Finish game"],
  },
*/
