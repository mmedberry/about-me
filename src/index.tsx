import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Pages/homePage";
import { AboutPage } from "./Pages/aboutPage";
import { ContactPage } from "./Pages/conactPage";
import { ProjectsPage } from "./Pages/projectsPage";
import { PageState } from "./types";
import { EtchASketch } from "./Pages/etchASketch";
import { Crossword } from "./Components/crossWord";
import { ReflectionsPage } from "./Pages/reflectionsPage";

interface IMainPageState {
    page?: JSX.Element;
    pageState?: PageState;
}

class MainPage extends React.Component<IMainPageState> {
    state: IMainPageState = {
        page: <HomePage />,
    };
    handleHomeClick = () => {
        this.setState({ page: <HomePage />, pageState: PageState.Home });
        console.log(this.props.pageState);
    };
    handleAboutClick = () => {
        this.setState({ page: <AboutPage />, pageState: PageState.About });
    };
    handleContactClick = () => {
        this.setState({ page: <ContactPage />, pageState: PageState.Contact });
    };
    handleProjectsClick = () => {
        this.setState({
            page: <ProjectsPage />,
            pageState: PageState.Projects,
        });
    };
    handleEtchASketchClick = () => {
        this.setState({
            page: <EtchASketch />,
            pageState: PageState.EtchASketch,
        });
    };
    handleReflectionsClick = () => {
        this.setState({
            page: <ReflectionsPage />,
            pageState: PageState.Reflections,
        });
    };

    render() {
        return (
            <>
                <NavBar
                    handleHomeClick={this.handleHomeClick}
                    handleAboutClick={this.handleAboutClick}
                    handleContactClick={this.handleContactClick}
                    handleProjectsClick={this.handleProjectsClick}
                    handleEtchASketchClick={this.handleEtchASketchClick}
                    handleReflectionsClick={this.handleReflectionsClick}
                    pageState={this.state.pageState}
                />
                {/* <Crossword></Crossword> */}
                {this.state.page}
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
