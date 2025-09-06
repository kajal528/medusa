import { model } from "@medusajs/framework/utils"

const OrderLoyaltyPoint = model.define("order_loyalty_point", {
  id: model.id().primaryKey(),
  order_id: model.text().unique("IDX_LOYALTY_ORDER_ID"),
  points: model.number().default(0),
})

export default OrderLoyaltyPoint