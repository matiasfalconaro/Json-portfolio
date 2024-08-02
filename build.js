const fs = require('fs');
const path = require('path');

const buildTimestamp = new Date().toISOString();
const envContent = `LAST_BUILD_TIMESTAMP=${buildTimestamp}\n`;

fs.writeFileSync(path.join(__dirname, '.env'), envContent);

console.log(`Build timestamp set to: ${buildTimestamp}`);
