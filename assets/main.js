// Cria a lista "tabela"
let tabela = [
    {
      disciplina: "Matemática",
      descricao: "página 29, exercícios 2 e 3",
      data: "2024-08-02",
      feito: false,
      id: "ad980a9a-d480-e807-b06d-0f1df82337ad",
    },
];

// adiciona uma nova tarefa na lista "tabela"
function novaTarefa() {
  let disciplina = document.querySelector("#disciplina").value;
  let descricao = document.querySelector("#descricao").value;
  let data = document.querySelector("#data-de-conclusao").value;

  // padrão de registro a ser adicionado
  let novoRegistro = {
    id: "id-único",
    disciplina: disciplina,
    descricao: descricao,
    data: data,
    feito: false,
  };

  tabela.push(novoRegistro);
  console.log(tabela);
}