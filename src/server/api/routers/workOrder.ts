import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const workOrderRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ nickName: z.string().min(1), scopeOfWork: z.string().min(1), budget: z.number(), customerId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const workOrder = await ctx.db.workOrder.create({
          data: {
            nickName: input.nickName,
            scopeOfWork: input.scopeOfWork,
            budget: input.budget,
            createdAt: new Date(),
            updatedAt: new Date(),
            customerId: input.customerId,
          },
        });

        return workOrder;
        
      } catch (error: unknown) {
        throw new Error(error instanceof Error ? error.message : "Failed to create work order");
      }
    }),
  
  get: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.workOrder.findMany({
      include: {
        vendors: {
          include: { vendor: true },
        },
      },
    });
  }),  
});
