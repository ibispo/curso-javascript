class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {

        event.preventDefault();

        let dadosArquivo = this._inputDados.value.split("/")
            .map(item => item.toUpperCase());
        if ( dadosArquivo.length < 3 ) {
            alert('Formato de input inválido. O formato válido é: nome/tamanho/tipo');
            return;
        }

        let listaPadrao = [/[a-z]{1,}/i, /[1-9]{1,}/g, /[a-z]{1,}/i];
        let indiceFalha = -1;
        listaPadrao.forEach( function(item,index) { 
            if ( indiceFalha == -1 && !item.test(dadosArquivo[index]) ) 
                indiceFalha = index;
        });
        if ( indiceFalha != -1 ) {
            alert(`Formato de input inválido da ${indiceFalha+1}ª parte da informação do arquivo "${dadosArquivo[indiceFalha]}".` );
            return;
        }

        //cria um Arquivo com as suas propriedades;
        let arquivo = ArquivoHelper.criarArquivo(dadosArquivo);

        // exibe mensagem no console com os dados do arquivo.
        console.log(`Registro inserido com sucesso. - ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}`);
        console.log(arquivo);

        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}