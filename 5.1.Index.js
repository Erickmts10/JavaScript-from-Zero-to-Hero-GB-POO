import User from "./5.User.js";
import Admin from "./6.Admin.js";
import Docente from "./7.Docente.js";

// const novoUser = new User(
//   "Heitor",
//   "h@h.com",
//   "2017/04/11",
//   "Estudante",
//   "true"
// );
// console.log(novoUser.exibirInfos());
const novoAdmin = new Admin("Samuel", "s@s.com", "2023/02/14", "Admin", "true");
console.log(novoAdmin.nome);
novoAdmin.nome = "";
console.log(novoAdmin.nome);
