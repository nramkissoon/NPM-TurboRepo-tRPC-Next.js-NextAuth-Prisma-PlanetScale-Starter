import * as trpc from "@trpc/server";
import { z } from "zod";
import { TrpcRouterContextType } from "./context";

// Primary api for interacting with "server side"
// Read more: https://trpc.io
export const appRouter = trpc.router<TrpcRouterContextType>().query("hello", {
  input: z
    .object({
      text: z.string().nullish(),
    })
    .nullish(),
  async resolve({ ctx, input }) {
    return {
      greeting: `hello ${input?.text ?? "world"}`,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;
