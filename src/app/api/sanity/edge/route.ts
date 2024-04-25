import { type NextRequest } from "next/server";
import Redirections from "../../../../../sanity/lib/repositories/Redirections"
import { ResponseWithBody, ResponseWithError } from "utils/Api";

/**
 * @see https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes
 * 
 * # Edge Runtime
 * Edge handlers are deployed to a globally distributed network of servers(network edge), and are executed close to the end user. 
 * They are ideal for handling requests that require low latency, such as API requests, redirects, and edge caching.
 * 
 * Pros of Next.js Edge Runtime:
 * 1. Improved Performance and Reduced Latency - of end user experience
 * 2. Scalability: Edge functions can scale automatically based on demand without the need for manual intervention
 * 3. Enhanced Security: Since the logic is distributed and isolated in different geographical locations,
 *     it can potentially enhance the security of applications by localizing and containing attacks or breaches.
 * 
 * Cons of Next.js Edge Runtime:
 * 1. Complexity in Debugging: Since the logic is distributed across multiple locations, debugging can be complex.
 * 2. Limited Compatibility: Not all Node.js runtime is supported in the Edge runtime.  
 */
export const runtime = "edge";

/**
 *
 * @see http://localhost:3000/api/sanity/edge
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
