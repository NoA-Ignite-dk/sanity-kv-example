import { type NextRequest, NextResponse } from "next/server";
import Redirections from "../sanity/lib/repositories/Redirections";

export async function middleware(request: NextRequest) {
  const redirectPathname = await getRedirectionPathname(
    request.nextUrl.pathname
  );

  if (redirectPathname) {
    return NextResponse.redirect(new URL(redirectPathname, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they are meta files, `/robots.txt`
    // - … if they are assets, `/assets` or `/icon-...`
    // - … if they are internals`, `/_next` or `/_vercel`
    // - … sanity studio starts with `/studio`
    // - … if they are our paths, `/api`,
    "/((?!robots|assets|icon|favicon.ico|_next|_vercel|studio|api).*)",
  ],
};

async function getRedirectionPathname(
  pathname: string,
) {
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  const destinationPathname =
    (await Redirections.getDestination(pathname))
      ?.destination ?? "";
  return destinationPathname ? `${destinationPathname}` : "";
}
