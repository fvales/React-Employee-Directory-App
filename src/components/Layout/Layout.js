import React from "react";
import classes from "./Layout.css";
import Header from "./Header/Header";

const layout = (props) => {
    return (<Aux>
        <Header>Employee Directory</Header>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>);
}

export default layout; 