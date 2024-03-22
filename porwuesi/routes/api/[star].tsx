import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"

type Stars = {
  name:string,
  constellation: string,
};

export const handler: Handlers<Stars[]> = {
    GET: async (_req: Request, ctx: FreshContext<unknown, Stars[]>) => {
        const { star } = ctx.params;
        console.log(Deno.env.get("API_KEY"))
        const API_KEY = "cX6iJIULQKHNjfJdKGLFHw==Ygikb5prjtUsRRda"
        if (!API_KEY) {
          return new Response("Error - NINJA API KEY NOT FOUND", { status: 500 });
        }
        const url = "https://api.api-ninjas.com/v1/stars?name=" + star;
        try {
          const response = await axios.get<Stars[]>(url, {
            headers: {
              "X-Api-Key": API_KEY,
            },
          });
          if (response.data.length === 0) {
            return new Response("City not found", { status: 404 });
          }
          return ctx.render(response.data);
        } catch (error) {
          console.error(error);
          return new Response("Error", { status: 500 });
        }
      },
    };

export default function Home(props: PageProps<Stars[]>) {
  const mistar = props.data
  return (
    <>
    <div class= "position">
        {mistar.map((s) => <div ><p class= "text">{s.name}</p></div>)}
    </div>
    <div class= "valero-sama">
        {mistar.map((s) => <div class= "text"><p class = "text">{s.constellation}</p></div>)}
    </div>
    </>
  );
}