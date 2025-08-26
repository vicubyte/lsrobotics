const slides = [
    {   //Slide 1
        image: "srcs/cyberpi/img7/img7_1.png",
        text: `Learn how to <strong>control the temperature</strong> with CyberPi.`,
        className: ""
    },
    {   //Slide 2
        image: "srcs/cyberpi/img7/img7_2.png",
        text: `A temperature sensor measures how hot or cold something is.`,
        className: ""
    },
    {   //Slide 3
        image: "srcs/cyberpi/img7/img7_3.png",
        text: `How does an air conditioner keep the temperature steady?`,
        className: ""
    },
    {   //Slide 4
        image: "srcs/cyberpi/img7/img7_4.png",
        text: `We’ll do the same with a fan!<br>
        If the <strong>temperature</strong> goes above the limit, it will turn on, and when it goes down, it will turn off.`,
        className: "anim-glow-shake"
    },
    {   //Slide 5
        image: "srcs/cyberpi/img7/img7_5.png",
        text: `First, connect the <strong>temperature</strong> sensor to the CyberPi.`,
        className: ""
    },
    {   //Slide 6
        image: "srcs/cyberpi/img7/img7_6.png",
        text: `Then, connect the <strong>fan</strong> to the motor driver.`,
        className: ""
    },
    {   //Slide 7
        image: "srcs/cyberpi/img7/img7_7.png",
        text: `Finally, connect the motor driver to the temperature sensor.<br>
        It should look like this.`,
        className: ""
    },
    {   //Slide 8
        image: "srcs/cyberpi/img7/img7_8.png",
        text: `First, we need two new extensions.<br>
        Click <strong>extension</strong> and add <strong>Temperature Sensor</strong>.`,
        className: ""
    },
    {   //Slide 9
        image: "srcs/cyberpi/img7/img7_9.png",
        text: `Then, add <strong>DC Motor Driver</strong> extension as well.`,
        className: ""
    },
    {   //Slide 10
        image: "srcs/cyberpi/img7/img7_10.png",
        text: `Make a variable with the name <strong>temperature</strong>.<br>
        This variable will store the sensor data.`,
        className: ""
    },
    {   //Slide 11
        image: "srcs/cyberpi/img7/img7_11.png",
        text: `Drag the following blocks.<br>
        This script will store the <strong>temperature value</strong> in the variable <strong>temperature</strong>.`,
        className: ""
    },
    {   //Slide 12
        image: "srcs/cyberpi/img7/img7_12.png",
        text: `Add a <strong>forever loop</strong> to update constantly the variable.<br>
        Otherwise, it will store the value only once.`,
        className: ""
    },
    {   //Slide 13
        image: "srcs/cyberpi/img7/img7_13.png",
        text: `Add a <strong>show label</strong> block and set the text to the variable.`,
        className: ""
    },
    {   //Slide 14
        image: "srcs/cyberpi/img7/img7_14.png",
        text: `Drag two <strong>join</strong> blocks and arrange them to show the property, value and unit.`,
        className: ""
    },
    {   //Slide 15
        image: "srcs/cyberpi/img7/img7_15.png",
        text: `Test your temperature sensor by measuring different temperatures.<br>
        You will see the value on the CyberPi!`,
        className: ""
    },
    {   //Slide 16
        image: "srcs/cyberpi/img7/img7_16.png",
        text: `Let’s set the fan logic based on the measured temperature:<br>
        if it’s above 28˚C, turn the fan on; otherwise, turn it off.`,
        className: ""
    },
    {   //Slide 17
        image: "srcs/cyberpi/img7/img7_17.png",
        text: `We will use the <strong>greater than</strong> (>) operator.<br>
        Drag the <strong>temperature</strong> variable into it and compare it with 28.`,
        className: ""
    },
    {   //Slide 18
        image: "srcs/cyberpi/img7/img7_18.png",
        text: `Analyze this flowchart, there is a conditional structure and a loop.<br>
        Can you explain it?`,
        className: ""
    },
    {   //Slide 19
        image: "srcs/cyberpi/img7/img7_19.png",
        text: `These blocks follow the same logic as the previous flowchart.<br>
        The if-else block divides all possible values into two groups.`,
        className: ""
    },
    {   //Slide 20
        image: "srcs/cyberpi/img7/img7_20.png",
        text: `Add the if-else block to your script.<br>
        Test your temperature control system!`,
        className: ""
    },
    {   //Slide 21
        image: "srcs/cyberpi/img7/img7_21.png",
        text: `Finally, let’s add some LEDs to indicate the fan status.`,
        className: ""
    },
    {   //Slide 22
        image: "srcs/cyberpi/img7/img7_22.png",
        text: `<strong>Challenge:</strong> Using what we learned, add the message event for both temperature cases so the Panda says the fan’s status.`,
        className: ""
    },
];