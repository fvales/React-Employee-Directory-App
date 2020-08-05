import React from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./EmployeeList.module.css";
import Toolbar from "../../Layout/Toolbar/Toolbar";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const employeeList = (props) => {
    return (
        <>
            <Toolbar title="List of all employees" historyObj={props.history} />
            <div className="m-3">
                <div className={` ${classes.FunctionToolbar} mb-4`}>
                    <Button variant="dark mr-4" onClick={() => props.sortEmployeeList("asc")}>Asc</Button>
                    <Button variant="dark mr-4" onClick={() => props.sortEmployeeList("desc")}>Desc</Button>
                    <InputGroup className="">
                        <FormControl
                            placeholder="Search employee by name"
                            aria-label="Search employee by name"
                            aria-describedby="basic-addon2"
                            onChange={(event) => props.changeSearchInput(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => props.searchEmployeeList()}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <p className={classes.EmployeeListHeader}>
                        List of all employees
                </p>
                <ul className={classes.EmployeeListContainer}>
                    {
                        props.employeeList !== undefined ?
                            Object.keys(props.employeeList).map(emp_id => (
                                <li key={emp_id} className={`${classes.EmployeeCard} ${classes.backgroundWhite}`}>
                                    <Link to={`/employees/${emp_id}`} className={classes.EmployeeContainer}>
                                        <div className={classes.EmployeeInfo}>
                                            <span>{props.employeeList[emp_id].firstName} {' '}  {props.employeeList[emp_id].lastName}</span>
                                            <i className="fa fa-chevron-right float-right"></i>
                                        </div>
                                    </Link>
                                </li>
                            )) : <div>No records found</div>
                    }
                </ul>
            </div>
        </>
    );
}

export default withRouter(employeeList);