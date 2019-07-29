class View {

    constructor(elem) {
        this._elemento = elem;
    }

    // Para informar o desenvolvedor que o método deve ser implementado
    template(model) {
        throw new Error('The method "template" must be implemented.');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

}