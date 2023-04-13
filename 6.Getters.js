class User {
  constructor(nome) {
    this._nome = nome;
  }

  get nome() {
    return this._nome;
  }
}

// criar o usuário
let novoUser = new User("Rodrigo");
console.log(novoUser.nome); //usando o getter

novoUser.nome = "Mariana";
console.log(novoUser.nome); //não é modificado, continua 'Rodrigo'
