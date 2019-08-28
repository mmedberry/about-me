import React from "react";
import { Box, Button } from "grommet";
import { Home, Code, ContactInfo, RestroomMen } from "grommet-icons";

interface INavBarProps {
    handleHomeClick: () => void;
    handleAboutClick: () => void;
    handleProjectsClick: () => void;
    handleContactClick: () => void;
}
export class NavBar extends React.Component<INavBarProps> {
    render() {
        return (
            <Box direction="row">
                <Button
                    label="Home"
                    icon={<Home />}
                    primary
                    onClick={this.props.handleHomeClick}
                />
                <Button
                    label="About"
                    primary
                    icon={<RestroomMen />}
                    onClick={this.props.handleAboutClick}
                />
                <Button
                    label="Projects"
                    primary
                    icon={<Code />}
                    onClick={this.props.handleProjectsClick}
                />
                <Button
                    label="Contact"
                    primary
                    icon={<ContactInfo />}
                    onClick={this.props.handleContactClick}
                />
            </Box>
        );
    }
}
