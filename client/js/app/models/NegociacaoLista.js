class NegociacaoLista {

    constructor() {
        this._listaNegociacao = [];
        // this._trap = trap; *** Modelo que acopla infraestrutura no modelo. Fere o princípio de modelo "reutilizável"
    }


    adicionar( negociacao ) {
        
        this._listaNegociacao.push( negociacao );

        // Proxy --- Não podemos usar isso (Gambi)
        // this._listaNegociacao = [].concat(this._listaNegociacao,negociacao);


        // this._trap(this); *** Retirado

        // Versão anterior do NegociacaoController onde eu passava o "this" dele no contructor desta classe
        // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    get listaNegociacao() {
        return [].concat( this._listaNegociacao );
    }

    // novo método
    get volumeTotal() {
        return this._listaNegociacao.reduce((total, n) => total + n.volume, 0.0);
    }

    esvaziar() {
        this._listaNegociacao = [];
        // this._trap(this); *** Retirado

        // Versão anterior do NegociacaoController onde eu passava o "this" dele no contructor desta classe
        // Reflect.apply(this._armadilha,this._contexto,[this]);
    }

    totalItens() {
        return this._listaNegociacao.length;
    }

    ordenar( crit ) {
        this._listaNegociacao.sort( crit );
    }

    ordenarReverte() {
        this._listaNegociacao.reverse();
    }

}