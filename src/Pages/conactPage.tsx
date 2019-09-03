import React from "react";
import { Text } from "grommet";

export class ContactPage extends React.Component {
    render() {
        return (
            <>
                <h1>Contact information</h1>
                <br />
                <Text>Phone: ‪(515)-337-2496</Text>
                <br />
                <br />
                <Text>Email: medberry@iastate.edu</Text>
                <br />
                <br />
                <Text>
                    <a href="https://github.com/mmedberry">Github</a>
                </Text>
            </>
        );
    }
}
