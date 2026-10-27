import type { AppState, Product } from './types'

export const naira = (amount: number) => `₦${Math.round(amount).toLocaleString('en-NG')}`
export const pct = (value: number) => `${Math.round(value)}%`
export const getProduct = (state: AppState, id: string) => state.products.find((product) => product.id === id)
export const getVariantPrice = (product: Product, storage: string) => { const index = product.storage.indexOf(storage); return product.price + Math.max(0, index) * 100000 }
export const cartSubtotal = (state: AppState) => state.cart.reduce((sum, item) => sum + (getVariantPrice(getProduct(state, item.productId)!, item.storage) * item.quantity), 0)
export const totalRevenue = (state: AppState) => state.orders.reduce((sum, order) => sum + order.total, 0)
export const unitsSold = (state: AppState) => state.orders.reduce((sum, order) => sum + order.items.reduce((items, item) => items + item.quantity, 0), 0)
export const inventoryValue = (state: AppState) => state.products.reduce((sum, product) => sum + product.price * product.stock, 0)
export const statusTone = (status: string) => status.toLowerCase().includes('deliver') || status.toLowerCase().includes('stock') || status === 'Converted' ? 'success' : status.toLowerCase().includes('pending') || status.toLowerCase().includes('progress') || status === 'Low stock' ? 'warning' : 'neutral'
export const productSearch = (products: Product[], query: string) => { const q = query.trim().toLowerCase(); return q ? products.filter((p) => `${p.brand} ${p.name} ${p.category} ${Object.values(p.specs).join(' ')}`.toLowerCase().includes(q)) : products }
export const downloadCsv = (filename: string, rows: Record<string, string | number>[]) => { const keys = Object.keys(rows[0] ?? {}); const csv = [keys.join(','), ...rows.map((row) => keys.map((key) => JSON.stringify(row[key] ?? '')).join(','))].join('\n'); const blob = new Blob([csv], { type: 'text/csv' }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); URL.revokeObjectURL(url) }
