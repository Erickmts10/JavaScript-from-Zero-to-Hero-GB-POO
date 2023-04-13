const user = {
  nome: "Erick",
  email: "e@e.com",
  nacimento: 22 / 11 / 1966,
  role: "admin",
  ativo: true,
  exibirInfo: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Jemima",
  email: "J@j.com",
  role: "admin",
  criarCurso() {
    console.log("Curso criado!");
  },
};
Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();
