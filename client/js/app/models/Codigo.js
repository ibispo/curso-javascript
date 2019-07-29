class Codigo {

    static validarCodigo(cod) {
        let retornoValido = (!/\D{3}-\D{2}-\d{2}/.test(cod)?'in':'') + 'válido';
        console.log( `Código ${cod} é ${retornoValido}!` );
    }

    /*

        Exemplo do professor
        --------------------

        constructor(texto) {
            if(!this._valida(texto)) throw new Error(`O texto ${texto} não é um código válido`);
            this._texto = texto;        
        }

        _valida(texto) {
            return /\D{3}-\D{2}-\d{2}/.test(texto);
        }

        get texto() {
            return this._texto;
        }        


    */


    static exibirNoConsole(lista) {
        lista.forEach(item => console.log(item));
    }


    static produtoria(listaNum) {
        return listaNum.reduce((total,num) => total * num, 1 );
    }



} 