// src/modules/loyalty/service.ts
import { MedusaError, MedusaService } from "@medusajs/framework/utils"
import OrderLoyaltyPoint from "./models/order-loyalty-point"
import { InferTypeOf } from "@medusajs/framework/types"

type OrderLoyaltyPointType = InferTypeOf<typeof OrderLoyaltyPoint>

class LoyaltyModuleService extends MedusaService({
  OrderLoyaltyPoint,
}) {
  async calculateAndSaveOrderPoints(orderId: string, total: number): Promise<OrderLoyaltyPointType> {
    const points = Math.floor(total / 10) // 1 point per $10 spent

    // Check if already exists
    const existing = await this.listOrderLoyaltyPoints({ order_id: orderId })
    if (existing.length > 0) {
      return await this.updateOrderLoyaltyPoints({
        id: existing[0].id,
        points,
      })
    }
    return await this.createOrderLoyaltyPoints({
      order_id: orderId,
      points,
    })
  }

}

export default LoyaltyModuleService
