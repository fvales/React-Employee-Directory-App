import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const hobby = (props) => {
    return (<div className="mt-5">
        {
            props.hobbies.length > 0 ? <ListGroup>
                {
                    props.hobbies.map((hobby, index) =>
                        <ListGroup.Item key={index}>{hobby}</ListGroup.Item>)
                }
            </ListGroup> : <div>No data to show</div>
        }
    </div>);
}

export default hobby;