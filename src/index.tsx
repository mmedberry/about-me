import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Pages/homePage";
import { AboutPage } from "./Pages/aboutPage";
import { ContactPage } from "./Pages/conactPage";
import { ProjectsPage } from "./Pages/projectsPage";
import { PageState } from "./types";

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
    render() {
        return (
            <>
                <NavBar
                    handleHomeClick={this.handleHomeClick}
                    handleAboutClick={this.handleAboutClick}
                    handleContactClick={this.handleContactClick}
                    handleProjectsClick={this.handleProjectsClick}
                    pageState={this.state.pageState}
                />
                {this.state.page}
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
