function info(name) {
  console.log(`${name}, bu ${this.role}`);
}

const user = { role: "Admin" };

// 1
info.call(user, "Aziz");

// 2
info.call({ role: "User" }, "Ali");

// 3
info.call({ role: "meneger" }, "Lola");

// 4
info.call({ role: "teacher" }, "Nodir");

// 5
info.call({ role: "adminsrator" }, "Dilshod");

// --------------------------------------------------------------------

function greet(name, age) {
  console.log(`Salom, ${name}. Siz ${age} yoshdasiz. Men ${this.who}.`);
}

const bot = { who: "dosting" };

// 1
greet.apply(bot, ["Azizjon", 16]);

// 2
greet.apply({ who: "Bot" }, ["Ali", 20]);

// 3
greet.apply({ who: "AI Assistant" }, ["Lola", 25]);

// 4
greet.apply({ who: "support teacher" }, ["Nodira", 18]);

// 5
greet.apply({ who: "web developer" }, ["Jasur", 30]);
