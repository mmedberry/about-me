import React from "react";
import { Grommet, Text, Form, FormField, Button, Box } from "grommet";
import { Trash, Add } from "grommet-icons";
import { CharacterForm } from "../Components/characterForm";
import { Character } from "../types";
interface ICombatManagerProps {

}
interface ICombatManagerState {
    inCombat: boolean;
    characterCount: number;
    characters: Character[]
}
export class CombatManagerPage extends React.Component<ICombatManagerProps, ICombatManagerState> {
    constructor(props: Readonly<ICombatManagerProps>){
        super(props);

    }
    state: ICombatManagerState = {
        inCombat: false,
        characterCount: 1,
        characters: []
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
    handleSubmitCharacterClick=(data: any)=>{
        let tempArray = this.state.characters;
        tempArray.push(new Character(data));
        this.setState({
            characters: tempArray
        })
    }
    render() {
        const forms = [];
        for (let i = 1; i <= this.state.characterCount; i++) {
            forms.push(<CharacterForm key={i} id={i} handleDeleteClick={this.handleDeleteClick} />)
        }
        return (
            <>
                <Grommet >
                    
                    {forms}
                </Grommet>
                <Button icon={<Add />} label="Add Character" onClick={this.handleAddCharacterClick} />
            </>
        );
    }
}