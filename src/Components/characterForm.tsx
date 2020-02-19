import React, { ChangeEvent, ReactElement } from "react";
import Grommet, { Form, FormField, Button, Box, Select } from "grommet";
import { Trash, UserAdd, Edit } from "grommet-icons";
import { Character, Affiliation } from "../types";
interface ICharacterFormProps {
    handleDeleteClick: () => void;
    handleSubmitCharacterClick: (data: Character) => void;
    id: number;
    character?: Character;
}
interface ICharacterFormState {
    name: string;
    initiative: number;
    dex: number;
    hp: number;
    submitted: boolean;
    affiliation: Affiliation;
}
export class CharacterForm extends React.Component<ICharacterFormProps, ICharacterFormState>{
    state: ICharacterFormState = {
        name: this.props.character ? this.props.character.name : "",
        initiative: this.props.character ? this.props.character.initiative : 0,
        dex: this.props.character ? this.props.character.dex : 0,
        hp: this.props.character ? this.props.character.hp : 0,
        affiliation: this.props.character ? this.props.character.affiliation : Affiliation.Neutral,
        submitted: false
    }
    handleOnSubmit = () => {

        let character: Character = {
            name: this.state.name,
            initiative: this.state.initiative,
            dex: this.state.dex,
            hp: this.state.hp,
            id: this.props.id,
            affiliation: Affiliation.Ally,
            isFull: Character.prototype.isFull
        };
        this.setState({
            submitted: true
        })
        this.props.handleSubmitCharacterClick(character);

    }
    handleEditClick = () => {
        this.setState({
            submitted: false
        })
    }
    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const eventName = event.currentTarget.name;
        const value = event.currentTarget.value;
        if (eventName === "name") {
            this.setState({
                name: value
            })
        } else if (eventName === "initiative") {
            const numValue = +value;
            this.setState({
                initiative: numValue
            })
        }
        else if (eventName === "dex") {
            const numValue = +value;
            this.setState({
                dex: numValue
            })
        }
        else if (eventName === "hp") {
            const numValue = +value;
            this.setState({
                hp: numValue
            })
        }
        else if (eventName === "affiliation") {

        }
    }

    handleAffiliationChange = (event: any) => {
        const value = event.value;
        let newValue = this.state.affiliation;
        if ("Ally" === value) {
            newValue = Affiliation.Ally
        } else if ("Enemy" === value) {
            newValue = Affiliation.Enemy
        }
        else if ("Neutral" === value) {
            newValue = Affiliation.Neutral
        }
        this.setState({
            affiliation: newValue
        })
    }
    handleIsSubmitted = (): ReactElement => {
        let calculatedId = this.props.id;
        if (this.state.submitted) {
            return (
                <>
                    <Box border="all" margin="small" round={true} overflow="hidden" pad="small" alignSelf="start" width="medium">

                        <h1>
                            {"Character " + calculatedId + ": " + this.state.name}
                        </h1>
                        <Button label="Edit" icon={<Edit />} onClick={this.handleEditClick} />
                    </Box>
                </>
            );
        } else {
            return (

                <Box border="all" margin="small" round={true} overflow="hidden" pad="small" alignSelf="start" width="medium">

                    <Form name="form" onSubmit={this.handleOnSubmit}>
                        <h2>
                            {"Character " + calculatedId}
                        </h2>
                        <FormField type="text" value={this.state.name} name="name" label="Name" required={true} onChange={this.handleChange} />
                        <FormField name="initiative" value={this.state.initiative || undefined} label="Initiative" required={true} onChange={this.handleChange} type="number" />
                        <FormField name="dex" value={this.state.dex || undefined} label="Dexterity Modifier" type="number" onChange={this.handleChange} />
                        <FormField name="hp" value={this.state.hp || undefined} label="HP" type="number" required={true} onChange={this.handleChange} />
                        <FormField label="Affiliation" name="affiliation">
                            <Select options={[Affiliation.Ally, Affiliation.Enemy, Affiliation.Neutral]} value={this.state.affiliation} onChange={this.handleAffiliationChange} />
                        </FormField>
                        <Button label="Submit" type="submit" icon={<UserAdd />} />
                        <Button label="Delete" icon={<Trash />} onClick={this.props.handleDeleteClick} color="red" hoverIndicator="red" />

                    </Form>
                </Box>

            );

        }
    }
    render() {
        return (
            <>
                {this.handleIsSubmitted()}
            </>
        )
    };
}