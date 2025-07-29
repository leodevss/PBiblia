import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="bg-blue-900 text-white">
            <div className="flex text-2xl bg-amber-700 felx-col lg: p-5 justify-between items-center font-bold  text-center underline-offset-auto">
                <h2 className=" text-amber-400 text 3xl">BIBLIA</h2>
                <nav className="hidden, lg: flex gap-6">
                    <Link>Ler a Biblia</Link>
                    <Link>Tirar Dúvidas</Link>
                    <Link>Vantagens</Link>
                </nav>
            </div>
        </header>
    )
}