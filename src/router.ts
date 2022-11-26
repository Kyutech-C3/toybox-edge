import { Env } from ".";
import { userRewriter } from "./injectors/users";
import { workRewriter } from "./injectors/works";

/**
 * Cloudflare Workersコンソール上でのパスルーティングを用いてパスを設定するが、
 * work_idの取得等のためにココでもパスを検証する
 *
 * @param pathname
 */
export async function route(
  env: Env,
  req: Request,
  originRes: Response
): Promise<Response | null> {
  const pathname = new URL(req.url).pathname;

  if (pathname.indexOf("/works/") === 0) console.log(pathname);
  // works
  const workScan = /^\/works\/([A-z0-9-]+)/.exec(pathname);
  if (workScan && workScan[1]) {
    console.debug("rewrite work response");
    // GET /works/{works_id}
    return await workRewriter({
      env,
      pathname,
      req,
      originRes,
      params: {
        id: workScan[1],
      },
    });
  }

  // users
  const userScan = /^\/users\/([A-z0-9-]+)\/?$/.exec(pathname);
  if (userScan && userScan[1]) {
    console.debug("rewrite user response");
    // GET /works/{works_id}
    return await userRewriter({
      env,
      pathname,
      req,
      originRes,
      params: {
        id: userScan[1],
      },
    });
  }

  return null;
}
