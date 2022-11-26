import { HTMLRewriterElementContentHandlers } from "@cloudflare/workers-types";
import { InjectorContext, ogRewriteHandlerFactory } from ".";
import { ApiClient, Work } from "../util/api";

export interface UserParams {
  id: string;
}

export async function userRewriter(ctx: InjectorContext<UserParams>) {
  const user = await new ApiClient(ctx.env.API_HOSTNAME).getUser(ctx.params.id);

  const { display_name, name, profile, avatar_url } = await new ApiClient(
    ctx.env.API_HOSTNAME
  ).getUser(ctx.params.id);

  const handlers = ogRewriteHandlerFactory({
    title: display_name || name,
    description: profile || "プロフィールがありません",
    imageURL:
      avatar_url ||
      "https://toybox.compositecomputer.club/_nuxt/img/ToyBoxlogo.21166b5.png",
    url: ctx.req.url,
  });

  return new HTMLRewriter().on("meta", handlers).transform(ctx.originRes);
}
