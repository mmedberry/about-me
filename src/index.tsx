import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Pages/homePage";
import { AboutPage } from "./Pages/aboutPage";

enum PageState {
    Home,
    About,
    Contact,
    Projects,
}
interface IMainPageState {
    pageState?: PageState;
    page?: JSX.Element;
}

class MainPage extends React.Component<IMainPageState> {
    state: IMainPageState = {
        pageState: PageState.Home,
        page: <HomePage />,
    };
    handleHomeClick = () => {
        this.setState({ page: <HomePage /> });
    };
    handleAboutClick = () => {
        this.setState({ page: <AboutPage /> });
    };
    render() {
        return (
            <>
                <NavBar
                    handleHomeClick={this.handleHomeClick}
                    handleAboutClick={this.handleAboutClick}
                    handleContactClick={() => {}}
                    handleProjectsClick={() => {}}
                />
                {this.state.page}
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
