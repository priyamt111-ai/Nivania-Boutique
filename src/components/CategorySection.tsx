import categoryAccessories from "@/assets/category-accessories.jpg";
import categoryDresses from "@/assets/category-dresses.jpg";
import categoryShoes from "@/assets/category-shoes.jpg";

const categories = [
  {
    id: 1,
    name: "Accessories",
    subtitle: "Complete Your Look",
    image: categoryAccessories,
    link: "#",
  },
  {
    id: 2,
    name: "Dresses",
    subtitle: "Elegant & Timeless",
    image: categoryDresses,
    link: "#",
  },
  {
    id: 3,
    name: "Shoes",
    subtitle: "Step in Style",
    image: categoryShoes,
    link: "#",
  },
];

const CategorySection = () => {
  return (
    <section id="collections" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground">
            Browse By
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-3">
            Collections
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative aspect-[3/4] overflow-hidden image-zoom card-hover"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-cream/70 mb-2">
                  {category.subtitle}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-cream font-medium">
                  {category.name}
                </h3>
                
                {/* Animated Arrow */}
                <div className="mt-4 flex items-center gap-2 text-cream">
                  <span className="text-sm font-medium tracking-wide uppercase">
                    Shop Now
                  </span>
                  <span className="w-8 h-px bg-cream transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
