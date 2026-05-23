const alunos = [];
let id_aluno = 1;

function cadastrar_aluno(){ // função cadastrar aluno
    let nome = prompt("digite o nome do aluno: ");
    let cpf = prompt("digite o cpf do aluno: ");
    let curso = prompt("digite o curso do aluno: ");

    const aluno = { 
        id: id_aluno,
        nome: nome,
        cpf: cpf,
        curso: curso

    };

    alunos.push(aluno); //cadastra o aluno

    id_aluno++;

    alert("aluno cadastrado");

}

function listar_aluno(){
    if (alunos.length === 0){
        alert("nenhum aluno cadtsrado");
    }else{ 

        let mensagem = " "
        alunos.forEach((aluno) => { // usa arrow function para criar a função que já mostra os alunos
            mensagem += (`id: ${aluno.id} - nome: ${aluno.nome} - cpf: ${aluno.cpf} - curso: ${aluno.curso} \n`)

        });

        alert(mensagem)
    }
}

function editar_aluno(){
    let id = Number(prompt("digite o id quer quer procurar: "));
    let aluno = alunos.find(aluno => aluno.id === id);

    if (!aluno){
        alert("aluno não encontrado");
    }else{
        aluno.nome = prompt("digite o nome novo:", aluno.nome); // aqui, deixa o valor já cadastrando, para caso não queira mudar
        aluno.cpf = prompt("digite o novo cpf: ", aluno.cpf);
        aluno.curso = prompt("digite o novo curso", aluno.curso);

        alert("aluno atualizado")
    }
}

function remover_aluno(){
    let id = Number(prompt("digite o id que você quer remover: "));
    let indice = alunos.findIndex( aluno => aluno.id === id);

    if (indice === -1){
        alert("aluno não encontrado")
    }else{
        alunos.splice(indice, 1);
    }

}

//teste
//cadastrar_aluno()
//listar_aluno()
//editar_aluno()
//remover_aluno()

let opcao = 0;

while (opcao !== 5){


    alert(
        "=== MENU === \n " +
        "1. cadastrar aluno \n " +
        "2. listar aluno \n" +
        "3. editar aluno \n" +
        "4. remover aluno \n" +
        "5. sair"

    );

    opcao = Number(prompt("Digite uma opção:"));

    if (opcao === 1){
        cadastrar_aluno();

    }else if(opcao === 2){
        listar_aluno();

    }else if (opcao === 3){
        editar_aluno();

    }else if (opcao === 4){
        remover_aluno();

    }else if (opcao === 5){
        alert("codigo encerrando");

    }else{
        alert("numero inválido")
    }
}
