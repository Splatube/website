const fs = require('fs');

const files = fs.readdirSync('./jen')

fs.writeFileSync('./jen/list.txt', JSON.stringify(files));