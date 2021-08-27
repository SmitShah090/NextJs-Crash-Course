import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {

  const router = useRouter()

  const handle = () => {
    router.push("/product")
  }

  return (
    <div className={styles.container}>
      <h5>
        <Link href="/blog">
          Blog
        </Link>
      </h5>
      <h5>
        <Link href="/product">
          Product
        </Link>
      </h5>
      Home Page
      <button onClick={handle}>
        Place an Order
      </button>
    </div>
  )
}
