import { type NextRequest } from "next/server";
import Redirections from "../../../../../sanity/lib/repositories/Redirections"
import { ResponseWithBody, ResponseWithError } from "utils/Api";

/**
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 * 
 * Good to know: The new model in the app directory favors granular caching control at the fetch request level over the binary all-or-nothing model of getServerSideProps and getStaticProps at the page-level in the pages directory. 
 * The dynamic option is a way to opt back in to the previous model as a convenience and provides a simpler migration path.
 * 
 * 'force-dynamic': Force dynamic rendering, which will result in routes being rendered for each user at request time. This option is equivalent to:
 *  - getServerSideProps() in the pages directory.
 *  - Setting the option of every fetch() request in a layout or page to { cache: 'no-store', next: { revalidate: 0 } }.
 *  - Setting the segment config to export const fetchCache = 'force-no-store'
 * 
 * For dynamic rendering, @see https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering
 * 
 */
export const dynamic = "force-dynamic";

/**
 *
 * @see http://localhost:3000/api/sanity/dynamic
 */
export async function GET(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key")?? "";

    const start = new Date().getTime();
    const res = await Redirections.getDestination(key);
    const end = new Date().getTime();

    return ResponseWithBody({
        res,
        timediff: end - start,
        timestamp: new Date().getTime(),
      });
  } catch (e: unknown) {
    return ResponseWithError(e);
  }
}
