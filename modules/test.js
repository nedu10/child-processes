var data = process.argv[2];

const get_item = JSON.parse(data);

console.log("showing recieved data >> ", get_item[1]);
