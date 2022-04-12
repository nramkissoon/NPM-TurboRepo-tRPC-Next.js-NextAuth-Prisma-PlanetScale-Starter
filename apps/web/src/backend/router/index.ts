import * as trpc from "@trpc/server";
import { AuthenticatedTrpcRouterContextType } from "./context";

// Primary api for interacting with "server side"
// Read more: https://trpc.io
export const appRouter = trpc.router<AuthenticatedTrpcRouterContextType>();

// export type definition of API
export type AppRouter = typeof appRouter;
