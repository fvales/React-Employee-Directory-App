import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const info = (props) => {
    return (<div className="mt-5">
        {
            props.info.length > 0 ? <ListGroup>
                {
                    props.info.map((hobby, index) =>
                        <ListGroup.Item key={index}>{hobby}</ListGroup.Item>)
                }
            </ListGroup> : <div className="DataNotFound">No data to show</div>
        }
    </div>);
}

export default info;