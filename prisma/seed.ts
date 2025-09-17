import { prisma } from '../src/lib/prisma'
import { productsData } from './data'

async function main() {
  console.log('Seeding database...')

  // Limpiar
  // await prisma.category.deleteMany()
  // await prisma.product.deleteMany()

  // Categorías
  await prisma.category.createMany({
    data: [
      { name: 'Camisetas', imageUrl: '' },
      { name: 'Pantalones', imageUrl: '' },
      { name: 'Chaquetas', imageUrl: '' },
      { name: 'Accesorios', imageUrl: '' },
      { name: 'Zapatos', imageUrl: '' },
    ],
  })

  // Productos
  for (const product of productsData) {
    await prisma.product.create({
      data: product,
    })
  }

  console.log('Seed completo')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
