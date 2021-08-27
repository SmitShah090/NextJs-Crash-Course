function ProductList ({products}) {
    return(
        <div>
            <h1>List of Products</h1>
            {products.map(product => {
                return(
                    <div key={product.id}>
                        <h2>
                            {product.id} {product.title} {product.description}
                        </h2>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    return{
        props: {
            products: data
        },
        revalidate: 10
    }
}