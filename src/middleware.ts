import { NextRequest, NextResponse } from "next/server";
import { IEnv } from "./types/env";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  const env: IEnv = {
    HELLO_MESSAGE: process.env.HELLO_MESSAGE,
    TIME: new Date().toISOString(),
  };

  response.cookies.set(
    "env",
    Buffer.from(JSON.stringify(env)).toString("base64")
  );
  response.headers.set("cache-control", "no-store");

  return response;
};
