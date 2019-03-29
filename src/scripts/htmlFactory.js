const htmlFactory = {

    createHtmlElement: (element, text, id, className) => {
        const newElement = document.createElement(element);
        if(text){
           newElement.textContent = text;
        }
        if(id){
            newElement.id = id;
        }
        if(className){
            newElement.setAttribute("class", className);
        }
        return newElement;
    },

    createHtmlForEmployee: (employeeObj) => {
        const employeeFrag = document.createDocumentFragment();
        const employeeArticle = employeeFrag.appendChild(htmlFactory.createHtmlElement("article", undefined,`employee-article--${employeeObj.id}`, "employee"));
        const headerEl = employeeArticle.appendChild(htmlFactory.createHtmlElement("header", undefined, `employee-header--${employeeObj.id}`));
        headerEl.appendChild(htmlFactory.createHtmlElement("h1", employeeObj.name));
        employeeArticle.appendChild(htmlFactory.createHtmlElement("section",`Works in the ${employeeObj.department.branch} department.`, `employee-department-section--${employeeObj.id}`, "employee_department"));
        employeeArticle.appendChild(htmlFactory.createHtmlElement("section", `Currently using a ${employeeObj.computer.brand} computer.`));
        employeeFrag.appendChild(employeeArticle);

        return employeeFrag;
    }
}

export default htmlFactory;