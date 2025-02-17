import { PrismaClient } from "@prisma/client/extension";
import { workOrderVendorRouter } from "~/server/api/routers/workOrderVendor";

const createInnerTRPCContext = () => {
  return {
    db: new PrismaClient({ log: ["query", "error", "warn"] }),
  };
};

jest.mock("@t3-oss/env-nextjs", () => ({
  createEnv: jest.fn(() => ({
    server: {
      DATABASE_URL: "test-database-url",
      NODE_ENV: "test"
    },
    runtimeEnv: {
        DATABASE_URL: "test-database-url",
        NODE_ENV: "test"
    },
    emptyStringAsUndefined: true,
  })),
}));

describe("WorkOrderVendor API", () => {
  let ctx: ReturnType<typeof createInnerTRPCContext>;
  let caller: ReturnType<typeof workOrderVendorRouter.createCaller>;

  beforeAll(() => {
    ctx = createInnerTRPCContext();
    caller = workOrderVendorRouter.createCaller(ctx as any);
  });

  test("Assign a vendor to a work order", async () => {
    const response = await caller.assignVendor({
      workOrderId: 1,
      vendorId: 101,
    });

    expect(response).toHaveProperty("workOrderId", 1);
    expect(response).toHaveProperty("vendorId", 101);
  });

  test("Get assigned vendors for a work order", async () => {
    const response = await caller.getAssignedVendors({
      workOrderId: 1,
    });

    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });

  test("Reassign vendor for a work order", async () => {
    const response = await caller.reassignVendor({
      workOrderId: 1,
      oldVendorId: 101,
      newVendorId: 102,
    });

    expect(response).toHaveProperty("vendorId", 102);
  });

  test("Remove a vendor from a work order", async () => {
    const response = await caller.removeVendor({
      workOrderId: 1,
      vendorId: 102,
    });

    expect(response).toHaveProperty("message", "Vendor removed from work order successfully.");
  });
});
