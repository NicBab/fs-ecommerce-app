import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import { ProductCard } from "../../components/components.index/index"
import "./Shop.scss"

const Shop = () => {
  const { products } = useContext(ProductsContext)
  return (
    <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Shop