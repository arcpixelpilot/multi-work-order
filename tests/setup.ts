import { db } from "~/server/db";

beforeAll(async () => {
  await db.$connect();
});

afterEach(async () => {
  await db.workOrderVendor.deleteMany();
  await db.workOrder.deleteMany();
  await db.vendor.deleteMany();
  await db.customer.deleteMany();
});

afterAll(async () => {
  await db.$disconnect();
});
