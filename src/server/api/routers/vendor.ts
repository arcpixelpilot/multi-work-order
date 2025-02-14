import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const vendorRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ companyName: z.string().min(1), contactName: z.string().min(1), addressLine1: z.string().min(1), addressLine2: z.string().min(1), city: z.string().min(1), state: z.string().min(1), zip: z.string().min(1), country: z.string().min(1), phone: z.string().min(1), email: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      try {
        const vendor = await ctx.db.vendor.create({
          data: {
            companyName: input.companyName,
            contactName: input.contactName,
            addressLine1: input.addressLine1,
            addressLine2: input.addressLine2,
            city: input.city,
            state: input.state,
            zip: input.zip,
            country: input.country,
            phone: input.phone,
            email: input.email,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        });

        return vendor;
        
      } catch (error: unknown) {
        throw new Error(error instanceof Error ? error.message : "Failed to create vendor");
      }
    }),

  getWorkOrders: publicProcedure
    .input(z.object({ vendorId: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.workOrderVendor.findMany({
        where: { vendorId: input.vendorId },
        include: { workOrder: true },
      });
    }),
});
