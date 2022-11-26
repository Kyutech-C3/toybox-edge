import { InjectorContext, ogRewriteHandlerFactory } from ".";
import { ApiClient } from "../util/api";

export interface WorkParams {
  id: string;
}

export async function workRewriter(ctx: InjectorContext<WorkParams>) {
  const {
    title,
    description,
    thumbnail: { url: imageURL },
  } = await new ApiClient(ctx.env.API_HOSTNAME).getWork(ctx.params.id);

  const handlers = ogRewriteHandlerFactory({
    title,
    description,
    imageURL,
    url: ctx.req.url,
  });

  return new HTMLRewriter().on("meta", handlers).transform(ctx.originRes);
}
