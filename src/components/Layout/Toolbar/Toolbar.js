import React from "react";
import classes from "./Toolbar.module.css";
import Button from 'react-bootstrap/Button'

const toolbar = (props) => {

    let goToPrevPage = () => {
        props.historyObj.goBack();
    }

    return (
        <div className={`${classes.ToolbarContainer} mb-3`}>
            {
                props.historyObj.location.pathname !== '/'?<Button variant="link" onClick={goToPrevPage}>&#x2B05;&nbsp;Back</Button>:null
            }
            <h3>{props.title}</h3>
        </div>
    );
}
export default toolbar;