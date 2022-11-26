import { Env } from "..";
import { HTMLRewriterElementContentHandlers } from "@cloudflare/workers-types";

export interface InjectorContext<EntityParams> {
  env: Env;
  pathname: string;
  req: Request;
  originRes: Response;
  params: EntityParams;
}

export interface OGParams {
  title?: string;
  siteName?: string;
  description?: string;
  url?: string;
  imageURL?: string;
}

export function ogRewriteHandlerFactory(
  params: OGParams
): HTMLRewriterElementContentHandlers {
  return {
    element(e) {
      // <meta property="og:" content="..." />
      const property = e.getAttribute("property");

      if (property === "og:title" && params.title) {
        e.setAttribute("content", "ToyBox | " + params.title);
        return;
      }

      // <meta name="description" content="..." /> のタグも同時に置換
      if (
        (property === "og:description" ||
          e.getAttribute("name") === "description") &&
        params.description
      ) {
        e.setAttribute("content", params.description);
        return;
      }

      if (property === "og:image" && params.imageURL) {
        e.setAttribute("content", params.imageURL);
        return;
      }

      if (property === "og:url" && params.url) {
        e.setAttribute("content", params.url);
        return;
      }
    },
  };
}
