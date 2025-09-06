import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading, Text } from "@medusajs/ui"
import { useEffect, useState } from "react"

const TotalLoyaltyPointsPage = () => {
  const [points, setPoints] = useState<number>(0)

  useEffect(() => {
    fetch("/store/orders/total-loyalty-points", {
      headers: {
        "x-publishable-api-key": "pk_18b1678c37eb60f1482b3daa43ccabfafb16c584484117ce155b204537bc2c30"
      }
    })
      .then(res => res.json())
      .then(res => setPoints(res.total_loyalty_points))
  }, [])

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Total Loyalty Points</Heading>
      </div>
      <div className="px-6 py-4">
        <Text>
          {points !== 0 ? `Total Loyalty Points: ${points}` : "No Loyalty Points to show."}
        </Text>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Total Loyalty Points",
  nested: "/orders", 
})

export default TotalLoyaltyPointsPage