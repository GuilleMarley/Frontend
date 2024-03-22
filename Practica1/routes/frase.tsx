import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Data = {
    data: string;
}

export const handler: Handlers = {
    GET:async (
        req:Request, 
        ctx: FreshContext<unknown,{Data}>,
        ) => {

        const response = await axios.get<Data>(
            `https://learnyourlesson.deno.dev/`,
          );
          const data = response.data;
           
        return ctx.render (data); 
        

    },
};

const Page = (props: PageProps<Data>) => {
    const data = props.data; 
    return (
        <body class="fondoFrase">
            <h1 class="tituloPagina">¡BIENVENIDO!</h1>
            <div class="container">

                <div class="porqueSi">
                    <h2 class="tituloPorqueSi">¿Hover?</h2>
                </div>

                <div class="stitch">
                    <h2 class="tituloFrase">Tu frase ganadora es:</h2>
                    <p>{data}</p> 
                </div>

                <div class ="jugamos">
                    <h2>¿Jugamos a un juego?</h2>
                    <p class="textoJuego">De los 24 botones uno refresca la pagina y otro te lleva a la principal, ¿los puedes encotrar?</p>
                    <div class="botones">
                    {Array.from({ length: 24}, (_, i) => (
                        i === 6 ? 
                        <a href="/frase" key={i} class="botonA botEstilo">Botón {i + 1}</a> :
                        i === 14 ? 
                        <a href="/" key={i} class="botonA botEstilo">Botón {i + 1}</a> :
                        <button key={i} class="botonTrol botEstilo">Botón {i + 1}</button>
                    ))}
                    </div>
                    
                </div>
            </div>
        </body>
    ); 
};

export default Page;