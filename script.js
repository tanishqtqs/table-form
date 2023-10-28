const form = document.getElementById("tableForm");
const responseDiv = document.getElementById("response");
const dataTable = document.getElementById("dataTable").getElementsByTagName('tbody')[0];
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (firstName && lastName && age && number && email && address) {
        const newRow = dataTable.insertRow(dataTable.rows.length);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = age;
        cell4.innerHTML = number;
        cell5.innerHTML = email;
        cell6.innerHTML = address;
        
        responseDiv.innerHTML = "Form submitted successfully!";
        form.reset();
    } else {
        responseDiv.innerHTML = "Please fill in all form fields.";
    }
});

resetBtn.addEventListener("click", function () {
    form.reset();
});

window.addEventListener("load", function () {
    dataTable.innerHTML = '';
});
