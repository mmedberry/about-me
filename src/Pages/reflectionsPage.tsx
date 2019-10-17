import React from "react";
import { Text } from "grommet";

export class ReflectionsPage extends React.Component {
    render() {
        return (
            <>
                <h1> Reflections</h1>
                <a href="genEdReflection.pdf">
                    <Text size="large">General Education Reflection</Text>
                </a>
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
