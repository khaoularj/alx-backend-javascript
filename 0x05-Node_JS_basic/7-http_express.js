const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const indexFN = header.findIndex((ele) => ele === 'firstname');
      const indexFD = header.findIndex((ele) => ele === 'field');
      const fields = {};
      const students = {};
      const total = {};

      lines.forEach((line) => {
        const list = line.split(',');
        if (!fields[list[indexFD]]) fields[list[indexFD]] = 0;
        fields[list[indexFD]] += 1;
        if (!students[list[indexFD]]) students[list[indexFD]] = '';
        students[list[indexFD]] += students[list[indexFD]] ? `, ${list[indexFN]}` : list[indexFN];
      });

      total.numberStudents = `Number of students: ${lines.length}\n`;
      total.studentsList = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          total.studentsList.push(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }
      return resolve(total);
    });
  });
}
const app = express();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.studentsList.join('\n'));
    })
    .catch((err) => {
      res.end(err.message);
    });
});
app.listen(port);

module.exports = app;
