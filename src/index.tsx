import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Pages/homePage";
import { AboutPage } from "./Pages/aboutPage";
import { ContactPage } from "./Pages/conactPage";
import { ProjectsPage } from "./Pages/projectsPage";
import { PageState, RouteInfo } from "./types";
import { EtchASketch } from "./Pages/etchASketch";
import { Crossword } from "./Components/crossWord";
import { ReflectionsPage } from "./Pages/reflectionsPage";
import { CombatManagerPage } from "./Pages/combatManagerPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NoMatchPage } from "./Pages/noMatchPage";

interface IMainPageState {
    page?: JSX.Element;
    pageState?: PageState;
}
const routeInfo: Array<RouteInfo> = [
    new RouteInfo("Home", "/"),
    new RouteInfo("Projects", "/projects"),
    new RouteInfo("About", "/about"),
    new RouteInfo("Contact", "/contact"),
    new RouteInfo("Combat Manager", "/combat-manager"),
];
class MainPage extends React.Component<IMainPageState> {
    state: IMainPageState = {
        page: <HomePage />,
    };

    render() {
        return (
            <>
                <BrowserRouter>
                    <NavBar routeInfo={routeInfo} />
                    <Switch>
                        <Route exact path={"/"} component={HomePage} />
                        <Route path={"/projects"} component={ProjectsPage} />
                        <Route path={"/about"} component={AboutPage} />
                        <Route path={"/contact"} component={ContactPage} />
                        <Route
                            path={"/combat-manager"}
                            component={CombatManagerPage}
                        />
                        <Route component={NoMatchPage} />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
