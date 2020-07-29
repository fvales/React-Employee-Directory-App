import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const project = (props) => {
    return (<div className="mt-5">
        {
            props.projects.length > 0 ? <ListGroup>
                {
                    Object.keys(props.projects).map((project_id, index) => {
                        return <ListGroup.Item key={index}>
                            <strong>Project Id:</strong> {project_id}
                            <div><strong>Responsibilities:</strong></div>
                            <ul>
                                {

                                    props.projects[project_id].responsibilities.map((resp, index) => {
                                        return <li key={index}>{resp}</li>
                                    })
                                }
                            </ul>
                        </ListGroup.Item>
                    })
                }
            </ListGroup> : <div>No data to show</div>
        }
    </div>);
}

export default project;