import React from "react";
import { Box, Button, Grommet } from "grommet";
import { RouteInfo } from "../types";
import {Link} from "react-router-dom";

interface INavBarProps {
    routeInfo: Array<RouteInfo>;
}
interface INavBarState {
    page: string;
}
export class NavBar extends React.Component<INavBarProps> {
    render() {
        return (
            <Grommet>
                <Box direction="row" background="brand" round>
                    {this.props.routeInfo.map((route: RouteInfo)=>(
                        <Link to={route.route}>

                        <Button
                        margin="small"
                        label={route.name}
                        />
                        </Link>
                    ))}
                </Box>
            </Grommet>
        );
    }
}
