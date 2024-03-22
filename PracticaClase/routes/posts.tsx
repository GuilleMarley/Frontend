import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Content } from "../types.ts";
import { ContentModel } from "../db/Content.ts";
import PostList from "../components/listPosts.tsx";

type Data = {
  contacts: Array<Content>;
};

export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const posts = await ContentModel.find();
    return ctx.render({ posts });
  },
};

const Page = () => {
    return (
      < PostList />
    );
  };

  export default Page;