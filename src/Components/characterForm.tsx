import React, { ChangeEvent } from "react";
import Grommet, { Form, FormField, Button, Box } from "grommet";
import { Trash, UserAdd } from "grommet-icons";
import { Character } from "../types";
interface ICharacterFormProps {
    handleDeleteClick: () => void;
    id: number;
}
interface ICharacterFormState {
    name: string;
    initiative: number;
    dex: number;
    hp: number;
}
export class CharacterForm extends React.Component<ICharacterFormProps, ICharacterFormState>{
    state: ICharacterFormState = {
        name: "",
        initiative: 0,
        dex: 0,
        hp: 0

    }
    handleOnSubmit = () => {
        console.log(this.state);
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
    }
    render() {
        return (
            <Box border="all" margin="small" round={true} overflow="hidden" pad="small" alignSelf="start" width="medium">

                <Form name="form" onSubmit={this.handleOnSubmit}>
                    <h1>
                        {"Character " + this.props.id}
                    </h1>
                    <FormField type="text" value={this.state.name} name="name" label="Name" required={true} onChange={this.handleChange} />
                    <FormField name="initiative" label="Initiative" required={true} onChange={this.handleChange}/>
                    <FormField name="dex" label="Dexterity Modifier" type="number" required={true} onChange={this.handleChange}/>
                    <FormField name="hp" label="HP" type="number" required={true} onChange={this.handleChange}/>
                    <Button label="Submit" type="submit" icon={<UserAdd/>}/>
                    <Button label="Delete" icon={<Trash />} onClick={this.props.handleDeleteClick} color="red" hoverIndicator="red" />
                    
                </Form>
            </Box>

        );
    }
}