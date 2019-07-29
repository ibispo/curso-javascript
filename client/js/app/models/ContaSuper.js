class ContaSuper {

    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    atualiza(tx) {
        throw new Error('Tem que implementar atualiza()');
    }

}