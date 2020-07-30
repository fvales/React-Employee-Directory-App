import { _getEmployees } from "../../Utils/_DATA";
export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";
export const SORT_EMPLOYEES_ASCENDING = "SORT_EMPLOYEES_ASCENDING";
export const SORT_EMPLOYEES_DESCENDING = "SORT_EMPLOYEES_DESCENDING";
export const SEARCH_EMPLOYEES_BY_NAME = "SEARCH_EMPLOYEES_BY_NAME";

export function receiveEmployees(employees) {
  return { type: RECEIVE_EMPLOYEES, employees };
}

export function sortEmployeesAscending() {
  return { type: SORT_EMPLOYEES_ASCENDING };
}

export function sortEmployeesDescending() {
  return { type: SORT_EMPLOYEES_DESCENDING };
}

export function searchEmployeesByName(name) {
  return { type: SEARCH_EMPLOYEES_BY_NAME, name };
}

export function handleEmployeesData() {
  return dispatch => {
    return _getEmployees().then(employees => {
      dispatch(receiveEmployees(employees));
    });
  };
}