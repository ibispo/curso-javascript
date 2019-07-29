class Prova {

    constructor ( alun, nt ) {

        this._aluno = alun;
        this._nota = nt;

    }

    get aluno() {
        return this._aluno;
    }

    get nota() {
        return this._nota;
    }

}