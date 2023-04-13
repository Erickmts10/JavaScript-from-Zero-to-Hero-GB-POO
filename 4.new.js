// function User(nome, email) {
//   this.nome = nome;
//   this.email = email;

//   this.exibirInfo = function () {
//     return `${this.nome}, ${this.email}`;
//   };
// }

// const novoUser = new User("Jemima", "j@j.com");
// console.log(novoUser.exibirInfo());

// function Admin(role) {
//   User.call(this, "Jemima", "j@j.com");
//   this.role = role || "estudante";
// }

// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin("admin");
// console.log(novoUser.exibirInfo());
// console.log(novoUser.role);

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function () {
    return this.nome;
  },
};

const novoUser = Object.create(user);
novoUser.init("Jemima", "j@j.com");
console.log(novoUser);
console.log(novoUser.exibirInfos());

// não entedi poque o retorno só tras no nome e não o email
