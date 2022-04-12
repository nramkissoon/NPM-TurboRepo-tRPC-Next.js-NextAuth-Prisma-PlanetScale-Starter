import * as trpc from "@trpc/server";
import { TrpcRouterContextType } from "./context";

// for routes requiring authentication, create a router with this function and merge it into the main appRouter
// Merging: https://trpc.io/docs/merging-routers
export function createProtectedRouter() {
  return trpc.router<TrpcRouterContextType>().middleware(({ ctx, next }) => {
    if (!ctx.session) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        // infers that `session` is non-nullable to downstream resolvers
        session: ctx.session,
      },
    });
  });
}
