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

            case (this.tipo === "Arqueiro"):
                return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);

            case (this.tipo === "Monge"):
                return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);
                
            case (this.tipo === "Mago"):
                return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);

            case (this.tipo === "Ninja"):
                return console.log(`O ${this.tipo} atacou usando ${this.ataque()}`);

            default:
                return console.log(`O Herói ${this.name} de ${this.idade} anos, morreu antes mesmo de conseguir sua habilidade de batalha!`);
        }
    }
}

let heroi1 = new heroi("Kenochis", 35, "Guerreiro");
heroi1.tipos();
let heroi2 = new heroi("Kenochis", 20, "Ninja");
heroi2.tipos();