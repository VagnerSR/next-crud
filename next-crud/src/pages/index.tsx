import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";



export default function Home() {
  const { cliente, 
          clientes, 
          selecionarCLiente, 
          exluirCliente, 
          novoCliente,
          salvarCliente,
          tabelaVisivel,
          exibirTabela
        } = useClientes()
  

  return (
    <div className={`
          min-w-screen
          flex justify-center items-center h-screen
          bg-gradient-to-r from-blue-300 to-pink-300
          text-white` }>

      <Layout titulo="Cadastre um herói de Overwatch">

        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">

              <Botao className="bg-gradient-to-r from-green-400 to-green-700 mb-4"
                     onClick={novoCliente}>
                Novo Herói
              </Botao>

            </div>

            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCLiente}
              clienteExcluido={exluirCliente} />
          </>
        ) : (
          <Formulario cliente={cliente}
                      clienteMudou={salvarCliente} 
                      cancelado={exibirTabela}/>
        )}

      </Layout>
    </div>
  )
}
