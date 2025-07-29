import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="bg-[url('/biblia.jpg')]  h-[30vh] flex justify-center items-center">
            <div className="bg-yellow-100/50 w-4-5 h-4-5 p-4 text-center ">
            <h2 className="text-3xl font-bold">Ajunte tesouros no céu agora mesmo!</h2>
            <p className="text-xl">Leia a Bíblia agora e descubra como! Ou se preferir tire suas dúvidas bíblicas agora mesmo!</p>
            <div className="flex flex-col text-[1.5rem] gap-[0.5rem]">
            <Link className="bg-green-400">Ler a Bíblia</Link>
            <Link className="bg-green-400">Tirar suas Dúvidas Bíblicas</Link>
            </div>
        </div>
        </section>
    )
}