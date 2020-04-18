import React from "react";
import { Text } from "grommet";
import { HomePage } from "./homePage";
import { AboutPage } from "./aboutPage";
import { ProjectsPage } from "./projectsPage";
import { ContactPage } from "./conactPage";
import { CombatManagerPage } from "./combatManagerPage";

export class NoMatchPage extends React.Component {
    render() {
        switch (window.location.pathname) {
            case "/":
                return <HomePage />;
            case "/about-me":
                return <HomePage />;
            case "/about":
                return <AboutPage />;
            case "/projects":
                return <ProjectsPage />;
            case "/contact":
                return <ContactPage />;
            case "/combat-manager":
                return <CombatManagerPage />;
            default:
                return (
                    <h1>
                        No match for <code>{window.location.pathname}</code>
                    </h1>
                );
        }
    }
}
