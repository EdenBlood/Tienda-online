import { Product } from '@prisma/client'
import Image from 'next/image'

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)

  const data: Product[] = await res.json()

  return (
    <main className="mx-auto max-w-6xl">
      <h2 className="text-4xl font-bold">Nuestros Productos</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((product) => (
          <article key={product.id} className="h-100 w-full bg-white shadow-md">
            <div className="relative h-50 w-full">
              <Image fill alt={product.name} src={product.imagesUrl[0]} />
            </div>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-sm text-pretty">{product.description}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
