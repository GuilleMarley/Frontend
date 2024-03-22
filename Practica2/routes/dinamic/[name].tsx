import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import IndividualHero from "../../components/IndividualHero.tsx";
import Heroes from "../../components/Heroes.tsx"
import { Hero, HeroesResponse } from "../../heroes.ts";


export const handler: Handlers<HeroesResponse> = {

  GET: async (_req: Request, ctx: FreshContext<unknown, Hero[]>) => {
    const { name } = ctx.params;
    const heroes = await fetch(`https://supermondongo.deno.dev/${name}`);
    const data: Hero[] = await heroes.json();
    return ctx.render(data)
  }
}

function Home(props: PageProps<Hero[]>){
  const heroes:Hero[] = props.data;
  return (
    <Heroes heroes={heroes} />
  )
}

export default Home;