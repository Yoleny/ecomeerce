'use client'

import { Producto } from "@/Modelos/Producto"
import { createContext } from "react"

export const ContextProducto = createContext({
    productos: [] as Producto[],
    setProductos: (producto:Producto[] ) =>{},
    productoCarrito: [] as Producto[],
    setProductoCarrito: (producto:Producto[] ) =>{}
})