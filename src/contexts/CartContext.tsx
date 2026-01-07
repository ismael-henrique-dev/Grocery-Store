import { createContext, useEffect, useState } from 'react'
import { StorageService } from '../services/storage'

type CartContextType = {
  getItems: () => CartItem[]
  addItemToCart: (item: CartItem) => void
  updateItemQuantity: (itemId: number, quantity: number) => void
  toggleItemSelection: (itemId: number) => void
  deleteItemFromCart: (itemId: number) => void
  deleteItems: () => void
  totalQuantity: number
  totalVolumes: number
  totalPrice: number
}

export const CartContext = createContext({} as CartContextType)

const storage = new StorageService()

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const totalQuantity = items
    .filter((item) => item.isSelected)
    .reduce((acc, item) => acc + item.quantity, 0)

  const totalPrice = items
    .filter((item) => item.isSelected)
    .reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)

  const totalVolumes = items.reduce((acc, item) => acc + item.quantity, 0)

  const fetchItemsFromStorage = () => {
    const storedItems = storage.getData('cart')
    if (storedItems) {
      setItems(storedItems)
    }
  }

  useEffect(() => {
    fetchItemsFromStorage()
  }, [items.length])

  const getItems = () => {
    return items
  }

  const addItemToCart = (newItem: CartItem) => {
    let updatedList: CartItem[]

    const itemAlreadyExists = items.find((item) => item.id === newItem.id)

    if (itemAlreadyExists) {
      updatedList = items.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      console.log('Quantidade incrementada!')
    } else {
      updatedList = [...items, newItem]
      console.log('Novo item adicionado ao carrinho!')
    }

    setItems(updatedList)
    storage.saveData('cart', updatedList)
  }

  const updateItemQuantity = (itemId: number, quantity: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    )
    setItems(updatedItems)
    storage.saveData('cart', updatedItems)
  }

  const toggleItemSelection = (itemId: number) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
    )

    setItems(updatedItems)
    storage.saveData('cart', updatedItems)
  }

  const deleteItemFromCart = (itemId: number) => {
    const itemsExists = items.some(
      (itemInTheCard) => itemInTheCard.id === itemId
    )

    if (itemsExists) {
      const updatedProductsInCart = items.filter(
        (itemInTheCard) => itemInTheCard.id !== itemId
      )
      setItems(updatedProductsInCart)

      storage.saveData('cart', updatedProductsInCart)

      console.log('Product removed from cart')
    }
  }

  const deleteItems = () => {
    setItems([])
    storage.removeData('cart')
    console.log('All items removed from cart')
  }

  return (
    <CartContext.Provider
      value={{
        getItems,
        addItemToCart,
        updateItemQuantity,
        toggleItemSelection,
        deleteItemFromCart,
        deleteItems,
        totalQuantity,
        totalVolumes,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
