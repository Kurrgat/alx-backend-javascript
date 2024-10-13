// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 23,
    location: "Los Angeles"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render the students in a table using Vanilla JS
const body: HTMLBodyElement = document.body as HTMLBodyElement; // Cast to HTMLBodyElement
const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    
    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    
    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);
