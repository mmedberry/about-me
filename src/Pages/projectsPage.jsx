import React from "react";
import { Box, Image, Accordion, AccordionPanel } from "grommet";

export class ProjectsPage extends React.Component {
    render() {
        return (
            <>
                <h1>Project information</h1>
                <Accordion>
                    <AccordionPanel label="Mars Rover - Embedded Systems">
                        This was a project I did for Cpr E 288: Embedded Systems
                        Engineering. In this project I was on a three person
                        team that created a prototype mars rover based on an ARM
                        processor and an iRobot Roomba using C. We were able to
                        connect to the rover over Wi-Fi and give it commands and
                        receive data back. Commands given to the rover consisted
                        of movement and surveying the surroundings. The robot
                        was able to take IR and sonar readings of objects in its
                        vicinity and record collisions, and send that data back
                        to the team over Wi-Fi. We demonstrated the
                        functionality of our rover by using it to navigate a
                        course littered with objects into a target zone while
                        limiting collisions.
                        <Image fit="cover" src="/rover.jpg" alignSelf="start" />
                    </AccordionPanel>
                    <AccordionPanel label="ProjectX Game Engine - Software Development">
                        <Box>
                            This was a project I did for Com S 309: Software
                            Development. In this project I was part of a team
                            that created a modular game engine and desktop game
                            application based on that game engine. The game
                            engine was created in Java and is capable of
                            efficiently rendering a 2-D game. The game engine
                            supports multiplayer functionality with a dedicated
                            server machine for hosting peer-to-peer play.
                        </Box>
                        <Box responsive direction="column" alignContent="start">
                            <Box pad="small" basis="1/2">
                                <Image
                                    fit="cover"
                                    src="/gameScreen.png"
                                    alignSelf="start"
                                />
                                Above is an in-game screen from the ProjectX
                                game engine. Players are able to move, pick up
                                and use objects, and attack other players or
                                NPC's. The game can support multiple players
                                through the use of online multiplayer via a
                                dedicated server. <br /> The grid overlay, path
                                making diagrams, and entity borders are all game
                                developer only tools to help create the game.
                            </Box>
                            <Box basis="1/2" pad="small" overflow="auto">
                                <Image
                                    fit="cover"
                                    src="/projectDesign.png"
                                    alignSelf="start"
                                />{" "}
                                Above is the project design overview. We
                                designed our game engine to allow game designers
                                to be as removed from the coding as possible
                                when they want to design a new game.
                                <br /> The modularity of the game engine means
                                that a developer can create a full fledged game
                                with only some 2-D sprites, a .txt file to
                                generate the world from, and some new or
                                modified Enum data.
                            </Box>
                        </Box>
                    </AccordionPanel>
                </Accordion>
            </>
        );
    }
}
