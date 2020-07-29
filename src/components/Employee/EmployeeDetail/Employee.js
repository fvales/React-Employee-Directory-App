import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Employee.module.css";

class Employee extends Component {

    render() {
        return (
            <div>
                <h3>Employee Details</h3>
                <div className={classes.EmployeeDetailsContainer}>
                    <ul>
                        <li>
                            <span>First Name:</span>
                            <span>{this.props.employee ? this.props.employee.firstName : '-'}</span>
                        </li>
                        <li>
                            <span>Last Name:</span>
                            <span>{this.props.employee ? this.props.employee.lastName : '-'}</span>
                        </li>
                        <li>
                            <span>Phone:</span>
                            <span>{this.props.employee ? this.props.employee.phone : '-'}</span>
                        </li>
                        <li>
                            <span>Address:</span>
                            <span>{this.props.employee ? this.props.employee.address : '-'}</span>
                        </li>
                        <li>
                            <span>Postal Code:</span>
                            <span>{this.props.employee ? this.props.employee.postalCode : '-'}</span>
                        </li>
                        <li>
                            <span>City:</span>
                            <span>{this.props.employee ? this.props.employee.city : '-'}</span>
                        </li>
                        <li>
                            <span>Country:</span>
                            <span>{this.props.employee ? this.props.employee.country : '-'}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ employees }, { match }) {
    const employee_id = match.params.employee_id;
    const employee = employees[employee_id];
    return {
        employee
    };
}

export default connect(mapStateToProps)(Employee);