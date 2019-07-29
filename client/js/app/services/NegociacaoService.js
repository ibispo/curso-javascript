class NegociacaoService {

    constructor () {

        this._http = new HttpService();

    }


    /* 
        cb = callback
        
        Error-first Callback
    */

    /*

        xhr.onreadystatechange

                0: requisicao nao iniciada
                1: conexao com serv estabelecida
                2: requisicao recebida
                3: processando requisicao
                4: requisicao concluida e resposta pronta  (XMLHttpRequest.DONE)

    */


    async _obterNegociacaoSemana() {   // async ???

        return this._http
            .get('negociacoes/semana')
            .then(negoc => {
                // console.log(negoc);
                return negoc.map( obj => new Negociacao( new Date(obj.data), obj.quantidade, obj.valor ) );
            })
            .catch( err0 => {
                console.log(err0);
                throw new Error('Não foi possível obter as negociações da semana');
            });

        

    }

    _obterNegociacaoAnterior() {

        /*
        return new Promise( (resolve, reject) => {

            let xhr = new XMLHttpRequest();
        
            xhr.open('GET', 'negociacoes/anterior');
    
            xhr.onreadystatechange = () => {
    
                if ( xhr.readyState == 4 ) {
    
                    if ( xhr.status == 200 ) {   // HTTP OK
    
                        resolve( JSON.parse(xhr.responseText)
                                     .map( obj => new Negociacao( new Date(obj.data), obj.quantidade, obj.valor ) ) ); 
    
                    } else {
    
                        console.log( xhr.responseText );
                        reject( 'Não foi possível ANTERIOR... ' );

                    }
    
                }
                
            }
    
            xhr.send();

        });

        */

       return this._http
            .get('negociacoes/anterior')
            .then(negoc => {
                // console.log(negoc);
                return negoc.map( obj => new Negociacao( new Date(obj.data), obj.quantidade, obj.valor ) );
            })
            .catch( err0 => {
                console.log(err0);
                throw new Error('Não foi possível obter as negociações anterior');
            });

    


    }

    _obterNegociacaoRetrasada() {
        /*

        return new Promise( (resolve, reject) => {

            let xhr = new XMLHttpRequest();
        
            xhr.open('GET', 'negociacoes/retrasada');
    
            xhr.onreadystatechange = () => {
    
                if ( xhr.readyState == 4 ) {
    
                    if ( xhr.status == 200 ) {   // HTTP OK
    
                        resolve( JSON.parse(xhr.responseText)
                                     .map( obj => new Negociacao( new Date(obj.data), obj.quantidade, obj.valor ) ) ); 
    
                    } else {
    
                        console.log( xhr.responseText );
                        reject( 'Não foi possível RETRASADA... ' );

                    }
    
                }
                
            }
    
            xhr.send();

        });
*/

    return this._http
        .get('negociacoes/retrasada')
        .then(negoc => {
            // console.log(negoc);
            return negoc.map( obj => new Negociacao( new Date(obj.data), obj.quantidade, obj.valor ) );
        })
        .catch( err0 => {
            console.log(err0);
            throw new Error('Não foi possível obter as negociações da retrasada');
        });

    }

     obterNegociacoes() {

        // Padrão de projeto: Promise (Promessa)

        return Promise.all([
            this._obterNegociacaoSemana(), 
            this._obterNegociacaoAnterior(), 
            this._obterNegociacaoRetrasada()])
            .then( negocPeriodo => {
                let negoc = negocPeriodo
                    .reduce( (arrAchatado, arr) => arrAchatado.concat(arr), [] );
                return negoc;
            })
            .catch( err0 => {
                throw new Error(err0);
            });        

    }



}