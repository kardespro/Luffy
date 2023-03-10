import { withIronSession } from 'next-iron-session';

export default function withSession(handler) {
    return withIronSession(handler, {
        password: 'kPb18vU~y=iP>W2L1f%X2~+.a0AMXNkb5VxLfB}:Nn?8Ntk0T1',
        cookieName: 'clewy-auth-nego/session',
        maxAge: 2147483647,
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        }
    });
};