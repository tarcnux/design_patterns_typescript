// https://www.typescriptlang.org/
// Padrão Comportamental Observer https://refactoring.guru/pt-br/design-patterns/observer
// Curso Udemy <https://www.udemy.com/course/design-patterns-em-typescript/>

interface Observer {
    update(): void;
}

interface Store {
    addCustomerToNotificationPool(observer: Observer): void;
    removeCustomerFromNotificationPool(observer: Observer): void;
    notifyCustomer(): void;
}

class AppleStore implements Store {
    private observers: Observer[] = [];

    public addCustomerToNotificationPool(observer: Observer) {
        this.observers.push(observer);
    }

    public removeCustomerFromNotificationPool(observer: Observer) {
        const observerIndex = this.observers.indexOf(observer);
        //console.log("\nÍndice: " + observerIndex);

        if (observerIndex == -1) {
            throw new Error('Observer não encontrado');
        }
        this.observers.splice(observerIndex, 1);
    }

    public notifyCustomer() {
        console.log('\n\n--Inicia o processo de notificação de clientes');
        for(const obs of this.observers) {
            obs.update();
        }
    }
}

class CustomerTipo1 implements Observer {
    update(): void {
        console.log("Cliente Tipo 1 recebeu a notificação de lançamento");
    }
}

class CustomerTipo2 implements Observer {
    update(): void {
        console.log("Cliente Tipo 2 recebeu a notificação de lançamento");
    }
}

const appleStore = new AppleStore();
const cliente1 = new CustomerTipo1();
const cliente2 = new CustomerTipo2();
const cliente3 = new CustomerTipo2();
const cliente4 = new CustomerTipo1();

appleStore.addCustomerToNotificationPool(cliente1);
appleStore.notifyCustomer();

appleStore.addCustomerToNotificationPool(cliente2);
appleStore.notifyCustomer();

appleStore.addCustomerToNotificationPool(cliente3);
appleStore.addCustomerToNotificationPool(cliente4);
appleStore.removeCustomerFromNotificationPool(cliente1);
appleStore.notifyCustomer();
