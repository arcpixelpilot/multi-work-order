-- CreateTable
CREATE TABLE "WorkOrderVendor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workOrderId" INTEGER NOT NULL,
    "vendorId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WorkOrderVendor_workOrderId_fkey" FOREIGN KEY ("workOrderId") REFERENCES "WorkOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WorkOrderVendor_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "WorkOrderVendor_workOrderId_idx" ON "WorkOrderVendor"("workOrderId");

-- CreateIndex
CREATE INDEX "WorkOrderVendor_vendorId_idx" ON "WorkOrderVendor"("vendorId");

-- CreateIndex
CREATE UNIQUE INDEX "WorkOrderVendor_workOrderId_vendorId_key" ON "WorkOrderVendor"("workOrderId", "vendorId");
