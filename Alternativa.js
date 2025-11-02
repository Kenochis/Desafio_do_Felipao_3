class heroi { 
    constructor(name, idade, tipo){ 
        this.name = name;
        this.idade = idade;
        this.tipo = tipo;
        
    }
    ataque(){
        let tipoAtaque;

        switch (this.tipo){
            case "Guerreiro":
            tipoAtaque = "lâmina afiada";
            break;
                
            case "Arqueiro":
            tipoAtaque = "flecha envenenada";
            break;

            case "Monge":
            tipoAtaque = "arte marcial";
            break;

            case "Mago":
            tipoAtaque = "magia elemental";
            break;

            case "Ninja":
            tipoAtaque = "shuriken";
            break;

            default:
            console.log("ataque oculto");
            break;
        }
        return tipoAtaque;
    }
    tipos(){
        this.ataque()

        switch(true){
            case (this.tipo === "Guerreiro"):
            return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
            break;

            case (this.tipo === "Arqueiro"):
            return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
            break;

            case (this.tipo === "Monge"):
            return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
            break;

            case (this.tipo === "Mago"):
            return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
            break;

            case (this.tipo === "Ninja"):
            return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
            break;

            default:
            return console.log(`O Herói ${this.name} de ${this.idade} anos, morreu antes mesmo de conseguir sua habilidade de batalha!`);
            break;
        }
    }
}

const tipoHeroi = ["Guerreiro", "Arqueiro", "Monge", "Mago", "Ninja"];
//
for (let i = 0; i < tipoHeroi.length; i++){
    
    const nick = "Kenochis";
    const age = 20
    const tipo = tipoHeroi[i];

    let heroi1 = new heroi(nick, age, tipo);
    heroi1.tipos();
}
