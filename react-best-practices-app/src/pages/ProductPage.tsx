import ProductListView from "../components/product/ProductListView";
import { useProduct } from "../hooks/useProduct";

// container component
const ProductPage = () => {
  // #18 แยก Logic ออกจาก UI ด้วย Custom Hooks
  const { product, isLoading, error } = useProduct();

  if (isLoading) return <div style={{color: 'green'}}>กำลังโหลดข้อมูล...</div>

  // #19 ระวังการใช้ Inline Styles
  if (error) return <div style={{color: 'red', backgroundColor: 'black'}}>{error.message}</div>

  return <ProductListView product={product!} />
}

export default ProductPage