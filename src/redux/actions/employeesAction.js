import { _getEmployees } from "../../Utils/_DATA";
export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";

export function receiveEmployees(employees) {
  return { type: RECEIVE_EMPLOYEES, employees };
}

export function handleEmployeesData() {
  return dispatch => {
    return _getEmployees().then(employees => {
      dispatch(receiveEmployees(employees));
    });
  };
}