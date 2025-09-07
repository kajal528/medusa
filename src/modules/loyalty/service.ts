// src/modules/loyalty/service.ts
import { MedusaService } from "@medusajs/framework/utils";

class LoyaltyModuleService extends MedusaService({}) {
  calculateLoyaltyPoints(total: number): number {
    return Math.floor(total / 10); // 1 point per $10 spent
  }
}

export default LoyaltyModuleService;
