export type Role = 'customer' | 'staff' | 'agent' | 'ambassador' | 'admin'
export type Product = { id: string; brand: string; name: string; category: string; price: number; previousPrice?: number; rating: number; reviews: number; image: string; storage: string[]; ram: string[]; os: string; stock: number; status: 'In stock' | 'Low stock' | 'Pre-order'; featured?: boolean; specs: Record<string, string>; description: string; colors: string[] }
export type CartItem = { productId: string; quantity: number; color: string; storage: string }
export type Order = { id: string; customer: string; customerId: string; date: string; items: CartItem[]; subtotal: number; delivery: number; vat?: number; total: number; payment: 'Naira' | 'Demo card' | 'Bank transfer' | 'Crypto'; status: string; deliveryStep: number; address: string }
export type BulkOrder = { id: string; date: string; items: CartItem[]; total: number; status: 'Submitted' | 'Processing' | 'Fulfilled' }
export type Preorder = { id: string; productId: string; name: string; email: string; status: 'Reserved' | 'Release announced'; date: string }
export type Redemption = { id: string; points: number; reward: string; status: 'Pending' | 'Approved' | 'Rejected'; date: string }
export type AuditEvent = { id: string; action: string; role: Role; record: string; timestamp: string; reason?: string }
export type Auction = { id: string; productId: string; condition: string; currentBid: number; startingPrice: number; increment: number; ends: string; bids: { name: string; amount: number; time: string }[]; status: 'Live' | 'Ending soon' | 'Closed'; startAt?: string; endAt?: string; approved?: boolean; submittedBy?: 'admin' | 'agent'; }
export type AgentCredit = { plan: 2 | 3; totalDue: number; paid: number; outstanding: number; blocked: boolean; nextDue?: string }
export type SalesPointRule = { id: string; productId: string; role: Role; points: number; monthlyTarget?: number }
export type Article = { id: string; title: string; category: string; excerpt: string; author: string; date: string; read: string; featured?: boolean; image: string; status: 'Published' | 'Draft' }
export type Ticket = { id: string; subject: string; category: string; priority: 'Low' | 'Medium' | 'High'; status: 'Open' | 'In progress' | 'Resolved'; message: string; created: string; response?: string }
export type Staff = { id: string; name: string; role: string; sales: number; target: number; points: number; avatar: string }
export type Referral = { id: string; name: string; source: string; status: 'Converted' | 'Pending' | 'In review'; amount: number; date: string }
export type AppState = { products: Product[]; cart: CartItem[]; orders: Order[]; bulkOrders: BulkOrder[]; bulkDraft: Record<string, number>; preorders: Preorder[]; redemptions: Redemption[]; wishlist: string[]; comparisons: string[]; auctions: Auction[]; articles: Article[]; tickets: Ticket[]; staff: Staff[]; referrals: Referral[]; audit: AuditEvent[]; notifications: { id: string; title: string; body: string; read: boolean; tone: 'info' | 'success' | 'warning' }[]; points: number; voted: boolean; customerVotedStaffId?: string; agentCredit: AgentCredit; salesPointRules: SalesPointRule[]; lastOrderId?: string }
export type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string; color: string; storage: string } }
  | { type: 'UPDATE_CART'; payload: { productId: string; color: string; storage: string; quantity: number } }
  | { type: 'TOGGLE_WISHLIST'; payload: string }
  | { type: 'TOGGLE_COMPARE'; payload: string }
  | { type: 'CREATE_ORDER'; payload: Omit<Order, 'id' | 'date'> }
  | { type: 'UPDATE_STATUS'; payload: { id: string; status: string; step: number } }
  | { type: 'ADJUST_STOCK'; payload: { id: string; amount: number } }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'ADD_TICKET'; payload: Ticket }
  | { type: 'RESPOND_TICKET'; payload: { id: string; response: string } }
  | { type: 'MARK_READ'; payload?: string }
  | { type: 'CAST_VOTE' }
  | { type: 'CAST_STAFF_VOTE'; payload: { staffId: string } }
  | { type: 'SUBMIT_BID'; payload: { auctionId: string; amount: number } }
  | { type: 'SUBMIT_AUCTION'; payload: Auction }
  | { type: 'APPROVE_AUCTION'; payload: { id: string; approved: boolean } }
  | { type: 'UPDATE_AUCTION_SCHEDULE'; payload: { id: string; startAt: string; endAt: string } }
  | { type: 'PUBLISH_ARTICLE'; payload: string }
  | { type: 'ADD_ARTICLE'; payload: Article }
  | { type: 'ADD_PREORDER'; payload: Preorder }
  | { type: 'SET_BULK_QTY'; payload: { productId: string; quantity: number } }
  | { type: 'SUBMIT_BULK_ORDER' }
  | { type: 'SET_AGENT_PLAN'; payload: { plan: 2 | 3 } }
  | { type: 'PAY_AGENT_BALANCE'; payload: { amount: number } }
  | { type: 'SET_SALES_POINTS'; payload: { productId: string; role: Role; points: number; monthlyTarget?: number } }
  | { type: 'SET_STAFF_TARGET'; payload: { staffId: string; target: number } }
  | { type: 'SUBMIT_REDEMPTION'; payload: Redemption }
  | { type: 'RESET' }
