import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { BooksResponse, Book } from "../types.ts";
import Books from "../components/books.tsx";

export const handler: Handlers = {
    GET: async(_:unknown, ctx:FreshContext) =>{
        const API_URL = Deno.env.get("API_URL"); 
        const API_TOKEN = Deno.env.get("API_TOKEN"); 

        if (!API_TOKEN || !API_URL){
            return new Response ("No se encuentra API_TOKEN ni API_URL",{status: 500}); 
        }

        const response = await fetch (`${API_URL}/book`,{
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`
            }
        })

        const data:BooksResponse = await response.json(); 
        debugger;
        return ctx.render(data); 
    }

}

const Page = (props:PageProps<BooksResponse>) =>{
    const books:Book[] = props.data.docs; 
    return (
        <Books docs={books} />

    )
}

export default Page;
