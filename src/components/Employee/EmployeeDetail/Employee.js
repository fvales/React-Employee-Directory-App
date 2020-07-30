import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Employee.module.css";
import { Link } from "react-router-dom";
import Toolbar from "../../Layout/Toolbar/Toolbar";
class Employee extends Component {

    render() {
        return (
            <div>
                <Toolbar title="Employee Details" historyObj={this.props.history}/>
                <div>
                    <span>
                        <strong>Employee Id:</strong> {this.props.employee ? this.props.employee.id : '-'}
                    </span>
                    <span className="float-right">
                        <Link to={
                            {
                                pathname: "/employees/".concat(this.props.employee?this.props.employee.id:'-').concat("/resume") ,
                                employee: this.props.employee
                            }
                        }>Flip to resume</Link>
                    </span>
                </div>
                <div className={classes.EmployeeDetailsContainer}>
                    <div className={classes.Avatar}>
                        <img src={this.props.employee ? this.props.employee.avatarURL : ''} alt={`avatar of ${this.props.employee ? this.props.employee.firstName : '-'}`} />
                    </div>
                    <div className={classes.EmployeeInfoContainer}>
                        <ul>
                            <li>
                                <strong>First Name:</strong> {this.props.employee ? this.props.employee.firstName : '-'}
                            </li>
                            <li>
                                <strong>Last Name:</strong> {this.props.employee ? this.props.employee.lastName : '-'}
                            </li>
                            <li>
                                <strong>Phone:</strong> {this.props.employee ? this.props.employee.phone : '-'}
                            </li>
                            <li>
                                <strong>Address:</strong> {this.props.employee ? this.props.employee.address : '-'}
                            </li>
                            <li>
                                <strong>Postal Code:</strong> {this.props.employee ? this.props.employee.postalCode : '-'}
                            </li>
                            <li>
                                <strong>City:</strong> {this.props.employee ? this.props.employee.city : '-'}
                            </li>
                            <li>
                                <strong>Country:</strong> {this.props.employee ? this.props.employee.country : '-'}
                            </li>
                        </ul>
                    </div>
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