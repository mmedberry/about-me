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
                <a href="cumulativeReflection.pdf">
                    <Text size="large">Cumulative Reflection</Text>
                </a>
                <br />
                <br />
                <a href="engineering_ethics.pdf">
                    <Text size="large">Engineering Ethics</Text>
                </a>
            </>
        );
    }
}
