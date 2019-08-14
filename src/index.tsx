import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { NavBar } from "./Components/navBar";
import { HomePage } from "./Components/homePage";

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
        if (this.state.page) {
            this.setState({ page: undefined });
        } else {
            this.setState({ page: <HomePage /> });
        }
    };
    render() {
        return (
            <>
                <NavBar
                    handleHomeClick={this.handleHomeClick}
                    handleAboutClick={() => {}}
                    handleContactClick={() => {}}
                    handleProjectsClick={() => {}}
                />
                {this.state.page}
            </>
        );
    }
}
ReactDOM.render(<MainPage />, document.getElementById("root"));
