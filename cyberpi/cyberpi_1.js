const slides = [
    {   //Slide 1, 12x18 white box transparent
        image: "srcs/cyberpi/img1/img1_1.png",
        text: `Learn how to create a <strong>random answer game</strong> with CyberPi.`,
        className: "anim-shake"
    },
    {   //Slide 2, 20x10 video board
        image: "srcs/cyberpi/img1/img1_2.png",
        text: `A Magic 8 Ball is a toy that gives random answers to yes-or-no questions.`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/cyberpi/img1/img1_3.png",
        text: `How can we make the answers different every time using CyberPi?`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/cyberpi/img1/img1_4.png",
        text: `<strong>Random numbers</strong> make every answer unique!`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/cyberpi/img1/img1_5.png",
        text: `Let’s start coding!<br>
        Create the opening screen before asking the question.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/cyberpi/img1/img1_6.png",
        text: `Click <strong>Bluetooth</strong>, select your CyberPi and pair.<br>
        You should be in <strong>Upload</strong> mode.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/cyberpi/img1/img1_7.png",
        text: `Drag <strong>when button A pressed</strong> block from the Events category and change A to B.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/cyberpi/img1/img1_8.png",
        text: `From the Display category, drag the <strong>show label</strong> block and change the text with the opening message.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/cyberpi/img1/img1_9.png",
        text: `Drag the <strong>when wave left detected</strong> block from Events category and change it to <strong>shaken</strong>.`,
        className: ""
    },

    {   //Slide 10
        image: "srcs/cyberpi/img1/img1_10.png",
        text: `From the Display category, drag the <strong>show label</strong> block and change the text. Test both events!`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/cyberpi/img1/img1_11.png",
        text: `To add sound, drag the <strong>play hi until done</strong> block and change the sound to <strong>magic</strong>.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/cyberpi/img1/img1_12.png",
        text: `Make a variable with the name <strong>answer</strong>. This variable will store the random answer.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/cyberpi/img1/img1_13.png",
        text: `This block stores 0 value in the variable <strong>answer</strong>. We can set different values to this variable throughout the program.`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/cyberpi/img1/img1_14.png",
        text: `This block generates a random number between 1 and 10, which can be used later in the program.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/cyberpi/img1/img1_15.png",
        text: `Drag the following blocks under the play block. This will store a random number in the <strong>answer</strong> variable.`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/cyberpi/img1/img1_16.png",
        text: `This block makes the program run an instruction if the condition is true.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/cyberpi/img1/img1_17.png",
        text: `This block returns <strong>True</strong> if the variable <strong>answer</strong> is 1, and <strong>False</strong> if it’s not.`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/cyberpi/img1/img1_18.png",
        text: `Drag the following blocks. This script will show <strong>YES</strong> only when the value of the variable <strong>answer</strong> equals 1.`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/cyberpi/img1/img1_19.png",
        text: `Build the same structure for the other possible values. Place the code blocks one below the other.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/cyberpi/img1/img1_20.png",
        text: `Join all the blocks together into one program.`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/cyberpi/img1/img1_21.png",
        text: `<strong>Upload</strong> your program and test it by asking some questions!`,
        className: ""
    },
    {   //Slide 22
        image: "srcs/cyberpi/img1/img1_22.png",
        text: `<strong>Challenge:</strong> Add more possible answers to your Magic CyberPi!`,
        className: ""
    },
];
