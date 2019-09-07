const fs = require('fs');
const path = require('path');

const loadGQLFile = filename => {
  const filePath = path.join(__dirname, '../graphql', filename);
  return fs.readFileSync(filePath, 'utf-8');
};

module.exports = loadGQLFile;
