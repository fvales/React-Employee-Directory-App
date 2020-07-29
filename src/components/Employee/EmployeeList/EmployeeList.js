import React from "react";
import { Link } from "react-router-dom";
import classes from "./EmployeeList.module.css";

const employeeList = (props) => {
    return (
        <div>
            <h3>List of all employees</h3>
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
                                    <span className="name">{props.employeeList[emp_id].id}</span>
                                    <span className="time">{props.employeeList[emp_id].firstName} {' '}  {props.employeeList[emp_id].lastName}</span>
                                </div>
                            </Link>
                        </li>
                    )) : <div>No records found</div>
                }
            </ul>
        </div>
    );
}

export default employeeList;