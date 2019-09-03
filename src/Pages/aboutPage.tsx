import React from "react";
import { Text } from "grommet";

export class AboutPage extends React.Component {
    render() {
        return (
            <>
                <h1> About Me</h1>
                <Text>
                    I'm a senior in Computer Engineering at Iowa State
                    University. My main area of interest in in software
                    engineering. Languages I have worked in Java, C, C#,
                    JavaScript, and TypeScript. I also have experience in
                    frameworks like .NET Core, Express.js, Node.js, and
                    especially ReactJS. I have done projects in embedded design,
                    desktop applications with internet connectivity, and web
                    apps.
                </Text>
                <br />
                <br />
                <Text>
                    {" "}
                    I am also a member of Tau Beta Pi, an engineering honor
                    society, and currently work as a pharmacy technician
                    part-time.
                </Text>
            </>
        );
    }
}
