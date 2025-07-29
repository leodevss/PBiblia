import { Link } from "react-router-dom";
import { useState } from "react"; // Importe o useState para o menu móvel

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-600 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="hover:text-amber-400 transition-colors duration-300">
                        Biblia
                    </Link>
                </div>

                {/* Navegação para Desktop */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link to="/ler-biblia" className="py-2 px-4 hover:bg-gray-700 rounded-md transition-colors duration-300 ">
                        Ler a Bíblia
                    </Link>
                    <Link to="/duvidas" className="py-2 px-4 hover:bg-gray-700 rounded-md transition-colors duration-300">
                        Tirar Dúvidas
                    </Link>
                    <Link to="/vantagens" className="py-2 px-4 hover:bg-gray-700 rounded-md transition-colors duration-300">
                        Vantagens
                    </Link>
                </nav>

                {/* Botão do Menu Móvel */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu Móvel */}
            {isMenuOpen && (
                <nav className="md:hidden bg-gray-800 pb-4">
                    <Link to="/ler-biblia" className="block text-center py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                        Ler a Bíblia
                    </Link>
                    <Link to="/duvidas" className="block text-center py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                        Tirar Dúvidas
                    </Link>
                    <Link to="/vantagens" className="block text-center py-2 px-4 text-sm hover:bg-gray-700" onClick={() => setIsMenuOpen(false)}>
                        Vantagens
                    </Link>
                </nav>
            )}
        </header>
    )
}