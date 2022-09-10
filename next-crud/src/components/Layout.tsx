import Titulo from "./Titulo";

interface LayoutProps {
    titulo: string
    children: any
}

function Layout(props: LayoutProps) {
    return (
        <div className={`
             w-11/12 lg:w-3/5 xl:w-3/5 2xl:w-3/5 
             flex flex-col bg-white text-gray-800 rounded-md`}>
            
            <Titulo>{props.titulo}</Titulo>
            <div className="p-2 lg:p-3 xl:p-4 2xl:p-6">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;