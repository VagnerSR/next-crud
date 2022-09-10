interface BotaoProps {
    children: any
    className?: string
    onClick?: () => void
}

function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick}
                className={`
                px-2 py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2 2xl:px-4 2xl:py-2
                text-white rounded-md
                ${props.className}`}>
            {props.children}
        </button>
    );
}

export default Botao;