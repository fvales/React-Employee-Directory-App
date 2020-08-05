import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const note = (props) => {
    return (<div className="mt-5">
        {
            props.notes.length > 0 ? <ListGroup>
                {
                    props.notes.map((hobby, index) =>
                        <ListGroup.Item key={index}>{hobby}</ListGroup.Item>)
                }
            </ListGroup> : <div className="DataNotFound">No data to show</div>
        }

    </div>);
}

export default note;