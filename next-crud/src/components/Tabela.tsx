import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            var heroi = ''

            if (cliente.nome === 'Soldado:76' || cliente.nome === 'soldado:76') {
                heroi = 'soldier-76'
            } else {
                heroi = cliente.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .replace(/ /g, "-")
                    .replace(/\./g, "")
                    .replace(/\:/g, "-")
                    .toLowerCase()
            }
            
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>

                    <td className="text-sm lg:text-base xl:text-base 2xl:text-base p-2 lg:p-4 xl:p-4 2xl:p-4 text-left">{cliente.nome}</td>

                    <td className="text-sm lg:text-base xl:text-base 2xl:text-base p-2 lg:p-4 xl:p-4 2xl:p-4 text-left">{cliente.funcao}</td>

                    <td className="p-2 lg:p-4 xl:p-4 2xl:p-4 text-center 
                                   underline text-blue-600 hover:text-pink-900 visited:text-purple-600
                                   text-xs lg:text-base xl:text-base 2xl:text-base">
                        <a href={`https://playoverwatch.com/pt-br/heroes/${heroi}/`}>Página do Herói</a>
                    </td>

                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }


    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)}
                        className={`
                        w-7 lg:w-10 xl:w-10 2xl:w-10
                        p-1 m-1 lg:p-2 lg:m-1 xl:p-2 xl:m-1 2xl:p-2 2xl:m-1
                        flex justify-center items-center
                      text-green-600 rounded-full
                      hover:bg-purple-50`}>
                        {IconeEdicao}
                    </button>

                ) : false}


                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)}
                        className={`
                        w-7 lg:w-10 xl:w-10 2xl:w-10
                        p-1 m-1 lg:p-2 lg:m-1 xl:p-2 xl:m-1 2xl:p-2 2xl:m-1
                        flex justify-center items-center
                      text-red-500 rounded-full 
                      hover:bg-purple-50`}>
                        {IconeLixo}
                    </button>

                ) : false}


            </td>
        )
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                   text-gray-100
                   bg-gradient-to-r from-purple-500 to-purple-800`}>
                <tr>
                    <th className="text-xs lg:text-base xl:text-base 2xl:text-base p-2 lg:p-4 xl:p-4 2xl:p-4 text-left">Nome</th>

                    <th className="text-xs lg:text-base xl:text-base 2xl:text-base p-2 lg:p-4 xl:p-4 2xl:p-4 text-left">Função</th>

                    <th className="text-xs lg:text-base xl:text-base 2xl:text-base p-2 lg:p-4 xl:p-4 2xl:p-4 text-center">Link</th>

                    {exibirAcoes ? <th className="text-xs lg:text-base xl:text-base 2xl:text-base m:p-2 md:p-2 lg:p-4 xl:p-4 2xl:p-4">Ações</th> : false}
                </tr>
            </thead>

            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    );
}

export default Tabela;