// https://www.typescriptlang.org/
// Padrão Criacional Singleton - https://refactoring.guru/pt-br/design-patterns/singleton
// Curso Udemy <https://www.udemy.com/course/design-patterns-em-typescript/>

//Exemplo de uso: Redux

class Store {
    private static instance: Store;

    private data: any[] = [];

    public static getInstance(): Store {
        if(!Store.instance) {
            Store.instance = new Store();
        }

        return Store.instance;
    }

    public pushData(newData: any) {
        this.data.push(newData);
    }

    public getData() {
        return this.data;
    }
}

function myReactApp() {
    const instancia1 = Store.getInstance()
    const instancia2 = Store.getInstance()

    instancia1.pushData(1);
    instancia2.pushData(2);

    console.log(`Instância 1: ${instancia1.getData()}`);
    console.log(`Instância 2: ${instancia2.getData()}`);

    console.log("As instâncias são iguais?");
    console.log(instancia1 === instancia2);
}

myReactApp()
