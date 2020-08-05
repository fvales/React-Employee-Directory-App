export default function employeesReducer(state = [], action) {
  switch (action.type) {
    case "RECEIVE_EMPLOYEES":
      return { ...state, ...action.employees };
    case "SORT_EMPLOYEES_ASCENDING":
      let list = state;
      let sortedArrayAsc = Object.keys(list).sort().reduce((r, k) => (r[k] = list[k], r), {});
      return Object.assign({}, sortedArrayAsc);
    case "SORT_EMPLOYEES_DESCENDING":
      let empList = state;
      let sortedArrayDesc = Object.keys(empList).sort((a,b) => b-a).reduce((r, k) => (r[k] = empList[k], r), {});
      return Object.assign({}, sortedArrayDesc);
    case "SEARCH_EMPLOYEES_BY_NAME":
      let searchValue = action.name;
      let emp_list = state;
      let tempArray = [];
      Object.keys(emp_list).map((emp_id) => {
        if (emp_list[emp_id].firstName.toLowerCase() === searchValue.toLowerCase()) {
          tempArray.push(emp_id);
        }
      });
      let result =  (tempArray.reduce((r, k) => (r[k] = emp_list[k], r), {}));
      return Object.assign({}, result);
    default:
      return state;
  }
}