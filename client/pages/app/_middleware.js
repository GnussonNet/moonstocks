import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req, event) {
  const res = { isSignedIn: true, session: { firstName: 'first', lastName: 'last' } };
  if (res && res.isSignedIn) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect('/signin');
  }
}