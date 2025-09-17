export default function Header() {
  return (
    <header className="bg-orange-600 py-4 text-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-extrabold">Tienda Online</h1>

        <nav>
          <ul className="flex gap-4 font-bold">
            <li>Contacto</li>
            <li>Carrito</li>
            <li>Productos</li>
            <li>Inicio</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
