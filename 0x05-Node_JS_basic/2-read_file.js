const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file
    const data = fs.readFileSync(path, 'utf-8');

    // Split data by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Extract the header and lines separately
    const header = lines[0].split(',');

    // Find the indices of 'firstname' and 'field'
    const indexFN = header.findIndex((ele) => ele === 'firstname');
    const indexFD = header.findIndex((ele) => ele === 'field');

    // Validate that indices are found
    if (indexFN === -1 || indexFD === -1) {
      throw new Error('Invalid CSV format');
    }

    // Initialize dictionaries for counting fields and storing student names
    const fields = {};
    const students = {};

    // Process each line (excluding the header)
    lines.slice(1).forEach((line) => {
      const list = line.split(',');

      // Ensure the line has the correct number of columns
      if (list.length !== header.length) {
        return;
      }

      // Increment the field count and add the student name to the list
      const field = list[indexFD];
      const firstName = list[indexFN];

      if (!fields[field]) fields[field] = 0;
      fields[field] += 1;

      if (!students[field]) students[field] = [];
      students[field].push(firstName);
    });

    // Log the total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Log the number of students and list of names for each field
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
