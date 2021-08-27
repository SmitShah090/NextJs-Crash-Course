import Link from 'next/link'
const index = ({productId = 100}) => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h2>
                <Link href="/product/1">
                    <a>Product 1</a>
                </Link>
            </h2>
            <h2>
                <Link href="/product/2">
                    <a>Product 2</a>
                </Link>
            </h2>
            <h2>
                <Link href="/product/3">
                    <a>Product 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/product/${productId}`}>
                    <a>Product {productId}</a>
                </Link>
            </h2>
        </div>
    )
}

export default index
