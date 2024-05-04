import { useLoaderData } from "react-router-dom"
import SectionTitle from "./SectionTitle"
import ProductGrid from "./ProductGrid"

function FeaturedProducts() {
  return (
    <div className="pt-24">
        <SectionTitle text="Featured Products"/>
        <ProductGrid/>
    </div>
  )
}

export default FeaturedProducts