import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],

 callbacks: {
  async jwt({ token, profile}) {

    if (profile) {
      token.username = (profile as any).login
    }
    return token
  },

  async session({ session, token }) {
    session.user.username = token.username as string
    return session
  },
},
});