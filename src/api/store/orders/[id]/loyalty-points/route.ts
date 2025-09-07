// src/api/store/orders/[id]/loyalty-points/route.ts
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import LoyaltyModuleService from "../../../../../modules/loyalty/service"

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const { id: order_id } = req.params
  const query = req.scope.resolve("query")
  const loyaltyModuleService: LoyaltyModuleService = req.scope.resolve("loyalty")

  // Retrieve order total
  const { data: orders } = await query.graph({
    entity: "order",
    fields: ["id", "total"],
    filters: { id: order_id },
  }, { throwIfKeyNotFound: true })

  if (!orders.length) {
    return res.status(404).json({ message: "Order not found" })
  }

  const order = orders[0]
  const loyalty_points = loyaltyModuleService.calculateLoyaltyPoints(order.total)

  res.json({
    order_id: order.id,
    loyalty_points,
  })
}