const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    console.log('Files to delete:');
    const logFiles = fs.readdirSync(logsDir);
    logFiles.forEach((file) => {
        const filePath = path.join(logsDir, file);
        console.log(file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file...${file}`);
    });

    fs.rmdirSync(logsDir);
    console.log(`Deleted directory...${logsDir}`);
} else {
    console.log('Logs directory does not exist.');
}
