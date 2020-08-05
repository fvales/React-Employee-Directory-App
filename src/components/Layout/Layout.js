import React from "react";
import classes from "./Layout.module.css";
import Navbar from 'react-bootstrap/Navbar';

const layout = (props) => {

    return (
    <div className={classes.Container}>
        <div className={classes.Strip}>

        </div>
        {/* <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Employee Directory App</Navbar.Brand>
        </Navbar> */}
        <main className={classes.content}>
            {props.children}
        </main>
    </div>);
}

export default layout; 