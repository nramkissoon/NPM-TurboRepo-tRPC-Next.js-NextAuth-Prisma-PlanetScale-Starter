import * as trpc from "@trpc/server";
import { AuthenticatedTrpcRouterContextType } from "./context";

export function createProtectedRouter() {
  return trpc
    .router<AuthenticatedTrpcRouterContextType>()
    .middleware(({ ctx, next }) => {
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
