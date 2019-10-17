import React from "react";
import { Text } from "grommet";
import { Direction } from "../types";

interface IEtchASketchState {
    keys?: string;
    direction?: Direction;
}
export class EtchASketch extends React.Component<IEtchASketchState> {
    state: IEtchASketchState = {
        keys: "",
        direction: Direction.None,
    };
    componentDidMount = () => {
        document.addEventListener("keydown", this.logKey);
    };
    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.logKey);
    };
    turnRight = () => {
        console.log("right");
    };
    turnLeft = () => {
        console.log("left");
    };
    turnBack = () => {
        console.log("back");
    };
    turnUp = () => {
        console.log("up");
    };
    logKey = (e: KeyboardEvent) => {
        const keys = this.state.keys! + e.key;
        this.setState({ keys });
        if (e.key === "ArrowLeft" || e.key === "a") {
            this.turnLeft();
        } else if (e.key === "ArrowRight" || e.key === "d") {
            this.turnRight();
        } else if (e.key === "ArrowDown" || e.key === "s") {
            this.turnBack();
        } else if (e.key === "ArrowUp" || e.key === "w") {
            this.turnUp();
        }
    };
    render() {
        return (
            <>
                <Text>{this.state.keys}</Text>
            </>
        );
    }
}
