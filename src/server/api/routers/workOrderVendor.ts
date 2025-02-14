import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const workOrderVendorRouter = createTRPCRouter({
  assignVendor: publicProcedure
    .input(z.object({
      workOrderId: z.number(),
      vendorId: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const existingAssignment = await ctx.db.workOrderVendor.findFirst({
          where: {
            workOrderId: input.workOrderId,
            vendorId: input.vendorId,
          },
        });

        if (existingAssignment) {
          throw new Error("This vendor is already assigned to the work order.");
        }

        const assignment = await ctx.db.workOrderVendor.create({
          data: {
            workOrderId: input.workOrderId,
            vendorId: input.vendorId,
            assignedAt: new Date(),
          },
        });

        return assignment;
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to assign vendor");
      }
    }),

  reassignVendor: publicProcedure
    .input(z.object({
      workOrderId: z.number(),
      oldVendorId: z.number(),
      newVendorId: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.workOrderVendor.deleteMany({
          where: {
            workOrderId: input.workOrderId,
            vendorId: input.oldVendorId,
          },
        });

        const newAssignment = await ctx.db.workOrderVendor.create({
          data: {
            workOrderId: input.workOrderId,
            vendorId: input.newVendorId,
            assignedAt: new Date(),
          },
        });

        return newAssignment;
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to reassign vendor");
      }
    }),

  getAssignedVendors: publicProcedure
    .input(z.object({ workOrderId: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.workOrderVendor.findMany({
        where: { workOrderId: input.workOrderId },
        include: { vendor: true },
      });
    }),

  removeVendor: publicProcedure
    .input(z.object({ workOrderId: z.number(), vendorId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db.workOrderVendor.deleteMany({
          where: {
            workOrderId: input.workOrderId,
            vendorId: input.vendorId,
          },
        });

        return { message: "Vendor removed from work order successfully." };
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Failed to remove vendor");
      }
    }),
});
