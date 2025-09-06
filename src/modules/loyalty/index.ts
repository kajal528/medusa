import { Module } from "@medusajs/framework/utils"
import LoyaltyModuleService from "./service"

export const ORDER_LOYALTY_POINT_MODULE = "loyalty"

export default Module(ORDER_LOYALTY_POINT_MODULE, {
  service: LoyaltyModuleService,
})