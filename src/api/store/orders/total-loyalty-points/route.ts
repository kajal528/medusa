import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const query = req.scope.resolve("query");

  // Fetch all orders
  const { data: orders } = await query.graph({
    entity: "order",
    fields: ["id", "total"],
  });

  // Calculate and sum loyalty points
  const total_loyalty_points = orders.reduce((sum, order) => {
    return sum + Math.floor(order.total / 10);
  }, 0);

  res.json({ total_loyalty_points });
}
