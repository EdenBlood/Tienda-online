// fetch de imágenes: usar URLs de Unsplash/Pexels/etc.
const sampleImages = [
  'https://images.unsplash.com/photo-1520974734058-5f2f4d8ca863', // ejemplo camiseta
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246', // pantalón
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf', // chaqueta
  'https://images.unsplash.com/photo-1514996937319-344454492b37', // accesorio
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff', // zapatos
  // podés añadir más
]

// productos
export const productsData = [
  {
    name: 'Camiseta básica blanca',
    description: 'Camiseta de algodón, corte clásico. Ideal para uso diario.',
    price: 19.99,
    stock: 100,
    labels: ['básico', 'algodón', 'unisex'],
    categoryId: 1,
    imagesUrl: [sampleImages[0]],
  },
  {
    name: 'Jean azul slim fit',
    description: 'Pantalón jean azul oscuro, corte slim, material elástico.',
    price: 49.99,
    stock: 50,
    labels: ['denim', 'azul', 'slim'],
    categoryId: 2,
    imagesUrl: [sampleImages[1]],
  },
  {
    name: 'Chaqueta de cuero negra',
    description:
      'Chaqueta de cuero sintético, cierres metálicos y forro interno.',
    price: 129.99,
    stock: 20,
    labels: ['cuero', 'negro', 'rock'],
    categoryId: 3,
    imagesUrl: [sampleImages[2]],
  },
  {
    name: 'Bufanda de lana',
    description: 'Bufanda gruesa de lana, perfecta para invierno.',
    price: 29.99,
    stock: 75,
    labels: ['lana', 'abrigo', 'invernal'],
    categoryId: 4,
    imagesUrl: [sampleImages[3]],
  },
  {
    name: 'Zapatillas deportivas blancas',
    description: 'Zapatillas cómodas para correr o uso urbano.',
    price: 89.99,
    stock: 40,
    labels: ['deporte', 'blanco', 'urbanas'],
    categoryId: 5,
    imagesUrl: [sampleImages[4]],
  },
  // agregá más productos similares para tener “muchos”
]
