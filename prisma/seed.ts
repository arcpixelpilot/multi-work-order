import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const customers = [
  {
    companyName: "Test Company",
    contactName: "Test Contact",
    addressLine1: "123 Test St",
    addressLine2: "Apt 1",
    city: "Test City",
    state: "Test State",
    zip: "12345",
    country: "Test Country",
    phone: "123-456-7890",
    email: "test@test.com",
  },
  {
    companyName: "Test Company 2",
    contactName: "Test Contact 2",
    addressLine1: "456 Test St",
    addressLine2: "Apt 2",
    city: "Test City 2",
    state: "Test State 2",
    zip: "67890",
    country: "Test Country 2",
    phone: "098-765-4321",
    email: "test2@test.com",
  },
];

const vendors = [
  {
    companyName: "Test Vendor",
    contactName: "Test Vendor Contact",
    addressLine1: "123 Test Vendor St",
    addressLine2: "Apt 1",
    city: "Test Vendor City",
    state: "Test Vendor State",
    zip: "12345",
    country: "Test Vendor Country",
    phone: "123-456-7890",
    email: "testvendor@test.com",
  },
  {
    companyName: "Test Vendor 2",
    contactName: "Test Vendor Contact 2",
    addressLine1: "456 Test Vendor St",
    addressLine2: "Apt 2",
    city: "Test Vendor City 2",
    state: "Test Vendor State 2",
    zip: "67890",
    country: "Test Vendor Country 2",
    phone: "098-765-4321",
    email: "testvendor2@test.com",
  },
];

const workOrders = [
  {
    nickName: "TestWorkOrder",
    scopeOfWork: "Test Scope of Work",
    budget: 1000,
    customerId: 1,
  },
  {
    nickName: "TestWorkOrder2",
    scopeOfWork: "Test Scope of Work 2",
    budget: 2000,
    customerId: 2,
  },
];

async function main() {
  await prisma.customer.createMany({
    data: customers,
  });

  await prisma.vendor.createMany({
    data: vendors,
  });

  await prisma.workOrder.createMany({
    data: workOrders,
  });
}


const seedFunc = main;

seedFunc()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
