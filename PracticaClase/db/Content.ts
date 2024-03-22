import mongoose from "npm:mongoose";
import { Content } from "../types.ts";

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(Deno.env.get("MONGO_URL")!);
}

const schema = new mongoose.Schema<Content>({
    name: String,
    email: String,
    content: String,
});

export const ContentModel = mongoose.model<Content>("Content", schema);