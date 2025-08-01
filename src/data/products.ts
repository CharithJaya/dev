import { Product, Order } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Cricket Bat - English Willow',
    description: 'Premium English willow cricket bat with perfect balance and sweet spot. Ideal for professional players.',
    price: 299,
    originalPrice: 399,
    category: 'bats',
    brand: 'CricketPro',
    image: 'https://www.sstoncricket.com/wp-content/uploads/2025/01/1-5-370x370.jpg',
    stock: 25,
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: '2',
    name: 'Leather Cricket Ball - Match Quality',
    description: 'Hand-stitched leather cricket ball meeting international standards. Perfect for competitive matches.',
    price: 45,
    category: 'balls',
    brand: 'SportsMaster',
    image: 'https://m.media-amazon.com/images/I/61uU+1rXAUL._AC_SX679_.jpg',
    stock: 100,
    rating: 4.6,
    reviews: 89,
    featured: true
  },
  {
    id: '3',
    name: 'Professional Batting Pads',
    description: 'Lightweight yet protective batting pads with excellent mobility. Adjustable straps for perfect fit.',
    price: 89,
    originalPrice: 129,
    category: 'pads',
    brand: 'GuardianGear',
    image: 'https://cricketdirect.co.uk/cdn/shop/files/3C25411D-Aura-Pro-Front.jpg?v=1736956014&width=375',
    stock: 45,
    rating: 4.7,
    reviews: 67,
    featured: false
  },
  {
    id: '4',
    name: 'Batting Gloves - Pro Series',
    description: 'Premium leather batting gloves with superior grip and protection. Ventilated design for comfort.',
    price: 65,
    category: 'gloves',
    brand: 'CricketPro',
    image: 'https://brucebolt.us/cdn/shop/files/premium-pro-duran-series-long-cuff-batting-gloves-duran-black-long-cuff-batting-gloves-samku-industries-inc-466030_460x.jpg?v=1740126178',
    stock: 78,
    rating: 4.5,
    reviews: 156,
    featured: true
  },
  {
    id: '5',
    name: 'Cricket Helmet - Safety First',
    description: 'Advanced cricket helmet with titanium grille and superior ventilation. Meets latest safety standards.',
    price: 149,
    category: 'helmets',
    brand: 'SafePlay',
    image: 'https://foresports.co.uk/cdn/shop/files/DSC04792_large.jpg?v=1722004959',
    stock: 32,
    rating: 4.9,
    reviews: 203,
    featured: true
  },
  {
    id: '6',
    name: 'Cricket Shoes - All Terrain',
    description: 'High-performance cricket shoes with excellent grip and ankle support. Suitable for all playing surfaces.',
    price: 119,
    originalPrice: 159,
    category: 'shoes',
    brand: 'AthleteEdge',
    image: 'https://cricketdirect.co.uk/cdn/shop/files/IH8165_1_FOOTWEAR_Photography_SideLateralCenterView_white.jpg?v=1736952544&width=375',
    stock: 56,
    rating: 4.4,
    reviews: 91,
    featured: false
  }
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    userId: '2',
    items: [
      { product: products[0], quantity: 1 },
      { product: products[1], quantity: 2 }
    ],
    total: 389,
    status: 'delivered',
    date: '2024-01-15',
    shippingAddress: '8A 1/1, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka'
  },
  {
    id: 'ORD-002',
    userId: '2',
    items: [
      { product: products[3], quantity: 1 }
    ],
    total: 65,
    status: 'delivered',
    date: '2024-01-20',
    shippingAddress: '8A 1/1, Stanley Thilakarathne Mawatha, Nugegoda, Sri Lanka'
  }
];