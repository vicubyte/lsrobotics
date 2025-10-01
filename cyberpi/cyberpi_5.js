const slides = [
    {   //Slide 1
        image: "srcs/cyberpi/img5/img5_1.png",
        text: `Learn how to control a <strong>rocket game</strong> with CyberPi.`,
        className: ""
    },
    {   //Slide 2
        image: "srcs/cyberpi/img5/img5_2.png",
        text: `How do you control a character in a video game?`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/cyberpi/img5/img5_3.png",
        text: `How can we make CyberPi work as a video game controller?`,
        className: "anim-shake"
    },
    {   //Slide 4
        image: "srcs/cyberpi/img5/img5_4.png",
        text: `We can use buttons, joystick and movements to control a video game character.`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/cyberpi/img5/img5_5.png",
        text: `Let’s start coding!<br>
        Create the main character using a <strong>rocket sprite</strong>.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/cyberpi/img5/img5_6.png",
        text: `Select <strong>Sprites</strong>, click <strong>add</strong>, type <strong>rocket</strong> in the search box, select <strong>Rocket16</strong>, and click <strong>OK</strong>.<br>
        A rocket will appear on the stage.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/cyberpi/img5/img5_7.png",
        text: `Select the <strong>Panda</strong> sprite, click the <strong>x</strong> icon, confirm <strong>Delete</strong>.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/cyberpi/img5/img5_8.png",
        text: `Make a variable with the name <strong>direction</strong>. This variable will store the pointing direction of the rocket.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/cyberpi/img5/img5_9.png",
        text: `For a sprite, the direction indicates which way it is pointing.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/cyberpi/img5/img5_10.png",
        text: `Drag the following blocks to make the rocket point to the value of the variable.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/cyberpi/img5/img5_11.png",
        text: `Select <strong>Devices</strong>, connect your CyberPi and add the following blocks.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/cyberpi/img5/img5_12.png",
        text: `This block indicates how far the CyberPi is tilted to the right. The values range from <strong>0 to 180</strong>: positive for right, negative for left.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/cyberpi/img5/img5_13.png",
        text: `Add the new block and click the green flag to test the rocket direction!`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/cyberpi/img5/img5_14.png",
        text: `Add the following blocks to your <strong>rocket script</strong>, this will start the movement! First two blocks set the correct size and initial position.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/cyberpi/img5/img5_15.png",
        text: `Let’s code the projectile!<br>
        Add the following blocks to your <strong>CyberPi script</strong>. Click <strong>New message</strong>, write <strong>fire</strong> and select <strong>OK</strong>.`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/cyberpi/img5/img5_16.png",
        text: `Add a new sprite, type <strong>ball</strong> in the search box, select <strong>Ball</strong>, and click <strong>OK</strong>. Change the ball size to 30.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/cyberpi/img5/img5_17.png",
        text: `Drag the following blocks to the <strong>ball sprite</strong>. At the start of the game, the ball will disappear, and fire message will create a clone.`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/cyberpi/img5/img5_18.png",
        text: `We use clones to create multiple sprites at the same time, all following the same logic.`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/cyberpi/img5/img5_19.png",
        text: `Drag the following blocks. The ball will move to the rocket’s position, face the same direction, then go to the tip and become visible.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/cyberpi/img5/img5_20.png",
        text: `Add the following blocks. The ball will keep moving until it <strong>touches an edge</strong>. Then, the clone will disappear.`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/cyberpi/img5/img5_21.png",
        text: `Test your rocket game!<br>
        Press the <strong>green flag</strong> to play and <strong>red square</strong> to stop.`,
        className: ""
    },
    {   //Slide 22
        image: "srcs/cyberpi/img5/img5_22.png",
        text: `<strong>Challenge:</strong> Add a speed boost with button A.`,
        className: ""
    },
];