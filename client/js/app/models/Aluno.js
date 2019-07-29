class Aluno {

    constructor( matric, nm ) {

        this._matricula = matric;
        this._nome = nm;

    }

    get nome() {
        return this._nome;
    }

    get matricula() {
        return this._matricula;
    }

}