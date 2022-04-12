import PrismaClient from "@/backend/clients/prisma";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { getSession } from "next-auth/react";

export async function createTrpcContext({ req }: CreateNextContextOptions) {
  const session = await getSession({ req });
  const prisma = PrismaClient;
  return {
    prisma,
    session,
  };
}

export type TrpcRouterContextType = inferAsyncReturnType<
  typeof createTrpcContext
>;
