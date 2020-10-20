import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  senha: semValidacao
});
//Essas validações passadas serão as default. Caso não exsita um provider para fazer esse
// controle essa função semValidacao será acessada

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texto: "" };
}
export default ValidacoesCadastro;
