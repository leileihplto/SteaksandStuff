"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface FavoriteItem {
  id: string
  name: string
  price: number
  weight: string
  image: string
  category: string
}

interface FavoritesContextType {
  favorites: FavoriteItem[]
  addFavorite: (item: FavoriteItem) => void
  removeFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  toggleFavorite: (item: FavoriteItem) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("steaks-favorites")
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites))
      } catch (e) {
        console.error("Failed to load favorites:", e)
      }
    }
  }, [])

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("steaks-favorites", JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (item: FavoriteItem) => {
    setFavorites((prev) => {
      if (prev.find((f) => f.id === item.id)) {
        return prev
      }
      return [...prev, item]
    })
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id))
  }

  const isFavorite = (id: string) => {
    return favorites.some((item) => item.id === id)
  }

  const toggleFavorite = (item: FavoriteItem) => {
    const isCurrentlyFavorite = isFavorite(item.id)
    if (isCurrentlyFavorite) {
      removeFavorite(item.id)
      return false
    } else {
      addFavorite(item)
      return true
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
