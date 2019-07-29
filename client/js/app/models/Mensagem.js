class Mensagem {

    /*
        Versão para compatibilizar com navegadores antigos (ex. Edge versão 13)
        
        constructor(texto) {
            this._texto = texto || ''; // se texto for undefined, vai passar ''
        }

    */

    constructor(texto='') {
        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }


}

