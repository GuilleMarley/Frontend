import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Heroes from "../components/Heroes.tsx";
import axios from "npm:axios"
import { Hero, HeroesResponse } from "../heroes.ts";

export const handler: Handlers<HeroesResponse> = {
  //GET: async (_req: Request, ctx: FreshContext<unknown, HeroesResponse>) => {
  //  const heroes = await fetch("https://supermondongo.deno.dev/");
  //  const data: HeroesResponse = await heroes.json();
  //  return ctx.render(data)
  //},
  GET: async (_req: Request, ctx: FreshContext<unknown, Hero[]>) => {
    const response = await axios.get<Hero[]>("https://supermondongo.deno.dev/")
    return ctx.render(response.data)
    }
}

function Home(props: PageProps<HeroesResponse>){
  return (
    <Heroes heroes={props.data} />
  )
}

export default Home;