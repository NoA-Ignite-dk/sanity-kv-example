import { NextResponse } from "next/server";

export function ResponseWithError(e: unknown){
  return new NextResponse(
    JSON.stringify({
      error: e instanceof Error ? e.message : e,
    }),
    {
      status: 500,
    },
  );
}

export function ResponseWithBody(body: unknown){
  return new NextResponse(
    JSON.stringify(body),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}