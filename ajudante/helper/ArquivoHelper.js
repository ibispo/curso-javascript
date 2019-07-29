class ArquivoHelper {

    constructor() {
        throw new Error('A classe ArquivoHelper não pode ser instanciada.');
    }

    static criarArquivo(dadosArq) {
        return new Arquivo(...dadosArq );
    }

}