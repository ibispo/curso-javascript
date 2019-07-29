class DateHelper {

    // let data = new Date(this._inputData.value.split('-'));
    // let data = new Date(this._inputData.value.replace(/-/g,','));

    // '2016-11-12'
    // let dataFatia = this._inputData.value.split('-');
    // let data = new Date(dataFatia[0],dataFatia[1]-1,dataFatia[2]);

    /*
    let data = new Date(...
        this._inputData.value
            .split('-')
            .map(function(item,index){
                return item-(index==1?1:0);
            })
    );
    */


    constructor () {
        throw new Error('This class cannot be instantiated.');
    }

    static dateToText( date ) {
        
        
        //return date.getDate() + 
        //   "/" + ( date.getMonth() + 1 ) + 
        //   "/" + date.getFullYear();

        // Template string

        let dia = date.getDate().toString();
        let mes = (date.getMonth()+1).toString();

        return `${dia.padStart(2,'0')}/${mes.padStart(2,'0')}/${date.getFullYear()}`;
         
    }

    static valor( nro ) {
        
        // const centavosParaReais = centavos => 'R$ ' + (centavos / 100).toFixed(2).replace('.', ',').split('').reverse().map((v, i) => i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v).reverse().join('')

        return nro.toLocaleString('pt-BR', 
            { minimumFractionDigits: 2, 
              maximumFractionDigits: 2,  
              style: 'currency', 
              currency: 'BRL' } );
    }

    // Mudanca para arrowFunction
    // "..." = spread Operator
    static textToDate( text ) {

        // fail fast
        
        // Expression language

        /*
        /^\d{4}-\d{2}-\d{2}$/
        O ˆ indica "começando com " e o $ "terminando com".
        */

        if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
            throw new Error('Invalid format, must be yyyy-mm-dd');

        return new Date(... text.split('-').map( (item,index) => item-index%2 ));

        /*

        Caso o formato recebido tenha que ser dd/mm/yyyy

         // mudamos a validação para aceitar o novo formato!
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) 
            throw new Error('Deve estar no formato dd/mm/aaaa');

        // veja que usamos no split '/' no lugar de '-'. Usamos `reverse` também para ficar ano/mes/dia.      
        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));

        */



    }


}