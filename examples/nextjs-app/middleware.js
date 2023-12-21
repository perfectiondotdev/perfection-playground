// middleware.js

import { NextResponse } from "next/server";
// import { oversiteHelpers } from "app/_clients/oversiteHelpers";

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  //   console.log("Page ", request.nextUrl.pathname);
  //Fetch Perfection
  //   await oversiteHelpers.init("homepage");
  //console.log(oversiteHelpers);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
