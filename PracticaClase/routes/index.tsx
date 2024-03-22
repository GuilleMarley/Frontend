import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

export default function Home(props: PageProps<Data>) {
  return (
    <div>
      <h1>Welcome to the main page</h1>
      <a href="/add" class="button">Add</a>
      <a href="/posts" class="button">Posts</a>
    </div>
  );
}