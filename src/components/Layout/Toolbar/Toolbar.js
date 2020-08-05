import React from "react";
import classes from "./Toolbar.module.css";
import Button from 'react-bootstrap/Button'

const toolbar = (props) => {

    let goToPrevPage = () => {
        props.historyObj.goBack();
    }

    return (
        <div className={`${classes.ToolbarContainer} text-center`}>
            {
                props.historyObj.location.pathname !== '/'?<Button className="p-0 float-left" variant="link" onClick={goToPrevPage}><i className="fa fa-chevron-left"></i></Button>:null
            }
            <span>{props.title}</span>
        </div>
    );
}
export default toolbar;