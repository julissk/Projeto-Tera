/*
let tarefa1 = 'Ir ao supermercado';
let tarefa2 = 'Estudar programação';
let tarefa3 = 'Atualizar o LinkedIn';

console.log('Minhas tarefas são: ' + tarefa1 + ', ' + tarefa2 + ', ' + tarefa3);

let tarefas = [];
tarefas.push(tarefa1, tarefa2, tarefa3);
console.log(tarefas);

let novaTarefa = 'Regar plantas';
alert('Sua nova tarefa é: ' + novaTarefa);

tarefas.push(novaTarefa);
console.log(tarefas);

for (let i = 0; i < tarefas.length; i++) {
    console.log('Minha tarefa ' + (i + 1) + ' é: ' + tarefas[i]);
}

function exibirTarefas() {
    for (let i = 0; i < tarefas.length; i++) {
        console.log('Minha tarefa ' + (i + 1) + ' é: ' + tarefas[i]);
    }
}

exibirTarefas();

function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa);
    exibirTarefas();
}

adicionarTarefa('Ler um livro');

let novaTarefa = {
    id: 1,
    titulo: 'Calibrar pneu da bicicleta',
    descricao: 'Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi'
};

let novaTarefa = {
    id: 1,
    titulo: 'Calibrar pneu da bicicleta',
    descricao: 'Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi'
};

let tarefas = [novaTarefa];

function exibirTarefasDetalhadas() {
    tarefas.forEach(tarefa => {
        console.log(`Tarefa id: ${tarefa.id}\nTítulo: ${tarefa.titulo}\nDescrição: ${tarefa.descricao}`);
    });
}

exibirTarefasDetalhadas();

let proximoId = 2;

function adicionarTarefaDetalhada(titulo, descricao) {
    let tarefa = {
        id: proximoId++,
        titulo: titulo,
        descricao: descricao
    };
    tarefas.push(tarefa);
    exibirTarefasDetalhadas();
}

adicionarTarefaDetalhada('Estudar JavaScript', 'Praticar conceitos de loops e arrays');
adicionarTarefaDetalhada('Ir à academia', 'Treinar pernas e abdômen');
*/

// Seleciona o campo de input
let inputNovaTarefa = document.getElementById('inputNovaTarefa');

// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma tarefa
function addTarefa() {
    // Verifica se o input está vazio
    if (inputNovaTarefa.value.trim() === '') {
        alert('Por favor, adicione uma tarefa válida.');
        return;
    }

    // Adiciona o valor do input ao array de tarefas
    tarefas.push(inputNovaTarefa.value);
    
    // Limpa o campo de input após adicionar
    inputNovaTarefa.value = '';

    // Chama a função para atualizar a lista de tarefas
    mostrarTarefas();
}

// Função para exibir as tarefas
function mostrarTarefas() {
    let ulTarefas = document.getElementById('ulTarefas');
    
    // Limpa a lista de tarefas antes de adicionar as novas
    ulTarefas.innerHTML = '';

    // Cria um elemento 'li' para cada tarefa
    for (let i = 0; i < tarefas.length; i++) {
        let li = document.createElement('li');
        li.innerText = tarefas[i];  // Define o texto do 'li' com o valor da tarefa

        // Adiciona o ícone da lixeira no 'li'
        li.innerHTML += ' <img class="btnDelete" src="imagens/lixeira-icone.png" alt="Excluir tarefa">';

        // Adiciona o 'li' à lista de tarefas
        ulTarefas.appendChild(li);
    }

    // Adiciona eventos para concluir as tarefas com duplo clique
    let todosLi = ulTarefas.getElementsByTagName('li');
    for (let i = 0; i < todosLi.length; i++) {
        todosLi[i].addEventListener('dblclick', concluirTarefa);
    }

    // Adiciona eventos para excluir as tarefas
    let todosBtnDelete = ulTarefas.getElementsByClassName('btnDelete');
    for (let i = 0; i < todosBtnDelete.length; i++) {
        todosBtnDelete[i].addEventListener('click', deletarTarefa);
    }
}

// Função para concluir uma tarefa
function concluirTarefa() {
    // Alterna entre adicionar e remover a classe 'concluida'
    if (this.classList.contains('concluida')) {
        this.classList.remove('concluida');
    } else {
        this.classList.add('concluida');
    }
}

// Função para deletar uma tarefa
function deletarTarefa() {
    // Obtém o texto do elemento pai (tarefa) e remove o ícone de exclusão
    let tarefaDeletada = this.parentNode.innerText.replace('Excluir tarefa', '').trim();

    // Remove a tarefa do array
    let index = tarefas.indexOf(tarefaDeletada);
    if (index > -1) {
        tarefas.splice(index, 1);
    }

    // Atualiza a lista de tarefas
    mostrarTarefas();
}
