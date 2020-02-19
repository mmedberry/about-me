import React from "react";
import { Box, Button, Grommet } from "grommet";
import {
    Home,
    Code,
    ContactInfo,
    RestroomMen,
    DocumentText, Gamepad
} from "grommet-icons";
import { PageState } from "../types";

interface INavBarProps {
    handleHomeClick: () => void;
    handleAboutClick: () => void;
    handleProjectsClick: () => void;
    handleContactClick: () => void;
    handleEtchASketchClick: () => void;
    handleReflectionsClick: () => void;
    handleCombatManagerClick: ()=> void;
    pageState?: PageState;
}
interface INavBarState {
    page: string;
}
export class NavBar extends React.Component<INavBarProps> {
    render() {
        return (
            <Grommet>
                <Box direction="row" background="brand" round>
                    <Button
                        margin="small"
                        label="Home"
                        icon={<Home />}
                        primary={this.props.pageState === PageState.Home}
                        onClick={this.props.handleHomeClick}
                    />
                    <Button
                        margin="small"
                        label="About"
                        primary={this.props.pageState === PageState.About}
                        icon={<RestroomMen />}
                        onClick={this.props.handleAboutClick}
                    />
                    <Button
                        margin="small"
                        primary={this.props.pageState === PageState.Projects}
                        label="Projects"
                        icon={<Code />}
                        onClick={this.props.handleProjectsClick}
                    />
                    <Button
                        margin="small"
                        primary={this.props.pageState === PageState.Reflections}
                        label="Reflections"
                        icon={<DocumentText />}
                        onClick={this.props.handleReflectionsClick}
                    />
                    <Button
                        margin="small"
                        primary={this.props.pageState === PageState.Contact}
                        label="Contact"
                        icon={<ContactInfo />}
                        onClick={this.props.handleContactClick}
                    />
                    <Button
                        margin="small"
                        primary={this.props.pageState === PageState.CombatManager}
                        label="Combat Manager"
                        icon={<Gamepad />}
                        onClick={this.props.handleCombatManagerClick}
                    />
                    {/* <Button
                        margin="small"
                        primary={this.props.pageState === PageState.EtchASketch}
                        label="Game"
                        icon={<Android />}
                        onClick={this.props.handleEtchASketchClick}
                    /> */}
                </Box>
            </Grommet>
        );
    }
}
