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
  desenhaTabela();
}

// Desenhando a tabela com JS
function desenhaTabela(listaTarefas = tabela) {
  let tableBody = document.querySelector("tbody");

  // limpando a tabela
  tableBody.innerHTML = "";

  // adicionando linhas e colunas
  listaTarefas.forEach(function (item) {
    let row = tableBody.insertRow();
    let disciplinaCell = row.insertCell(0);
    let descricaoCell = row.insertCell(1);
    let dataCell = row.insertCell(2);
    let feitoCell = row.insertCell(3);

    disciplinaCell.textContent = item.disciplina;
    descricaoCell.textContent = item.descricao;
    dataCell.textContent = formataData(item.data);
    feitoCell.textContent = item.feito ? "Sim" : "Não";
  });
}

//desenhando assim que carrega a página
desenhaTabela();

function formataData(data) {
  const dataObj = new Date(data + "T00:00:00");
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0"); // Janeiro é 0, então adicionamos 1
  const ano = dataObj.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
  return `${dia}/${mes}/${ano}`;
}
