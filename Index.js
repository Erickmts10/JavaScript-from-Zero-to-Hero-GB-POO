import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User(
//   "Heitor",
//   "h@h.com",
//   "2017/04/11",
//   "Estudante",
//   "true"
// );
// console.log(novoUser.exibirInfos());
// const novoAdmin = new Admin("Samuel", "s@s.com", "2023/02/14", "Admin", "true");
// console.log(novoAdmin.nome);
// novoAdmin.nome = "";
// console.log(novoAdmin.nome);

const novoDocente = new Docente(
  "Maria Cristina",
  "mc@mc.com",
  "docente",
  "1980/08/13"
);
console.log(novoDocente.exibirInfos());
