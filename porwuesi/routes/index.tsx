import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"

type Stars = {
  name:string,
  constellation: string,
};

export const handler: Handlers<Stars[]> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Stars[]>) => {
    try{
      const { star } = ctx.params;
      const API_KEY = await Deno.env.get("API_KEY");
      const API_URL:string = await Deno.env.get("API_URL")
      const url = API_URL + "stars?name=" + star
      
      const response = await axios.get<Stars[]>(url, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }); 
      return ctx.render(response.data)
    }catch (error) {
      console.error(error);
      return new Response("Error", { status: 500 });
    }
  },
};

export default function Home(props: PageProps<Stars[]>) {
  const mistar = props.data
  return (
    <div>
      {mistar.map((s) => <div><p>{s.name}</p><p>{s.constellation}</p></div>)}
    </div>
  );
}