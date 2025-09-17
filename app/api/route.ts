import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const products = await prisma.product.findMany()

    return NextResponse.json({ products }, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: 'Error al obtener los productos' },
      { status: 500 }
    )
  }
}
