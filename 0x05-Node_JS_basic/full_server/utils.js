const fs = require('fs');

module.exports = function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      }

      const lines = data.split('\n').slice(1, -1);
      const header = data.split('\n')[0].split(',');

      const firstnameIndex = header.indexOf('firstname');
      const fieldIndex = header.indexOf('field');

      const fieldCounts = {};
      const fieldStudents = {};
      const result = {};

      lines.forEach((line) => {
        const columns = line.split(',');
        const field = columns[fieldIndex];
        const firstname = columns[firstnameIndex];

        if (!fieldCounts[field]) fieldCounts[field] = 0;
        fieldCounts[field] += 1;

        if (!fieldStudents[field]) fieldStudents[field] = [];
        fieldStudents[field].push(firstname);
      });

      Object.keys(fieldCounts).forEach((field) => {
        result[field] = {
          students: `List: ${fieldStudents[field].join(', ')}`,
          number: fieldCounts[field],
        };
      });

      return resolve(result);
    });
  });
};
