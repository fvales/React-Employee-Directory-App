export default function employeesReducer(state = [], action) {
  switch (action.type) {
    case "RECEIVE_EMPLOYEES":
      return { ...state, ...action.employees };
    case "SORT_EMPLOYEES_ASCENDING":
      let emp_list = state;
      console.log(emp_list);
      return { ...state, ...action.employees };
    case "SORT_EMPLOYEES_DESCENDING":
      console.log('Desc');
      return { ...state, ...action.employees };
    case "SEARCH_EMPLOYEES_BY_NAME":
      console.log(action.name);
      return { ...state, ...action.employees };
    default:
      return state;
  }
}