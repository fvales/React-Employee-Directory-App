import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./Hobby.module.css";

const hobby = (props) => {
    return (<div className="mt-5">
        {
            props.hobbies.length > 0 ? <ListGroup>
                {
                    props.hobbies.map((hobby, index) =>
                        <ListGroup.Item key={index}>{hobby}</ListGroup.Item>)
                }
            </ListGroup> : <div className="DataNotFound">No data to show</div>
        }
    </div>);
}

export default hobby;