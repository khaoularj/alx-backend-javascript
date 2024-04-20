interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
    }

const student1: Student = {
    firstName: "Ahmed",
    lastName: "Nasser",
    age: 19,
    location: "Marrakech"
};

const student2: Student = {
    firstName: "Sara",
    lastName: "Smith",
    age: 28,
    location: "Paris"
};


const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = table.insertRow();
const firstNameHeader = headerRow.insertCell();
firstNameHeader.textContent = 'First Name';
const locationHeader = headerRow.insertCell();
locationHeader.textContent = 'Location';

studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.textContent = student.firstName;
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
