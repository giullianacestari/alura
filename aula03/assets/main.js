// ? Desenhando a tabela com JS

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

// TODO: PARTE NOVA DE CÓDIGO

// Desenhando a tabela com JS
function desenhaTabela() {
  let tableBody = document.querySelector("tbody");

  //Limpando a tabela
  tableBody.innerHTML = "";

  tabela.forEach(function (item) {
    let row = tableBody.insertRow();
    let disciplinaCell = row.insertCell(0);
    let descricaoCell = row.insertCell(1);
    let dataCell = row.insertCell(2);
    let feitoCell = row.insertCell(3);
    let progressoCell = row.insertCell(4);
    let removerCell = row.insertCell(5);

    disciplinaCell.textContent = item.disciplina;
    descricaoCell.textContent = item.descricao;
    dataCell.textContent = item.data; // 2º resultado: formataData(item.data)
  });
}

//desenhando assim que carrega a página
desenhaTabela();
