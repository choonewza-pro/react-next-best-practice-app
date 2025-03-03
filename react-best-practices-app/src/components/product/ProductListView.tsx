/* eslint-disable @typescript-eslint/no-explicit-any */
// presentation component
// #17 แยก Component ให้เป็น Single Responsibility Principle (SRP)
type ProductListViewProp = {
    product: any[]
}

const ProductListView = ({ product }: ProductListViewProp) => {
  return (
    <div>
        {
            product?.map((item: any) => {
            return <p key={item.id}>{item.id} - {item.title}</p>
            })
        }
    </div>
  )
}

export default ProductListView