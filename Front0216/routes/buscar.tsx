import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";

type Character = {
    id: string;
    name: string;
}

export const handler: Handlers = {
    GET:async (
        req:Request, 
        ctx: FreshContext<unknown,{characters:Character[]; search:string}>,
        ) => {
        try{
        const url = new URL(req.url); 
        const search = url.searchParams.get("search"); 

        if(!search){
            return ctx.render({characters:[], search: ""});
        }

        const response = await axios.get<{results:Character[], error?: string}>(
            `https://rickandmortyapi.com/api/character/?name=${search}`,
          );
          const characters = response.data.results; 
        return ctx.render ({characters, search}); 
        }catch(e){
            if(e.message.includes("404")){
                return ctx.render({characters:[], search: ""});
            }
            return new Response ("Error inesperado",{status: 500}); 
        }

    },
};

const Page = (props: PageProps<{characters:Character[]; search:string}>,
    )=>{
    const characters = props.data.characters; 
    const search = props.data.search; 
    return (
        <body class="imagen">
        <div class= "stitch">
            <form method= "GET" action="/buscar">
                Introduce texto para buscar: 
                <input value={search} name="search" type="text"/>
                <button type="submit">Buscar</button>
            </form>

            {
            characters.length > 0 && characters.map((ch) => {
                return <div class="text"> {ch.name} </div>
            })}

        </div>
    </body>
    ); 
};

export default Page;