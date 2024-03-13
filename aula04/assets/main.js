// ? Formatando data e criando um ID

// Cria a lista "tabela"
let tabela = [
  {
    disciplina: "Matemática",
    descricao: "thhngrfb",
    data: "2024-08-02",
    feito: false,
    id: "ad980a9a-d480-e807-b06d-0f1df82337ad",
  },
];

// Aula 2 - adicionar nova tarefa
function novaTarefa() {
  let disciplina = document.querySelector("#disciplina").value;
  let descricao = document.querySelector("#descricao").value;
  let data = document.querySelector("#data-de-conclusao").value;

  // Novo registro a ser adicionado
  let novoRegistro = {
    id: geraId(), //! resultado novo
    disciplina: disciplina,
    descricao: descricao,
    data: data,
    feito: false,
  };

  tabela.push(novoRegistro);

  desenhaTabela();

  console.log(tabela); //* resultado da aula 2
}

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
    dataCell.textContent = formataData(item.data); // ! resultado novo
  });
}

//desenhando assim que carrega a página
desenhaTabela();

// TODO: PARTE NOVA DE CÓDIGO

function formataData(data) {
  const dataObj = new Date(data + "T00:00:00");
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0"); // Janeiro é 0, então adicionamos 1
  const ano = dataObj.getFullYear().toString().slice(-2); // Pega os últimos dois dígitos do ano
  return `${dia}/${mes}/${ano}`;
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
