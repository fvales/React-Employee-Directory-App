import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Hobby from "../MoreInfo/Hobby/Hobby";
import Info from "../MoreInfo/Info/Info";
import Note from "../MoreInfo/Notes/Note";
import Project from "../MoreInfo/Projects/Project";

const resume = (props) => {
    // let { props.location.employee } = props.location;

    return (
        <>
            <h3>Resume of {props.location.employee?props.location.employee.firstName:'-'} {} {props.location.employee?props.location.employee.lastName:'-'}</h3>
            <Tabs defaultActiveKey="info" id="uncontrolled-tab" transition={false}>
                <Tab eventKey="info" title="Info">
                    <Info info={props.location.employee?props.location.employee.info: []}/>
                </Tab>
                <Tab eventKey="notes" title="Notes">
                    <Note notes={props.location.employee?props.location.employee.notes:[]} />
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    <Project projects={props.location.employee?props.location.employee.projects:{}} />
                </Tab>
                <Tab eventKey="hobbies" title="Hobbies">
                    <Hobby hobbies={props.location.employee?props.location.employee.hobbies:[]} />
                </Tab>
            </Tabs>
        </>
    );
}

export default resume;