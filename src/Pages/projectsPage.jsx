import React from "react";
import { Box, Image, Accordion, AccordionPanel, Text } from "grommet";

export class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Project information</h1>
                <Accordion>
                    <AccordionPanel label="Mars Rover - Embedded Systems">
                        <Text>
                            This was a project I did for Cpr E 288: Embedded
                            Systems Engineering. In this project I was on a
                            three person team that created a prototype mars
                            rover based on an ARM processor and an iRobot Roomba
                            using C. We were able to connect to the rover over
                            Wi-Fi and give it commands and receive data back.
                            Commands given to the rover consisted of movement
                            and surveying the surroundings. The robot was able
                            to take IR and sonar readings of objects in its
                            vicinity and record collisions, and send that data
                            back to the team over Wi-Fi. We demonstrated the
                            functionality of our rover by using it to navigate a
                            course littered with objects into a target zone
                            while limiting collisions.
                        </Text>
                        <Image
                            fit="cover"
                            src="./rover.jpg"
                            alignSelf="start"
                        />
                    </AccordionPanel>
                    <AccordionPanel label="ProjectX Game Engine - Software Development">
                        <Box>
                            <Text>
                                This was a project I did for Com S 309: Software
                                Development. In this project I was part of a
                                team that created a modular game engine and
                                desktop game application based on that game
                                engine. The game engine was created in Java and
                                is capable of efficiently rendering a 2-D game.
                                The game engine supports multiplayer
                                functionality with a dedicated server machine
                                for hosting peer-to-peer play.
                            </Text>
                        </Box>
                        <Box responsive direction="column" alignContent="start">
                            <Box pad="small" basis="1/2">
                                <Image
                                    fit="cover"
                                    src="./gameScreen.png"
                                    alignSelf="start"
                                />
                                <Text>
                                    Above is an in-game screen from the ProjectX
                                    game engine. Players are able to move, pick
                                    up and use objects, and attack other players
                                    or NPC's. The game can support multiple
                                    players through the use of online
                                    multiplayer via a dedicated server.
                                </Text>
                                <br />
                                <Text>
                                    The grid overlay, path making diagrams, and
                                    entity borders are all game developer only
                                    tools to help create the game.
                                </Text>
                            </Box>
                            <Box basis="1/2" pad="small" overflow="auto">
                                <Image
                                    fit="cover"
                                    src="./projectDesign.png"
                                    alignSelf="start"
                                />{" "}
                                <Text>
                                    Above is the project design overview. We
                                    designed our game engine to allow game
                                    designers to be as removed from the coding
                                    as possible when they want to design a new
                                    game.
                                </Text>
                                <br />
                                <Text>
                                    The modularity of the game engine means that
                                    a developer can create a full fledged game
                                    with only some 2-D sprites, a .txt file to
                                    generate the world from, and some new or
                                    modified Enum data.
                                </Text>
                            </Box>
                        </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Drawme.io">
                        <Text>
                            We created an online multiplayer game where players
                            submit an image, and other players try to be the
                            best to redraw that image. I was project leader on
                            this team and divised the core idea and architure of
                            the project, and led the team meetings and
                            communication. We decided a web application was the
                            best way to develop the game, and this was my first
                            exposure to many web technologies. I also gained
                            some experience in leading a team. We used some
                            common industry tools like JavaScript, HTML/HTML
                            generator engines, and Express.js framework server.{" "}
                        </Text>
                    </AccordionPanel>
                    <AccordionPanel label="Senior Design Project">
                        <Text>
                            My senior design team is currently working on
                            creating a UAV capable of using AI to do volumetric
                            analysis of objects, and fly autonomously. My
                            position on the team was chief backend engineer, and
                            I created programs to interface the hardware of the
                            drone with external software programs. This project
                            has taught me about software architecture, project
                            planning, and team work and communication. Some
                            specific technical skills I learned was ROS
                            framework, Linux operating system, and the C++
                            programming language. I also contributed to the team
                            by reading up on ROS framework and quickly became
                            the team's go to for references and direction within
                            ROS.
                        </Text>
                    </AccordionPanel>
                </Accordion>
            </>
        );
    }
}
