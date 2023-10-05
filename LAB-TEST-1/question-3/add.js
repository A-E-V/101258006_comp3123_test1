const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

process.chdir(logsDir);

console.log('Created the following log files:');
Array.from({ length: 10 }, (_, i) => `log${i}.txt`)
    .forEach((logFileName) => {
        console.log(logFileName);
        fs.writeFileSync(logFileName, `This is log file ${logFileName.slice(3, 4)}`);
    });