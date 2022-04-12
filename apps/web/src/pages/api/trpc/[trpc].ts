import { appRouter } from "@/backend/router";
import { createTrpcContext } from "@/backend/router/context";
import * as trpcNext from "@trpc/server/adapters/next";

// Primary api for interacting with "server side"
// Read more: https://trpc.io
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createTrpcContext,
});
