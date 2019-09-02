import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Pages/homePage";
import { AboutPage } from "./Pages/aboutPage";
import { ContactPage } from "./Pages/conactPage";
import { ProjectsPage } from "./Pages/projectsPage";

enum PageState {
    Home,
    About,
    Contact,
    Projects,
}
interface IMainPageState {
    page?: JSX.Element;
}

class MainPage extends React.Component<IMainPageState> {
    state: IMainPageState = {
        page: <HomePage />,
    };
    handleHomeClick = () => {
        this.setState({ page: <HomePage /> });
    };
    handleAboutClick = () => {
        this.setState({ page: <AboutPage /> });
    };
    handleContactClick = () => {
        this.setState({ page: <ContactPage /> });
    };
    handleProjectsClick = () => {
        this.setState({ page: <ProjectsPage /> });
    };
    render() {
        return (
            <>
                <NavBar
                    handleHomeClick={this.handleHomeClick}
                    handleAboutClick={this.handleAboutClick}
                    handleContactClick={this.handleContactClick}
                    handleProjectsClick={this.handleProjectsClick}
                />
                {this.state.page}
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
