// os module provied operating system information

const os = require('os');

const opsys = os.cpus();
const platform = os.platform();

//free mem
const fmem = os.freemem();
//total meme
const tmem = os.totalmem();
console.log("free memory: ", fmem);
console.log("total memory: ", tmem);

//home dir
console.log(os.homedir());

//platform
console.log(platform);
