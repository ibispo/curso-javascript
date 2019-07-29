class ContaPoupanca extends ContaSuper {

    atualiza(tx) {
        this._saldo += (tx*2);
    }

}