import React from "react";
import { Box, Image } from "grommet";

export class AboutPage extends React.Component {
    render() {
        return (
            <>
                <h1> About Me</h1>
                <p>
                    I'm a senior in Computer Engineering at Iowa State
                    University. My main area of interest in in software
                    engineering. Languages I have worked in Java, C, C#,
                    JavaScript, and TypeScript. I also have experience in
                    frameworks like .NET Core, Express.js, Node.js, and
                    especially ReactJS. I have done projects in embedded design,
                    desktop applications with internet connectivity, and web
                    apps.
                </p>
                <p>
                    {" "}
                    I am also a member of Tau Beta Pi, and currently work as a
                    pharmacy technician part-time.
                </p>
            </>
        );
    }
}
