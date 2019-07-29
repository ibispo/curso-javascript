class ContaCorrente extends ContaSuper {

    atualiza(tx) {
        this._saldo += tx;
    }

}