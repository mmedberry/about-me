import React from "react";
import { Grommet, Text, Form, FormField, Button, Box } from "grommet";
import { Trash, Add, Play } from "grommet-icons";
import { CharacterForm } from "../Components/characterForm";
import { Character } from "../types";
interface ICombatManagerProps {

}
interface ICombatManagerState {
    inCombat: boolean;
    characterCount: number;
    characters: Character[];
    currentTurn: number;
}
export class CombatManagerPage extends React.Component<ICombatManagerProps, ICombatManagerState> {
    constructor(props: Readonly<ICombatManagerProps>) {
        super(props);
        this.handleSubmitCharacterClick = this.handleSubmitCharacterClick.bind(this);
    }
    state: ICombatManagerState = {
        inCombat: false,
        characterCount: 0,
        characters: [],
        currentTurn: 0
    };
    handleDeleteClick = () => {
        let decrement = this.state.characterCount - 1;
        this.setState({
            characterCount: decrement
        })
    }
    handleAddCharacterClick = () => {
        let increment = this.state.characterCount + 1;
        this.setState({
            characterCount: increment
        })
    }
    handleSubmitCharacterClick = (data: Character) => {
        let tempArray = this.state.characters;
        let addedElement = false;
        for (let index = 0; index < tempArray.length; index++) {
            const element = tempArray[index];
            if (data.id === element.id) {
                tempArray[index] = data;
                addedElement = true;
            }
        }
        if (!addedElement) {
            tempArray.push(data);
        }
        this.setState({
            characters: tempArray
        })
        console.log(this.state.characters);
    }
    handleIncreaseTurn = () => {
        let newTurn = this.state.currentTurn + 1;
        if (newTurn >= this.state.characters.length) {
            newTurn = 0;
        }
        this.setState({
            currentTurn: newTurn
        })
    }
    handleBeginCombatClick = () => {
        let tempArray = this.state.characters.sort((a, b) => {
            if (a.initiative === b.initiative) {
                if (a.dex < b.dex) {
                    return 1;
                }
                else {

                    return -1;
                }
            } else if (a.initiative < b.initiative) {
                return 1;
            } else {
                return -1
            }
        }

        );
        this.setState({
            characters: tempArray, inCombat: true
        });
        console.log(this.state.characters);
    }
    render() {
        const forms = [];
        if (this.state.inCombat) {
            for (let i = 0; i <= this.state.characterCount; i++) {
                forms.push(<Box key={i} border="all" margin="small" round={true} overflow="hidden" pad="small" alignSelf="start" width={this.state.currentTurn === i ? "medium" : "small"}>
                    <Text>
                        {this.state.characters[i].name}
                    </Text>
                    <Button label="Next"
                        onClick={this.handleIncreaseTurn}></Button>
                </Box>)
            }
        }
        else {
            for (let i = 0; i <= this.state.characterCount; i++) {
                forms.push(<CharacterForm key={i} id={i} handleDeleteClick={this.handleDeleteClick} handleSubmitCharacterClick={this.handleSubmitCharacterClick} />)
            }
        }
        return (
            <>
                <Grommet >
                    {forms}
                </Grommet>
                <Button icon={<Add />} label="Add Character" onClick={this.handleAddCharacterClick} disabled={this.state.inCombat} /><br /><br />
                <Button icon={<Play />} label="Begin Combat" onClick={this.handleBeginCombatClick} disabled={this.state.inCombat} />
            </>
        );
    }
}