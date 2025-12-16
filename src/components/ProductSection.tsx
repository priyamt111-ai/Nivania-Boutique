import { Heart, ShoppingBag } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Silk Elegance Blouse",
    category: "Tops",
    price: 128,
    originalPrice: 158,
    image: product1,
    badge: "Sale",
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    category: "Accessories",
    price: 245,
    image: product2,
    badge: "New",
  },
  {
    id: 3,
    name: "Pleated Midi Skirt",
    category: "Skirts",
    price: 168,
    image: product3,
    badge: null,
  },
  {
    id: 4,
    name: "Gold Jewelry Set",
    category: "Jewelry",
    price: 89,
    originalPrice: 120,
    image: product4,
    badge: "Sale",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-4 image-zoom bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium tracking-wide uppercase ${
            product.badge === "Sale" ? "bg-accent text-accent-foreground" : "bg-foreground text-background"
          }`}>
            {product.badge}
          </span>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <button className="w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Add to wishlist">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-foreground hover:text-background transition-colors" aria-label="Add to cart">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-4 bg-foreground text-background text-sm font-medium tracking-wide uppercase hover:bg-foreground/90 transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <span className="text-xs font-medium tracking-wide uppercase text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-heading text-lg mt-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-base font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section id="new-arrivals" className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Just In Now
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-3">
              Best Sellers
            </h2>
          </div>
          <a
            href="#"
            className="btn-ghost mt-4 md:mt-0 self-start md:self-auto flex items-center gap-2 group"
          >
            View All Products
            <span className="w-6 h-px bg-foreground transition-all duration-300 group-hover:w-10" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
