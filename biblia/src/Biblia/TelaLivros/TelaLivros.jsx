import { useEffect, useState } from "react"

export default function TelaLivros() {

    const [livros, setLivros] = useState([])

    const pegaLivros = async () => {
        try {
            const response = await fetch("https://biblia-api-production-2063.up.railway.app/livros/all", {
                method: "GET"
            })

            const data = await response.json()
            setLivros(data)
        } catch (e) {
            console.error("Erro ao buscar livros:", e)
        }
    }

    useEffect(() => {
        pegaLivros()
    }, [])

    return (
        <section>
            <h2>Livros da Bíblia</h2>
            <ul>
                {livros.map(livro => <li key={livro.id}>{livro.name}</li>)}
            </ul>
        </section>
    )
}