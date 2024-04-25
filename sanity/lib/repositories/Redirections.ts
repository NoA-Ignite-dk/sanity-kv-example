import { groq } from "next-sanity";
import { client } from "../client";

export default abstract class Redirections {
  /**
   * Fetches the first page object with exact pathname match, nulls if 0 objects found.
   */
  public static getDestination(source: string) {
    const pagesGetOneQuery = groq`
      *[_type == "redirection" && source == $source] {
        destination,
      }[0]`;

    return client.fetch<destinationResult | null>(
      pagesGetOneQuery,
      { source },
    );
  }

  public static getAll() {
    const pagesGetAllQuery = groq`
      *[_type == "redirection"] {
        source,
        destination,
      }`;

    return client.fetch<redirectionResult[]>(
      pagesGetAllQuery,
    );
  }
}

type destinationResult = {
  destination: string;
};

type redirectionResult = {
  source: string;
  destination: string;
};
