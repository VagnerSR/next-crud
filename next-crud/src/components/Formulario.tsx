import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

function Formulario(props: FormularioProps) {
    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [funcao, setFuncao] = useState(props.cliente?.funcao ?? '')

    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} className="mb-5"/>
            ) : false}

            <Entrada texto="Nome" 
                     valor={nome}
                     valorMudou={setNome}
                     className="mb-5"/>

            <Entrada texto="Função"  
                     valor={funcao}
                     valorMudou={setFuncao}/>

            <div className="flex justify-end mt-7">
                <Botao className="bg-gradient-to-r from-blue-400 to-blue-700 mr-2"
                       onClick={() => props.clienteMudou?.(new Cliente(nome, funcao, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao className="bg-gradient-to-r from-gray-400 to-gray-700"
                       onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}

export default Formulario;