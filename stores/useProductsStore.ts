import { useState } from '#app'

export type ProductBadge = 'Nouveau' | 'Promo'

export type Product = {
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
  rating: number
  stock: number
  badge?: ProductBadge
  colors: string[]
  code: string
  tags: string[]
  gradient: string
}

export type ProductInput = {
  name: string
  description: string
  category: string
  image: string
  price: number
  stock: number
  colors: string[]
  badge?: ProductBadge
}

const PRODUCTS_KEY = 'local_shop_products'
const isClient = typeof window !== 'undefined'

const categories = ['Running', 'Street', 'Outdoor', 'Studio']
const shopTags = ['Tous', ...categories]

const categoryGradients: Record<string, string> = {
  Running: 'bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.45),_transparent_60%)]',
  Street: 'bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.4),_transparent_60%)]',
  Outdoor: 'bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.35),_transparent_60%)]',
  Studio: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_60%)]'
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: 'Aether Run',
    description: 'Maille respirante, amorti fluide pour les longues distances.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    price: 149,
    rating: 4.7,
    stock: 12,
    badge: 'Nouveau',
    colors: ['Onyx', 'Sable', 'Sauge'],
    code: 'AR-01',
    tags: ['Running'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.45),_transparent_60%)]'
  },
  {
    id: 2,
    name: 'Metro Drift',
    description: 'Semelle urbaine, silhouette nette, parfait pour la ville.',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    price: 129,
    rating: 4.6,
    stock: 8,
    colors: ['Graphite', 'Crème'],
    code: 'MD-22',
    tags: ['Street'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.4),_transparent_60%)]'
  },
  {
    id: 3,
    name: 'Trail Pulse',
    description: 'Grip renforcé, stabilité pour chemins mixtes.',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    price: 159,
    rating: 4.8,
    stock: 6,
    badge: 'Promo',
    colors: ['Lave', 'Forêt'],
    code: 'TP-07',
    tags: ['Outdoor'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.35),_transparent_60%)]'
  },
  {
    id: 4,
    name: 'Studio Flow',
    description: 'Flexibilité totale pour danse, fitness et mobilité.',
    category: 'Studio',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    price: 119,
    rating: 4.5,
    stock: 15,
    colors: ['Perle', 'Nuit'],
    code: 'SF-14',
    tags: ['Studio'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_60%)]'
  },
  {
    id: 5,
    name: 'North Loop',
    description: 'Tige déperlante et amorti moelleux pour l’hiver.',
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80',
    price: 175,
    rating: 4.9,
    stock: 4,
    colors: ['Glacier', 'Brume'],
    code: 'NL-03',
    tags: ['Outdoor'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_transparent_60%)]'
  },
  {
    id: 6,
    name: 'Pulse Knit',
    description: 'Maille tissée et maintien rapide, style minimal.',
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80',
    price: 135,
    rating: 4.4,
    stock: 9,
    badge: 'Promo',
    colors: ['Cendre', 'Azur'],
    code: 'PK-19',
    tags: ['Street'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.4),_transparent_60%)]'
  },
  {
    id: 7,
    name: 'Glide One',
    description: 'Ultra légère, drop court, parfaite pour tempo.',
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80',
    price: 142,
    rating: 4.6,
    stock: 10,
    colors: ['Quartz', 'Ardoise'],
    code: 'GO-05',
    tags: ['Running'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.4),_transparent_60%)]'
  },
  {
    id: 8,
    name: 'Nimbus Pace',
    description: 'Amorti nuageux, retour d’énergie sur chaque foulée.',
    category: 'Running',
    image:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80',
    price: 168,
    rating: 4.8,
    stock: 11,
    badge: 'Nouveau',
    colors: ['Ciel', 'Craie', 'Carbone'],
    code: 'NP-08',
    tags: ['Running'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.5),_transparent_62%)]'
  },
  {
    id: 9,
    name: 'Civic Echo',
    description: 'Confort quotidien, style propre, semelle silencieuse.',
    category: 'Street',
    image:
      'https://images.unsplash.com/photo-1528701800489-20be3c6d66e8?auto=format&fit=crop&w=800&q=80',
    price: 122,
    rating: 4.5,
    stock: 14,
    colors: ['Ivoire', 'Béton'],
    code: 'CE-11A',
    tags: ['Street'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.42),_transparent_60%)]'
  },
  {
    id: 10,
    name: 'Summit Rail',
    description: 'Pare-pierres discret, grip agressif pour les sentiers.',
    category: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&w=800&q=80',
    price: 182,
    rating: 4.9,
    stock: 7,
    badge: 'Promo',
    colors: ['Mousse', 'Basalte'],
    code: 'SR-10',
    tags: ['Outdoor'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.4),_transparent_62%)]'
  },
  {
    id: 11,
    name: 'Studio Halo',
    description: 'Maintien souple, pivot facile pour training et danse.',
    category: 'Studio',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    price: 126,
    rating: 4.6,
    stock: 13,
    colors: ['Lilas', 'Neige'],
    code: 'SH-21',
    tags: ['Studio'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.45),_transparent_60%)]'
  },
  {
    id: 12,
    name: 'Vector Sprint',
    description: 'Légèreté radicale, plaque nerveuse pour accélérer.',
    category: 'Running',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80',
    price: 196,
    rating: 4.7,
    stock: 5,
    badge: 'Promo',
    colors: ['Volt', 'Encre'],
    code: 'VS-04',
    tags: ['Running'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_62%)]'
  },
  {
    id: 13,
    name: 'Harbor Street',
    description: 'Cuir souple, semelle gomme, look rétro urbain.',
    category: 'Street',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
    price: 138,
    rating: 4.6,
    stock: 9,
    badge: 'Nouveau',
    colors: ['Tabac', 'Craie'],
    code: 'HS-13',
    tags: ['Street'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.45),_transparent_62%)]'
  },
  {
    id: 14,
    name: 'Ridge Atlas',
    description: 'Protection latérale, accroche humide, pensée montagne.',
    category: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
    price: 188,
    rating: 4.8,
    stock: 6,
    colors: ['Ardoise', 'Pin'],
    code: 'RA-14',
    tags: ['Outdoor'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.38),_transparent_62%)]'
  },
  {
    id: 15,
    name: 'Velvet Motion',
    description: 'Chaussant seconde peau, idéal pour studio et mobilité.',
    category: 'Studio',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    price: 132,
    rating: 4.7,
    stock: 16,
    badge: 'Promo',
    colors: ['Rose pâle', 'Nuit'],
    code: 'VM-15',
    tags: ['Studio'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.48),_transparent_62%)]'
  },
  {
    id: 16,
    name: 'Tempo Arc',
    description: 'Transition rapide, stabilité médiane, parfaite tempo run.',
    category: 'Running',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    price: 176,
    rating: 4.8,
    stock: 8,
    colors: ['Azur', 'Carbone'],
    code: 'TA-16',
    tags: ['Running'],
    gradient: 'bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.5),_transparent_64%)]'
  }
]

