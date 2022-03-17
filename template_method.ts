// https://www.typescriptlang.org/
// Padrão Comportamental Template Method https://refactoring.guru/pt-br/design-patterns/template-method
// Curso Udemy <https://www.udemy.com/course/design-patterns-em-typescript/>

// abstract = É um tipo de classe especial que não pode ser instanciada, apenas herdada
abstract class Personagem {

    public templateMethod() {
        this.anda();
        this.respira();
        this.luta();
        this.magia();
    }
    
    protected anda() {
        console.log("Anda normalmente");
    }

    protected respira() {
        console.log("Respira normalmente")
    }

    protected abstract luta(): void; //Métoso abstract obrigatório implementação na classe filha

    protected abstract magia(): void; //Métoso abstract obrigatório implementação na classe filha

}

class Guerreiro extends Personagem {

    protected luta() {
        console.log("luta extremamente BEM!");
    }

    protected magia() {
        console.log("Não solta magia");
    }
}

class Elfo extends Personagem {

    protected anda() {
        console.log("Corre muito");
    }

    protected respira() {
        console.log("Não precisa de muito para respirar.")
    }

    protected luta() {
        console.log("Luta extremamente BEM!");
    }

    protected magia() {
        console.log("Solta magia extremamente bem.");
    }
}

function jogo(personagem: Personagem) {
    personagem.templateMethod();
}


console.log('\n\nJogando com o Guerreiro')
jogo(new Guerreiro());

console.log('\n\nJogando com o Elfo')
jogo(new Elfo());

