class OutroView {

    /*
        Quando temos um construtor na classe filha (esta) que recebe uma
        quantidade de parâmetros diferentes do construtor da classe pai,
        para que o "this" seja inicializado com um valor, precisamos 
        chamar o construtor da classe pai, passando os parâmetros 
        que ela precisa ANTES DE TUDO. 
    */
    constructor(elem,outroParam) {
        super(elem); // cuidado, tem que ser a primeira instrução!
        this._outroParametro = outroParam;
    }


}