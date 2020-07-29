import React, { Component } from "react";
import EmployeeList from "../../components/Employee/EmployeeList/EmployeeList";
import { connect } from "react-redux";
import { handleEmployeesData } from "../../redux/actions/employeesAction";

class EmployeeDirectory extends Component {

    componentDidMount() {
        this.props.dispatch(handleEmployeesData());
    }

    sortEmployeeList = (list) => {
        // list.sort(function (a, b) { return a - b });
        console.log (Array.isArray(list));
    }

    render() {
        return (
            <>
                <button onClick={() => this.sortEmployeeList(this.props.employees)}>Sort Employee List</button>
                <EmployeeList employeeList={this.props.employees} />
            </>
        );
    }
}

function mapStateToProps({ employees }) {
    return {
        employees
    };
}

export default connect(mapStateToProps)(EmployeeDirectory);