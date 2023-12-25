class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;  // (ex: guerreiro, mago, monge, ninja )
    };

    atacar() {

        let magoAtaque = "Magia";
        let guerreiroAtaque = "Espada";
        let mongeAtaque = "Artes marciais";
        let ninjaAtaque = "Shuriken";

        if (this.tipo == "mago") { console.log(`O ${this.tipo} usou ataque tipo ${magoAtaque}`) }

        else if (this.tipo == "guerreiro") { console.log(`O ${this.tipo} usou ataque tipo ${guerreiroAtaque}`) }

        else if (this.tipo == "monge") { console.log(`O ${this.tipo} usou ataque tipo ${mongeAtaque}`) }

        else if (this.tipo == "ninja") { console.log(`O ${this.tipo} usou ataque tipo ${ninjaAtaque}`) }

    };

};

let jogador1 = new heroi("Gabriel", 22, "guerreiro");

console.log(jogador1.atacar());
