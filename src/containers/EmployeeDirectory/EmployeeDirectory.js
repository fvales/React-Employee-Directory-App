import React, { Component } from "react";
import EmployeeList from "../../components/Employee/EmployeeList/EmployeeList";
import { connect } from "react-redux";
import { handleEmployeesData } from "../../redux/actions/employeesAction";

class EmployeeDirectory extends Component {

    componentDidMount() {
        this.props.dispatch(handleEmployeesData());
    }

    render() {
        return <EmployeeList employeeList={this.props.employees} />;
    }
}

function mapStateToProps({ employees }) {
    return {
        employees
    };
}

export default connect(mapStateToProps)(EmployeeDirectory);