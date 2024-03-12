// ? Adicionando uma nova tarefa

// Cria a lista "tabela"
let tabela = [
  {
    disciplina: "Matemática",
    descricao: "thhngrfb",
    data: "2024-08-02",
    feito: false,
    id: "ad980a9a-d480-e807-b06d-0f1df82337ad",
  },
]; // * excluir e deixar vazio no final do projeto

// Aula 2 - adicionar nova tarefa
function novaTarefa() {
  let disciplina = document.querySelector("#disciplina").value;
  let descricao = document.querySelector("#descricao").value;
  let data = document.querySelector("#data-de-conclusao").value;

  // Novo registro a ser adicionado
  let novoRegistro = {
    id: "identificação única",
    disciplina: disciplina,
    descricao: descricao,
    data: data,
    feito: false,
  };

  tabela.push(novoRegistro);

  console.log(tabela); //* resultado da aula 2
}

// Criando um id único
function geraId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
