const baseURL = "http://localhost:8088"

const API = {
    getEmployeesWithData: () => {
        return fetch(`${baseURL}/employees?_expand=computer&_expand=department`).then(response => response.json());
    }
}

export default API;