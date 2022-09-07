import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('D.VA', 35, '65486'),
    new Cliente('Mei', 69, '645'),
    new Cliente('Mercy', 49, '13'),
    new Cliente('Ana', 19, '654163')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {

  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className={`
          flex justify-center items-center h-screen
          bg-gradient-to-r from-blue-300 to-pink-300
          text-white` }>

      <Layout titulo="Cadstro Simples">

        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">

              <Botao className="bg-gradient-to-r from-green-400 to-green-700 mb-4"
                     onClick={() => setVisivel('form')}>
                Novo Herói
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente} 
                      cancelado={() => setVisivel('tabela')}/>
        )}

      </Layout>
    </div>
  )
}
