const cp = require("child_process");
const { stdout, stderr } = require("process");

progs = {
  remove: "rm",
};

const child = cp.exec(progs.remove + " -r public", (error, stdout, stderr) => {
  if (error) {
    console.log(
      `Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`
    );
  } else {
    console.log(stdout);
  }
});
