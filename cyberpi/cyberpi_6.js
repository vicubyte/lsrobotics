const slides = [
    {   //Slide 1
        image: "srcs/cyberpi/img6/img6_1.png",
        text: `Finish the <strong>game logic</strong> of the rocket game with CyberPi.`,
        className: ""
    },
    {   //Slide 2
        image: "srcs/cyberpi/img6/img6_2.png",
        text: `What do you need to win a game, and what makes you lose?`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/cyberpi/img6/img6_3.png",
        text: `The <strong>game logic</strong> determines the conditions for earning points and losing lives.`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/cyberpi/img6/img6_4.png",
        text: `Open you rocket game project or download it from <a href='https://planet.mblock.cc/project/6469483' target='_blank' rel='noopener noreferrer'>here</a>.`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/cyberpi/img6/img6_5.png",
        text: `Let’s start coding!<br>
        Add a <strong>background</strong> to your game.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/cyberpi/img6/img6_6.png",
        text: `Select <strong>Background</strong>, click <strong>+</strong>, select <strong>Space</strong>, pick <strong>Nebula</strong>, and click <strong>OK</strong>.<br>
        A new background will appear on the stage.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/cyberpi/img6/img6_7.png",
        text: `Create two variables named <strong>lives</strong> and <strong>points</strong>. Theses variables will be important for the game logic.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/cyberpi/img6/img6_8.png",
        text: `Uncheck the <strong>direction</strong> variable, it is important for the movement, but not for the player.<br>
        Arrange the other two variables on the stage. `,
        className: ""
    },
    {   //Slide 9
        image: "srcs/cyberpi/img6/img6_9.png",
        text: `Add a new sprite, select <strong>Props</strong>, pick <strong>Bomb</strong>, and click <strong>OK</strong>. Change the bomb size to 40.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/cyberpi/img6/img6_10.png",
        text: `Add the following blocks to your <strong>bomb script</strong>. This will create a bomb every 3 seconds.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/cyberpi/img6/img6_11.png",
        text: `Drag the following blocks so the bombs appear on the right edge at different heights.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/cyberpi/img6/img6_12.png",
        text: `Add the following blocks.<br>
        The bomb will keep moving until it <strong>touches an edge</strong>. Then, the clone will disappear.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/cyberpi/img6/img6_13.png",
        text: `Click the <strong>green flag</strong> and test the bomb generation. What else is missing?`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/cyberpi/img6/img6_14.png",
        text: `Add the <strong>set points</strong> block to your <strong>bomb script</strong>. At the start of a new game, points should be reset to 0.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/cyberpi/img6/img6_15.png",
        text: `Drag the following blocks. If a bomb <strong>touches</strong> a ball, it will give you 10 points!`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/cyberpi/img6/img6_16.png",
        text: `Create a block named <strong>game logic</strong>. A custom block allows you to group several blocks together.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/cyberpi/img6/img6_17.png",
        text: `Drag the last group of blocks inside the <strong>game logic block definition</strong>. This way, all the logic can be executed with a single block.`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/cyberpi/img6/img6_18.png",
        text: `Drag the <strong>game logic block</strong> below the <strong>change x</strong> block. This will delete the bomb when touching a ball. Test your points logic!`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/cyberpi/img6/img6_19.png",
        text: `Add the <strong>set lives</strong> block to your <strong>bomb script</strong>. At the start of a new game, lives should be reset to 3.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/cyberpi/img6/img6_20.png",
        text: `Drag the following blocks. If a bomb <strong>touches</strong> the rocket, you will lose 1 life! If your lives are <strong>less than</strong> 1, the game is over!`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/cyberpi/img6/img6_21.png",
        text: `Update your <strong>game logic block definition</strong> with the new conditions.<br>
        Test your <strong>rocket pro</strong> game!`,
        className: ""
    },
    {   //Slide 22
        image: "srcs/cyberpi/img6/img6_22.png",
        text: `<strong>Challenge:</strong> Disable the rocket’s shooting once all lives are gone.`,
        className: ""
    },
];
