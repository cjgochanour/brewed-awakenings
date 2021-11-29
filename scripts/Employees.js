import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (event) => {
    const personClicked = event.target;
    if (personClicked.id.startsWith("employee")) {
        const [, personId] = personClicked.id.split("--");
        let howMany = 0;

        for (const order of orders) {
            if (order.employeeId === parseInt(personId)) {
                howMany += 1;
            }
        }
        if (howMany === 1) {
            window.alert(`${personClicked.innerText} sold ${howMany} product`);
        } else {
            window.alert(`${personClicked.innerText} sold ${howMany} products`);
        }
    }
});

export const Employees = () => {
    let html = "<ul>";

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`;
    }

    html += "</ul>";

    return html;
};
