const chalk = require("chalk");
const { string, argv } = require("yargs");
const yargs = require("yargs");
const note = require("./note");

//customizing arg version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "add a new node",
  builder: {
    title: {
      describe: " note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "notes body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    t: {
      demandOption: true,
      type: "string",
      describe: "title of note",
    },
  },
  handler: () => {
    note.removeNotes(argv.t);
  },
});
yargs.command({
  command: "list",
  describe: "List the note",
  handler: () => {
    note.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "read the note",
  handler: () => {
    console.log("reading the node");
  },
});

//add, read , remove ,list

yargs.parse();
