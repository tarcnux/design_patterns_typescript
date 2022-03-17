// https://www.typescriptlang.org/
// Padrão Comportamental Strategy - https://refactoring.guru/pt-br/design-patterns/strategy
// Curso Udemy <https://www.udemy.com/course/design-patterns-em-typescript/>

interface Strategy {
    login(credentials: any) : boolean;
}

//Classe de contexto
class Passport {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public login(credentials: any) {
        this.strategy.login(credentials);
    }
}

class JwtStratgey implements Strategy {
    login(credentials: any): boolean {
        console.log(`Login usando JWT: `);
        console.log(credentials);
        return true;
    }
}
class FacebookStratgey implements Strategy {
    login(credentials: any): boolean {
        console.log(`Login usando Facebook: `);
        console.log(credentials);
        return true;
    }
}

const estrategia1 = new Passport(new JwtStratgey());
estrategia1.login({'user':'tarcnux', 'pass':'JWT token'});

const estrategia2 = new Passport(new FacebookStratgey());
estrategia2.login({'user':'tarcnux', 'pass':'Facebook OAuth2'});
