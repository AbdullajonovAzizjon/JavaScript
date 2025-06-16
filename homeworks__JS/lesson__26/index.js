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
