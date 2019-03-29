import API from "./data"
import DOM from "./domManager"


API.getEmployeesWithData().then(employeeArray => DOM.appendEmployeesToDom(employeeArray));

