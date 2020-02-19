import React from "react";
import { Grommet, Text, Form, FormField, Button, Box } from "grommet";
import { Trash, Add, Play } from "grommet-icons";
import { CharacterForm } from "../Components/characterForm";
import { Character } from "../types";
interface ICombatManagerProps {

}
interface ICombatManagerState {
    inCombat: boolean;
    characters: Character[];
    currentTurn: number;
    currentId: number;
}
export class CombatManagerPage extends React.Component<ICombatManagerProps, ICombatManagerState> {
    constructor(props: Readonly<ICombatManagerProps>) {
        super(props);
        this.handleSubmitCharacterClick = this.handleSubmitCharacterClick.bind(this);
    }
    state: ICombatManagerState = {
        inCombat: false,
        characters: [],
        currentTurn: 0,
        currentId: 0,
    };
    handleDeleteClick = (id: number) => {
        console.log("del #: " + id);
        for (let character of this.state.characters) {
            console.log("Char before del: " + character.name);
        }
        var tempList = this.state.characters;
        var index = tempList.findIndex((character: Character) => character.id === id);
        tempList.splice(index, 1);
        this.setState({
            characters: tempList
        });
        for (let character of this.state.characters) {
            console.log("Char after del: " + character.name);
        }
    }
    handleAddCharacterClick = () => {
        let newId = this.state.currentId + 1;
        console.log("newId: " + newId);
        this.setState({
            currentId: newId
        });
        let tempCharacter = new Character(newId);
        console.log("New Char id: " + tempCharacter.id);
        let tempList = this.state.characters;
        tempList.push(tempCharacter);
        this.setState({
            characters: tempList
        });
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
        let fullArray = this.state.characters.filter(character => character.isFull());
        let tempArray = fullArray.sort((a, b) => {
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
            let i = 0;
            for (let character of this.state.characters) {
                forms.push(
                    <Box key={character.id} border="all" margin="small" round={true} overflow="hidden" pad="small" alignSelf="start" width={i === this.state.currentTurn ? "medium" : "small"}>
                        <Text>
                            {character.name}
                        </Text>
                        <Button label="Next"
                            onClick={this.handleIncreaseTurn}></Button>
                    </Box>);
                i++;

            }
        }
        else {
            for (let character of this.state.characters) {
                forms.push(<CharacterForm key={character.id} id={character.id} handleDeleteClick={() => this.handleDeleteClick(character.id)} handleSubmitCharacterClick={this.handleSubmitCharacterClick} />);

            }
            forms.push(
                <Box margin="small" key={this.state.currentId + 1}>
                    <Button icon={<Add />} label="Add Character" onClick={this.handleAddCharacterClick} />
                    <br /><br />
                    <Button icon={<Play />} label="Begin Combat" onClick={this.handleBeginCombatClick} />
                </Box>
            );
        }
        return (
            <>
                <Grommet >
                    {forms}
                </Grommet>
            </>
        );
    }
}