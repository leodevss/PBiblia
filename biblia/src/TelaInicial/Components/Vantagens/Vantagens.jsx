import { Link } from "react-router-dom";

export default  function Vantagens() {
    return(
            <section>
                <div className="flex flex-col-reverse bg-yellow-200 lg:flex-row p-[1.4rem] gap[1rem] justify-between]"  >
                    <div className="lg: text-center">
                         <h2 className="lg: text-[2.0] pb-[0.4rem] font-bold"> Você tem Dúvidas sobre a Bíblia?</h2>
                         <p>Não entende o que quer dizer as coisas que estão escrito na Bíblia?
                         Então tire suas dúvidas aqui na nossa ferramenta de tirar dúvidas bíblicas.</p>
                    </div>
                <img src="/duvidas.jpg" alt="homem com duvidas" 
                className="lg:w-2/5 rounded-md"/>
                </div>
                
                <div>
                    <div className="flex flex-col-reverse lg:flex-row p-[1.4rem] gap[1rem] justify-between">
                         <div className="lg: text-[2.0] pb-[0.4rem] font-bold"></div>
                         <h2>Conecte com Deus agora mesmo!</h2>
                         <p>Leia a Bíblia agora mesmo através de nosso site 
                         e veja o que Deus quer falar com você </p>
            
                     </div>
                <img src="/bibliaopeen.jpg" alt="biblia aberta"  
                className="lg:w-2/5 rounded-md"/>
                </div>
            
             
                <div>
                    <div>
                         <h2>
                         <p>
                         </p>
            
                         </h2>
            
                </div>
                <img src="" alt="" />
                    </div>

            
    </section>
    )

}