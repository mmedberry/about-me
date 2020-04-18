import React from "react";
import { Text } from "grommet";

export class HomePage extends React.Component {
    render() {
        return (
            <>
                <h1>
                    {" "}
                    My name is Max Medberry, and I'm a senior in Computer
                    Engineering at Iowa State University.
                </h1>
                <Text size="large">
                    This is a small personal site to present and link to some of
                    my personal information and projects. Click on a button at
                    the top to learn more about me or what I've been working on!
                </Text>
                {/* <Box height="small" width="small">
                    <Image fit="cover" src="./suit_img_50x50.jpg" />
                </Box> */}
            </>
        );
    }
}
