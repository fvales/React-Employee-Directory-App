import React from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./EmployeeList.module.css";
import Toolbar from "../../Layout/Toolbar/Toolbar";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const employeeList = (props) => {
    // console.log(props);
    return (
        <div>
            <Toolbar title="List of all employees" historyObj={props.history} />
            <div className={classes.FunctionToolbar}>
                <Button variant="dark mr-4" onClick={() => props.sortEmployeeList("asc")}>Asc</Button>
                <Button variant="dark mr-4" onClick={() => props.sortEmployeeList("desc")}>Desc</Button>
                <InputGroup className="">
                    <FormControl
                        placeholder="Search employee by name"
                        aria-label="Search employee by name"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => props.searchEmployeeList()}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <ul className={classes.EmployeeListContainer}>
                {
                    props.employeeList !== undefined ?
                        Object.keys(props.employeeList).map(emp_id => (
                            <li key={emp_id} className={`${classes.EmployeeCard} border`}>
                                <Link to={`/employees/${emp_id}`} className={classes.EmployeeContainer}>
                                    <div className={classes.Avatar}>
                                        <img src={props.employeeList[emp_id].avatarURL} alt={`avatar of ${props.employeeList[emp_id].firstName}`} />
                                    </div>
                                    <div className={classes.EmployeeInfo}>
                                        <p>
                                            <strong>Employee Id:</strong> {props.employeeList[emp_id].id}
                                        </p>
                                        <p>
                                            <strong>Employee Name:</strong> {props.employeeList[emp_id].firstName} {' '}  {props.employeeList[emp_id].lastName}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        )) : <div>No records found</div>
                }
            </ul>
        </div>
    );
}

export default withRouter(employeeList);