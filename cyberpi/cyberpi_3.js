const slides = [
    {   //Slide 1
        image: "srcs/cyberpi/img3/img3_1.png",
        text: `Learn how to control a band with <strong>messages</strong> in CyberPi.`,
        className: ""
    },
    {   //Slide 2
        image: "srcs/cyberpi/img3/img3_2.png",
        text: `What do we do when an earthquake alarm sounds?`,
        className: "anim-shake"
    },
    {   //Slide 3
        image: "srcs/cyberpi/img3/img3_3.png",
        text: `The alarm is an event that tells us to act.`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/cyberpi/img3/img3_4.png",
        text: `In mBlock, a <strong>message</strong> is an event that helps other sprites or devices know what to do.`,
        className: ""
    },
    {   //Slide 5
        image: "srcs/cyberpi/img3/img3_5.png",
        text: `Let’s start coding!<br>
        Create a virtual band with CyberPi.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/cyberpi/img3/img3_6.png",
        text: `First, we need a new extension.<br>
        Go to <strong>Sprites</strong>, click <strong>extension</strong>, and add <strong>Music</strong>.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/cyberpi/img3/img3_7.png",
        text: `Then, select the <strong>Panda</strong> sprite, click the <strong>x</strong> icon and confirm <strong>Delete</strong>.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/cyberpi/img3/img3_8.png",
        text: `Let's add two sprites. First, click the <strong>+</strong> icon and a window will open.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/cyberpi/img3/img3_9.png",
        text: `Search for <strong>"Drum Kit"</strong> and confirm with <strong>OK</strong>. You will see it in the Sprites tab.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/cyberpi/img3/img3_10.png",
        text: `Now, search for <strong>"Drum-cymbal"</strong> and add it as well. You should see both sprites separately.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/cyberpi/img3/img3_11.png",
        text: `Let’s change the background!<br>
        Go to <strong>Background</strong> and click the + icon.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/cyberpi/img3/img3_12.png",
        text: `Click on <strong>indoors</strong>, scroll to the end and select <strong>"Spotlight-stage2"</strong>. Then confirm with <strong>OK</strong>.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/cyberpi/img3/img3_13.png",
        text: `You will now see the complete stage. Arrange the drum and cymbal as you like.`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/cyberpi/img3/img3_14.png",
        text: `After that, go to <strong>Devices</strong> and select <strong>Live</strong>.<br>
        Then, from the <strong>Events</strong> category, drag the block <strong>when CyberPi tilted left</strong>.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/cyberpi/img3/img3_15.png",
        text: `Next, add the block <strong>broadcast</strong>.<br>
        Click on <strong>message</strong>, choose <strong>New message</strong>, type <strong>cymbal</strong>, and confirm.`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/cyberpi/img3/img3_16.png",
        text: `Add another block, this time selecting <strong>tilted backward</strong>, and set the message to <strong>drum</strong>.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/cyberpi/img3/img3_17.png",
        text: `Go back to <strong>Sprites</strong>, select the <strong>Drum Kit</strong> sprite and from <strong>Events</strong> drag the block shown.`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/cyberpi/img3/img3_18.png",
        text: `Let’s add our music sound.<br>
        Test it by tilting the CyberPi backward.`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/cyberpi/img3/img3_19.png",
        text: `Let’s add a small animation to our sprite.<br>
        Place the following blocks and test again!`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/cyberpi/img3/img3_20.png",
        text: `We’ll do the same for the cymbal.<br>
        Since we’ll use the same logic, copy the code by <strong>dragging</strong> it to the <strong>cymbal</strong> sprite.`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/cyberpi/img3/img3_21.png",
        text: `Inside the <strong>cymbal</strong> sprite, you’ll see the same code.<br>
        Let’s change these two parameters.`,
        className: ""
    },
    {   //Slide 22
        image: "srcs/cyberpi/img3/img3_22.png",
        text: `<strong>Challenge:</strong> Create two more instruments for two other CyberPi actions.`,
        className: ""
    },
];
