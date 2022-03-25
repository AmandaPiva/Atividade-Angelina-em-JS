//Atividade da Angelina em JS
//var mostre = document.getElementById('menu');

function menu(){
    alert(`P - Total de pontos do país 
            G - Final de campeonato de Ginástica de Solo 
            S - Sair`);
}

menu();

function lancarPontos(){

    let qntPais = prompt('Digite a quantidade de países que estão participando da competição:');

    for(i = 0; i < qntPais; i++){
        let qntOuro = Number(prompt(`Digite o total de medalhas de ouro:`));
        let qntPrata = Number(prompt(`Digite o total de medalhas de prata:`));
        let qntBronze = Number(prompt(`Digite o total de medalhas de Bronze:`));

        let pontos = (qntOuro * 3) + (qntPrata * 2) + (qntBronze * 1);
        alert(`País ${i+1} conseguiu ${pontos} pontos`);
    }
    
}

function ginasta(){
    let ginasta = 2;
    for(i = 0; i < ginasta; i++){
        let Notajuiz1 = Number(prompt(`Juiz 1 - Digite a nota para a ginásta ${i+1}`));
        let Notajuiz2 = Number(prompt(`Juiz 2 - Digite a nota para a ginasta ${i+1}`));

        let ginastas = Notajuiz1 + Notajuiz2;

        alert(`A ginasta ${i+1} recebeu ${ginastas} pontos`);

        /*let maior = 0;
        let menor = 0;

        if(ginastas == maior && ginastas == menor){
            maior = ginastas;
            menor = ginastas;
        }
        if(ginastas > maior){
            maior = ginastas;
        }if(ginastas < menor){
            menor = ginastas;
        }
        alert(`A ginasta ${}`)*/
    }

}

var option = prompt('Digite a opção: ');

    switch (option){
        case 'P':
            lancarPontos();
        break;

        case 'G':
            ginasta();
        break;

        case 'S':
            limpe();
    }
