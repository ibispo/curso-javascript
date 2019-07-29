class NegociacaoController {

    /*
        https://udgwebdev.com/escrevendo-javascript-melhor-parte-1/
        https://udgwebdev.com/escrevendo-javascript-melhor-parte-2/
        https://udgwebdev.com/escrevendo-javascript-melhor-parte-3/
        https://udgwebdev.com/escrevendo-javascript-melhor-parte-4/
    */

    // Versão anterior do constructor
    /*
    this._negociacaoLista = new NegociacaoLista(
        this, // Este "this" é do NegociacaoController
        function(model) {
            this._negociacaoView.update(model);  
            // Sem o 1º parametro do contrutor (this)
            // O "this._negocia..." acima considera-se o contexto de onde é executada. 
            // Neste caso, ela seria "NegociacaoLista"
        });
    */


    /* Arrow function 
        --------------
        O "this" é léxico e não muda conforme o contexto.
        Diferente do function() { *** aqui o "this" é pelo contexto *** }
    */
    
    // Modelo antigo
    // this._negociacaoLista = new NegociacaoLista(model =>
    // this._negociacaoView.update(model));

    /*

    //  this._negociacaoLista = ProxyFactory.create( 
      //      new NegociacaoLista(), 
      //          ['adicionar', 'esvaziar'], 
      //          (model) => this._negociacaoView.update(model));

        // this._negociacaoView.update(this._negociacaoLista);


       // this._mensagem = ProxyFactory.create(
       //     new Mensagem(), 
       //     ['texto'], 
       //     (model) => this._mensagemView.update(model));

        // this._mensagemView.update(this._mensagem);

    */


    constructor() {
        
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        this._negociacaoLista = new Bind( new NegociacaoLista(),
            new NegociacaoView( $("#negView") ), 
            'adicionar', 'esvaziar', 'ordenar', 'ordenarReverte' );
        
        this._mensagem = new Bind( new Mensagem(),
            new MensagemView( $("#msgView") ), 'texto' );

        // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas
        this._colunaOrdemAtual = '';

    }


    adicionar(event){

        event.preventDefault();

        try {
            this._negociacaoLista.adicionar( this._criarNegociacao() );
            this._mensagem.texto = 'Negociação adicionada com sucesso!';
            this._limparFormulario();    
        } catch (err0) {
            this._mensagem.texto = err0;
        }

    }

    apagar() {

        let totItem = this._negociacaoLista.totalItens();
        if ( totItem == 0 ) {
            this._mensagem.texto = 'Lista de negociações vazia!';
            return; 
        }

        if ( !confirm( `ATENÇÃO!\n\nTotal de negociações incluídas: ${totItem}\n\nConfirma limpar a lista de negociações?`) )
            return;

        this._negociacaoLista.esvaziar();
        this._mensagem.texto = 'Lista de negociações apagada com sucesso!';

    }

    importar() {

        /*

            ifs() aninhados
            ---------------
            Pyramid of doom (Pirâmide do destino)
            Callback of hell (Calback do inferno)

            


        */

        new NegociacaoService()
            .obterNegociacoes()
            .then(negocLista => {
                negocLista.forEach(nego => this._negociacaoLista.adicionar(nego));
                this._mensagem.texto = 'Negociações do período importadas com sucesso';
            })
            .catch(err0 => this._mensagem.texto = err0);  






        /*

        V E R S Ã O 1

        service.obterNegociacaoSemana()
            .then( negoc => { 
                negoc.forEach(neg => this._negociacaoLista.adicionar(neg) );
                this._mensagem.texto = "Negociações SEMANA importadas.";
            })
            .catch( err0 => this._mensagem.texto = err0 );

        service.obterNegociacaoAnterior()
            .then( negoc => { 
                negoc.forEach(neg => this._negociacaoLista.adicionar(neg) );
                this._mensagem.texto = "Negociações ANTERIOR importadas.";
            })
            .catch( err0 => this._mensagem.texto = err0 );

        service.obterNegociacaoRetrasada()
            .then( negoc => { 
                negoc.forEach(neg => this._negociacaoLista.adicionar(neg) );
                this._mensagem.texto = "Negociações RETRASADA importadas.";
            })
            .catch( err0 => this._mensagem.texto = err0 );

        */

        /*
        // Semana atual
        service.obterNegociacaoSemana( (err0, negoc) => {
            
            if (err0) {
                this._mensagem.texto = err0;
                return;
            }

            negoc.forEach(neg => this._negociacaoLista.adicionar(neg));

            // Semana passada
            service.obterNegociacaoAnterior( (err0, negoc) => {
            
                if (err0) {
                    this._mensagem.texto = err0;
                    return;
                }
    
                negoc.forEach(neg => this._negociacaoLista.adicionar(neg));

                // Semana retrasada
                service.obterNegociacaoRetrasada( (err0, negoc) => {
            
                    if (err0) {
                        this._mensagem.texto = err0;
                        return;
                    }
        
                    negoc.forEach(neg => this._negociacaoLista.adicionar(neg));
                    this._mensagem.texto = "Negociações importadas.";
        
                });
                        
            });
            
        });
        */

    }

    ordenar( col ) {

        if (this._colunaOrdemAtual == col) {
            this._negociacaoLista.ordenarReverte();
        } else {
            this._negociacaoLista.ordenar( (a,b) => a[col] - b[col] );
        }
        this._colunaOrdemAtual = col;

    }


    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            parseFloat(this._inputValor.value)
        );

    }

    _limparFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }

}