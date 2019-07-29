class MensagemView extends View {

    /*
    Caso seja necessário implementar o constructor()
    constructor(elem) {
        super(elem);
    }
    */

    template(model) {
        return model.texto ? 
            `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }


}