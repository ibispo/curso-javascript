class ConversorXML {

    static converte(objeto) {
        // converte um objeto em XML
        console.log("Oi....");
    }
}



/*

No ES6 geramos métodos assim

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Função de instância do objeto
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    // Método estático
    static metodoStaticoQualquer() {
        console.log('Método estático chamado');
    }
}

##################################################################

Antes do ES6 

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// método de instância
Pessoa.prototype.obterNomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// declarando equivalente a método estático
Pessoa.metodoStaticoQualquer = function() {
    console.log('Método estático chamado');
};







*/