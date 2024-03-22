import { FreshContext, Handlers } from "$fresh/server.ts";
import { Content } from "../types.ts";
import { ContentModel } from "../db/Content.ts";
import AddContent from "../components/AddContent.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        name: form.get("title"),
        email: form.get("author"),
        content: form.get("content"),
      };

      await ContentModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    < AddContent />
  );
};

export default Page;