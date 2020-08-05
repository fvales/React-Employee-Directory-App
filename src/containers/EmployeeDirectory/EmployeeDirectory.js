import React, { Component } from "react";
import EmployeeList from "../../components/Employee/EmployeeList/EmployeeList";
import { connect } from "react-redux";
import { handleEmployeesData } from "../../redux/actions/employeesAction";
import * as employeesActions from "../../redux/actions/employeesAction";
class EmployeeDirectory extends Component {

    state = {
        searchValue: ''
    };

    changeSearchInput = (value) => {
        this.setState({
            searchValue: value
        });
    }

    componentDidMount() {
        this.props.dispatch(handleEmployeesData());
    }

    sortEmployeeList = (type) => {
        switch (type) {
            case "asc":
                this.props.dispatch(employeesActions.sortEmployeesAscending());
                break;
            case "desc":
                this.props.dispatch(employeesActions.sortEmployeesDescending());
                break;
            default:
        }
    }

    searchEmployeeList = () => {
        if (this.state.searchValue !== '') {
            this.props.dispatch(employeesActions.searchEmployeesByName(this.state.searchValue));
        } else {
            this.props.dispatch(handleEmployeesData());
        }
    }

    render() {
        return (
            <>
                <EmployeeList employeeList={this.props.employees} sortEmployeeList={this.sortEmployeeList} searchEmployeeList={this.searchEmployeeList} changeSearchInput={this.changeSearchInput}/>
            </>
        );
    }
}

function mapStateToProps({ employees }) {
    return {
        employees
    };
}

export default connect(mapStateToProps, null)(EmployeeDirectory);