import htmlFactory from "./htmlFactory"

const DOM = {
    appendEmployeesToDom: (employeeArray) => {
        const displayContainer = document.querySelector("#display-container");
        employeeArray.forEach(employee => displayContainer.appendChild(htmlFactory.createHtmlForEmployee(employee)));

        return displayContainer;
    }
}

export default DOM;