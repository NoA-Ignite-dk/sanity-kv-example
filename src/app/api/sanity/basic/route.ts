import { type NextRequest } from "next/server";
import Redirections from "../../../../../sanity/lib/repositories/Redirections"
import { ResponseWithBody, ResponseWithError } from "utils/Api";

/**
 *
 * @see http://localhost:3000/api/sanity/basic
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
