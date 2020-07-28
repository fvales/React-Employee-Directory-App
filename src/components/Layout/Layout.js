import React from "react";
import classes from "./Layout.module.css";
import Header from "./Header/Header";

const layout = (props) => {
    return (<>
        <Header>Employee Directory App</Header>
        <main className={classes.content}>
            {props.children}
        </main>
    </>);
}

export default layout; 