import prisma from "@/backend/clients/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
  callbacks: {
    session: async ({ session, user }) => {
      session.userId = user.id as string;
      return Promise.resolve(session);
    },
  },
});