const safeParse = (value: string | null) => {
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const readProducts = () => {
  if (!isClient) return []
  const data = safeParse(localStorage.getItem(PRODUCTS_KEY))
  return Array.isArray(data) ? data : []
}

const writeProducts = (items: Product[]) => {
  if (!isClient) return
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(items))
}

const createCode = (name: string, category: string, index: number) => {
  const prefix = category.slice(0, 2).toUpperCase()
  const suffix = String((index + 5) * 9).padStart(2, '0')
  const cleanName = name.replace(/\s+/g, '').slice(0, 2).toUpperCase()
  return `${prefix}${cleanName ? `-${cleanName}` : ''}-${suffix}`
}

const normalizeProduct = (product: Record<string, unknown>, index: number): Product => {
  const category = typeof product.category === 'string' && product.category ? product.category : 'Street'
  const name = typeof product.name === 'string' && product.name ? product.name : `Modèle ${index + 1}`
  const description = typeof product.description === 'string' ? product.description : 'Nouveau modèle disponible.'
  const price = Number(product.price)
  const stock = Number(product.stock)
  const id = Number.isFinite(Number(product.id)) ? Number(product.id) : Date.now() + index
  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ['Noir']
  const tags = Array.isArray(product.tags) && product.tags.length ? product.tags : [category]
  const code = typeof product.code === 'string' && product.code ? product.code : createCode(name, category, index)
  const rating = Number.isFinite(Number(product.rating)) ? Number(product.rating) : 4.5
  const gradient =
    typeof product.gradient === 'string' && product.gradient
      ? product.gradient
      : categoryGradients[category] || categoryGradients.Street
  const image = typeof product.image === 'string' ? product.image : ''
  const badge = product.badge === 'Nouveau' || product.badge === 'Promo' ? product.badge : undefined

  return {
    id,
    name,
    description,
    category,
    image,
    price: Number.isFinite(price) ? price : 0,
    rating,
    stock: Number.isFinite(stock) ? stock : 0,
    badge,
    colors,
    code,
    tags,
    gradient
  }
}

export const useProductsStore = () => {
  const products = useState<Product[]>('products', () => [])
  const loaded = useState('productsLoaded', () => false)

  const loadProducts = (force = false) => {
    if (!isClient) return
    if (loaded.value && !force) return
    const stored = readProducts()
    const shouldMergeDefaults = stored.length > 0
    const missingDefaults = shouldMergeDefaults
      ? defaultProducts.filter((defaultProduct) => {
          return !stored.some((storedProduct) => {
            const storedId = Number((storedProduct as Record<string, unknown>).id)
            const storedCode = (storedProduct as Record<string, unknown>).code
            const sameId = Number.isFinite(storedId) && storedId === defaultProduct.id
            const sameCode =
              typeof storedCode === 'string' &&
              storedCode.length > 0 &&
              storedCode === defaultProduct.code
            return sameId || sameCode
          })
        })
      : []
    const source = shouldMergeDefaults ? [...stored, ...missingDefaults] : defaultProducts
    const normalized = source.map((item, index) => normalizeProduct(item, index))
    products.value = normalized.filter((product) => product.code !== 'CE-11')
    loaded.value = true
    if (!stored.length || missingDefaults.length > 0) {
      writeProducts(products.value)
    }
  }

  const addProduct = (input: ProductInput) => {
    const id = Date.now()
    const code = createCode(input.name, input.category, products.value.length)
    const gradient = categoryGradients[input.category] || categoryGradients.Street

    const product: Product = {
      id,
      name: input.name,
      description: input.description,
      category: input.category,
      image: input.image,
      price: input.price,
      rating: 4.6,
      stock: input.stock,
      badge: input.badge,
      colors: input.colors.length ? input.colors : ['Noir'],
      code,
      tags: [input.category],
      gradient
    }

    products.value = [product, ...products.value]
    writeProducts(products.value)
    return product
  }

  const removeProduct = (id: number) => {
    products.value = products.value.filter((product) => product.id !== id)
    writeProducts(products.value)
  }

  const updateProduct = (id: number, patch: Partial<Product>) => {
    const next = products.value.map((product) => {
      if (product.id !== id) return product
      return { ...product, ...patch }
    })
    products.value = next
    writeProducts(products.value)
  }

  return {
    products,
    categories,
    shopTags,
    loadProducts,
    addProduct,
    removeProduct,
    updateProduct
  }
}
