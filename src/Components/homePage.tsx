import React from "react";
import { Box, Image } from "grommet";

export class HomePage extends React.Component {
    render() {
        return (
            <>
                <h1>
                    {" "}
                    My name is Max Medberry, and I'm a senior in Computer
                    Engineering at Iowa State University.
                </h1>
                <p>
                    This is a small personal site to present and link to some of
                    the projects I have been working on.
                </p>
                <Box height="small" width="small">
                    <Image fit="cover" src="/suit_img_50x50.jpg" />
                </Box>
            </>
        );
    }
}
