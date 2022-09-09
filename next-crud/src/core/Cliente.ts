export default class Cliente {
    #id: string
    #nome: string
    #funcao: string


    constructor(nome: string, funcao: string, id: string = null) {
        this.#nome = nome
        this.#funcao = funcao
        this.#id = id
    }

    static vazio() {
        return new Cliente('', '')
    }


    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get funcao() {
        return this.#funcao
    }
}