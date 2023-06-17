const { program } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "get":
      const contact = await contacts.getById(id);
      return console.log(contact);
    case "add":
      const newContact = await contacts.add({ name, email, phone });
      return console.log(newContact);
    case "updatebyId":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
    case "remove":
      const removeContact = await contacts.removeById(id);
      return console.log(removeContact);
    default:
      return console.warn("Unknown action");
  }
};

program
  .option("--action, <type>")
  .option("--id, <type>")
  .option("--name, <type>")
  .option("--email, <type>")
  .option("--phine, <type>");

program.parse();
const options = program.opts();

invokeAction(options);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "05olLMgyVQdWRwgKfg5J6" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
// invokeAction({ action: "updateById", id: "", name: "", email: "", phone: "" });
// invokeAction({ action: "remove", id: "14OpcDUHO2BQJlGhs_Rwj" });
