const cp = require("child_process");

const get_item = [{ name: "chichi" }, { name: "nedu" }];

const data = JSON.stringify(get_item);

const fork = cp.fork("test.js", [data], { cwd: "../modules" });

fork.on("exit", () => {
  console.log("child process successfully exited");
});

fork.on("error", (err) => {
  console.log(
    `Error: \nName: ${err.name}\nMessage: ${err.message}\nStack: ${err.stack}`
  );
});

console.log("starting!!!");
