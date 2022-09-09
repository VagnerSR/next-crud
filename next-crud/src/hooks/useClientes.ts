import { useState, useEffect } from "react"
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useTabelaOuForm from "./useTabelaOuForm";

function useClientes() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  
const { tabelaVisivel,  
        exibirTabela, 
        exibirFormulario 
      } = useTabelaOuForm()

  const repo: ClienteRepositorio = new ColecaoCliente()

 useEffect(obterTodos, [])


 function obterTodos() {
  repo.obterTodos().then(clientes => {
    setClientes(clientes)
    exibirTabela()
  })
 }


  function selecionarCLiente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function exluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    exluirCliente,
    selecionarCLiente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}

export default useClientes;