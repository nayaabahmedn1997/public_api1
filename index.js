// Task 1: Fetch and Display Users
const fetchUsers = async () => {
    try {
        const BASE_URL = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(BASE_URL);
        const users = await response.json();
        const userTableBody = document.getElementById("userTableBody");

        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>
            `;
            userTableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
});
