import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="relative bg-[url('/bibliaa.jpg')] bg-cover bg-center h-[70vh] flex justify-center items-center text-white">
            {/* Overlay escuro para melhor contraste */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Conteúdo do Banner */}
            <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                    Ajunte tesouros no céu agora mesmo!
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
                    Leia a Bíblia agora e descubra como! Ou se preferir, tire suas dúvidas bíblicas agora mesmo!
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to={"/biblia/livros"}
                        className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                        Ler a Bíblia
                    </Link>
                    <Link
                        to="/duvidas"
                        className="bg-transparent hover:bg-white/20 border-2 border-amber-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                        Dúvidas Bíblicas
                    </Link>
                </div>
            </div>
        </section>
    );
}