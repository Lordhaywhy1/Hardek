import type { AppState, Article, Auction, Product, Staff } from './types'

export const productImages = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85',
]

export const products: Product[] = [
  { id: 'p1', brand: 'Apple', name: 'iPhone 15 Pro', category: 'Flagship', price: 1199999, previousPrice: 1299999, rating: 4.9, reviews: 184, image: productImages[0], storage: ['256GB', '512GB'], ram: ['8GB'], os: 'iOS 17', stock: 18, status: 'In stock', featured: true, colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium'], specs: { Display: '6.1” Super Retina XDR', Processor: 'A17 Pro', Camera: '48MP Main + 12MP Ultra Wide', Battery: 'Up to 23 hours video', Charging: 'USB-C fast charge', Network: '5G', Weight: '187g', Water: 'IP68' }, description: 'A titanium pro design with a powerful A17 Pro chip and a camera system built for everyday creative work.' },
  { id: 'p2', brand: 'Samsung', name: 'Galaxy S24 Ultra', category: 'Flagship', price: 1099999, previousPrice: 1249999, rating: 4.8, reviews: 231, image: productImages[1], storage: ['256GB', '512GB', '1TB'], ram: ['12GB'], os: 'Android 14', stock: 9, status: 'Low stock', featured: true, colors: ['Titanium Gray', 'Titanium Black'], specs: { Display: '6.8” QHD+ AMOLED 2X', Processor: 'Snapdragon 8 Gen 3', Camera: '200MP Wide + Telephoto', Battery: '5000mAh', Charging: '45W wired', Network: '5G', Weight: '232g', Water: 'IP68' }, description: 'The big-screen Android flagship with Galaxy AI, S Pen precision, and an expansive camera range.' },
  { id: 'p3', brand: 'Google', name: 'Pixel 9 Pro', category: 'Smartphones', price: 899999, rating: 4.7, reviews: 92, image: productImages[2], storage: ['128GB', '256GB'], ram: ['16GB'], os: 'Android 14', stock: 24, status: 'In stock', colors: ['Obsidian', 'Porcelain'], specs: { Display: '6.3” LTPO OLED', Processor: 'Google Tensor G4', Camera: '50MP Triple Rear', Battery: '4700mAh', Charging: '30W wired', Network: '5G', Weight: '199g', Water: 'IP68' }, description: 'Google’s most refined Pixel yet, pairing a brilliant camera system with a helpful, expressive Android experience.' },
  { id: 'p4', brand: 'Nothing', name: 'Phone (2a) Plus', category: 'Smartphones', price: 449999, previousPrice: 499999, rating: 4.5, reviews: 67, image: productImages[3], storage: ['256GB'], ram: ['12GB'], os: 'Android 14', stock: 5, status: 'Low stock', colors: ['Black', 'White'], specs: { Display: '6.7” Flexible AMOLED', Processor: 'Dimensity 7350 Pro', Camera: '50MP Dual Rear', Battery: '5000mAh', Charging: '50W wired', Network: '5G', Weight: '190g', Water: 'IP54' }, description: 'A confident mid-range performer with a distinctive Glyph interface and a smooth high-refresh display.' },
  { id: 'p5', brand: 'Xiaomi', name: '14T Pro', category: 'Clearance', price: 559999, previousPrice: 699999, rating: 4.6, reviews: 41, image: productImages[4], storage: ['512GB'], ram: ['12GB'], os: 'Android 14', stock: 2, status: 'Low stock', colors: ['Titan Blue', 'Titan Gray'], specs: { Display: '6.67” AMOLED 144Hz', Processor: 'Dimensity 9300+', Camera: '50MP Leica Main', Battery: '5000mAh', Charging: '120W wired', Network: '5G', Weight: '209g', Water: 'IP68' }, description: 'Leica imaging and flagship charging speed in a phone that makes premium performance feel accessible.' },
  { id: 'p6', brand: 'Tecno', name: 'Phantom V Fold2', category: 'Upcoming', price: 1299999, rating: 4.4, reviews: 18, image: productImages[5], storage: ['512GB'], ram: ['12GB'], os: 'Android 14', stock: 0, status: 'Pre-order', colors: ['Karst Green', 'Black'], specs: { Display: '7.85” Foldable AMOLED', Processor: 'Dimensity 9000+', Camera: '50MP Dual Main', Battery: '5750mAh', Charging: '70W wired', Network: '5G', Weight: '249g', Water: 'IPX4' }, description: 'A spacious foldable experience for the next generation of work and entertainment on the move.' },
]

export const staff: Staff[] = [
  { id: 's1', name: 'Ada Nwosu', role: 'Store Lead', sales: 12840000, target: 15000000, points: 1840, avatar: 'AN' },
  { id: 's2', name: 'Tobi Williams', role: 'Senior Sales', sales: 11180000, target: 12000000, points: 1620, avatar: 'TW' },
  { id: 's3', name: 'Mariam Bello', role: 'Sales Associate', sales: 8460000, target: 10000000, points: 1190, avatar: 'MB' },
  { id: 's4', name: 'Chinedu Okafor', role: 'Sales Associate', sales: 7390000, target: 9000000, points: 980, avatar: 'CO' },
]

export const auctions: Auction[] = [
  { id: 'a1', productId: 'p2', condition: 'Open box — excellent', currentBid: 792000, startingPrice: 680000, increment: 10000, ends: 'Today, 18:40', status: 'Ending soon', bids: [{ name: 'A. Yusuf', amount: 792000, time: '4 min ago' }, { name: 'K. James', amount: 782000, time: '18 min ago' }, { name: 'S. Ade', amount: 760000, time: '41 min ago' }] },
  { id: 'a2', productId: 'p4', condition: 'New — distress sale', currentBid: 312000, startingPrice: 300000, increment: 5000, ends: 'Tomorrow, 12:00', status: 'Live', bids: [{ name: 'D. Okoye', amount: 312000, time: '1 hour ago' }] },
]

export const articles: Article[] = [
  { id: 'art1', title: 'The 2025 phone buyer’s guide: what actually matters', category: 'Buying guides', excerpt: 'From refresh rates to repairability, these are the specs worth your attention before you choose your next phone.', author: 'Ifeoma Chukwu', date: 'Oct 21, 2025', read: '7 min read', featured: true, image: productImages[2], status: 'Published' },
  { id: 'art2', title: 'Why flagship cameras are becoming more useful, not just sharper', category: 'Technology', excerpt: 'A practical look at computational photography, portrait lenses, and the new role of AI in mobile imaging.', author: 'David Adebayo', date: 'Oct 14, 2025', read: '5 min read', image: productImages[0], status: 'Published' },
  { id: 'art3', title: 'Inside the new wave of foldable workstations', category: 'Reviews', excerpt: 'Are foldables ready to replace the tablet in your everyday carry?', author: 'Nneka Umeh', date: 'Oct 03, 2025', read: '6 min read', image: productImages[5], status: 'Published' },
]

export const initialState: AppState = {
  products, cart: [], bulkOrders: [], bulkDraft: {}, preorders: [], redemptions: [], audit: [], wishlist: ['p3'], comparisons: ['p1', 'p2'], auctions, articles, staff, referrals: [
    { id: 'r1', name: 'Samuel A.', source: 'Instagram link', status: 'Converted', amount: 1199999, date: 'Oct 24' },
    { id: 'r2', name: 'Kemi O.', source: 'WhatsApp share', status: 'Pending', amount: 449999, date: 'Oct 26' },
    { id: 'r3', name: 'Ibrahim M.', source: 'Direct link', status: 'In review', amount: 899999, date: 'Oct 27' },
  ], notifications: [
    { id: 'n1', title: 'Order HDK-1048 is out for delivery', body: 'Your iPhone 15 Pro is expected today before 6pm.', read: false, tone: 'success' },
    { id: 'n2', title: 'New auction ending soon', body: 'Galaxy S24 Ultra open-box listing closes at 18:40.', read: false, tone: 'warning' },
    { id: 'n3', title: 'Points added', body: 'You earned 420 points from your latest demo order.', read: true, tone: 'info' },
  ], points: 6840, voted: false,
  orders: [
    { id: 'HDK-1048', customer: 'Olumide A.', customerId: 'c1', date: 'Oct 25, 2025', items: [{ productId: 'p1', quantity: 1, color: 'Natural Titanium', storage: '256GB' }], subtotal: 1199999, delivery: 3500, total: 1203499, payment: 'Bank transfer', status: 'Out for delivery', deliveryStep: 5, address: '14 Bourdillon Road, Ikoyi, Lagos' },
    { id: 'HDK-1039', customer: 'Olumide A.', customerId: 'c1', date: 'Oct 12, 2025', items: [{ productId: 'p3', quantity: 1, color: 'Obsidian', storage: '128GB' }], subtotal: 899999, delivery: 0, total: 899999, payment: 'Demo card', status: 'Delivered', deliveryStep: 7, address: '14 Bourdillon Road, Ikoyi, Lagos' },
  ], tickets: [{ id: 'TKT-2025', subject: 'Can I change my delivery window?', category: 'Delivery', priority: 'Medium', status: 'In progress', message: 'Please confirm if a Saturday delivery slot is possible.', created: 'Oct 26' }],
}
