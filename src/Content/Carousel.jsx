import React, { useState, useEffect } from "react";

const fetchStoreApiData = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      heroSlides: [
        {
          id: 1,
          title: "Summer Sale 2024",
          description: "Get up to 50% off on selected items",
          image:
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
          buttonText: "Shop Now",
          badge: "50% OFF",
        },
        {
          id: 2,
          title: "New Arrivals",
          description: "Discover the latest trends in fashion",
          image:
            "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800",
          buttonText: "Explore Collection",
          badge: "NEW",
        },
        {
          id: 3,
          title: "Free Shipping",
          description: "On orders over $50. Limited time offer!",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
          buttonText: "Start Shopping",
          badge: "FREE DELIVERY",
        },
      ],

      products: [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 79.99,
          originalPrice: 129.99,
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
          category: "Electronics",
          rating: 4.5,
          reviews: 128,
          discount: 38,
        },
        {
          id: 2,
          name: "Smart Watch",
          price: 199.99,
          originalPrice: 299.99,
          image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
          category: "Electronics",
          rating: 4.8,
          reviews: 256,
          discount: 33,
        },
        {
          id: 3,
          name: "Running Shoes",
          price: 89.99,
          originalPrice: null,
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
          category: "Fashion",
          rating: 4.6,
          reviews: 89,
          discount: 0,
        },
        {
          id: 4,
          name: "Laptop Backpack",
          price: 49.99,
          originalPrice: 79.99,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
          category: "Accessories",
          rating: 4.3,
          reviews: 45,
          discount: 37,
        },
        {
          id: 5,
          name: "Coffee Maker",
          price: 129.99,
          originalPrice: 159.99,
          image:
            "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400",
          category: "Home",
          rating: 4.7,
          reviews: 172,
          discount: 19,
        },
        {
          id: 6,
          name: "Sunglasses",
          price: 39.99,
          originalPrice: null,
          image:
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
          category: "Fashion",
          rating: 4.4,
          reviews: 63,
          discount: 0,
        },
      ],

      categories: [
        {
          id: 1,
          name: "Electronics",
          icon: "📱",
          image:
            "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
          itemCount: 1250,
        },
        {
          id: 2,
          name: "Fashion",
          icon: "👔",
          image:
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
          itemCount: 3400,
        },
        {
          id: 3,
          name: "Home & Kitchen",
          icon: "🏠",
          image:
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400",
          itemCount: 2100,
        },
        {
          id: 4,
          name: "Sports",
          icon: "⚽",
          image:
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
          itemCount: 890,
        },
        {
          id: 5,
          name: "Beauty",
          icon: "💄",
          image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400",
          itemCount: 1650,
        },
      ],

      testimonials: [
        {
          id: 1,
          name: "Emma Thompson",
          location: "New York, USA",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
          rating: 5,
          text: "Amazing shopping experience! Fast delivery and great quality products. Will definitely order again!",
        },
        {
          id: 2,
          name: "David Martinez",
          location: "Los Angeles, USA",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
          rating: 5,
          text: "Best prices I've found online. The customer service is exceptional and products arrived in perfect condition.",
        },
        {
          id: 3,
          name: "Sophie Chen",
          location: "San Francisco, USA",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
          rating: 4,
          text: "Great variety of products and easy checkout process. Highly recommend this store!",
        },
      ],

      deals: [
        {
          id: 1,
          title: "Flash Sale",
          description: "24 Hours Only",
          discount: "70% OFF",
          color: "red",
          endsIn: "23:59:45",
        },
        {
          id: 2,
          title: "Weekend Deal",
          description: "This Weekend",
          discount: "Buy 2 Get 1",
          color: "blue",
          endsIn: "2 Days",
        },
        {
          id: 3,
          title: "Clearance",
          description: "While Stocks Last",
          discount: "Up to 80%",
          color: "green",
          endsIn: "Limited",
        },
      ],

      brands: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Samsung" },
        { id: 3, name: "Nike" },
        { id: 4, name: "Adidas" },
        { id: 5, name: "Sony" },
        { id: 6, name: "LG" },
      ],
    };
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error;
  }
};

function HeroCarousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                  {slide.badge}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-8">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                  {slide.buttonText} →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProductsCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  if (!products || products.length === 0) return null;

  const maxIndex = Math.max(0, products.length - itemsPerView);

  return (
    <div className="relative px-12">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-1/4 min-w-[250px]">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.discount > 0 && (
                    <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </span>
                  )}
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Add to Cart
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(product.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:bg-gray-100 z-10"
        >
          ←
        </button>
      )}
      {currentIndex < maxIndex && (
        <button
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 rounded-full hover:bg-gray-100 z-10"
        >
          →
        </button>
      )}
    </div>
  );
}

function CategoriesCarousel({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer group"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <div className="text-white">
                <div className="text-3xl mb-1">{category.icon}</div>
                <h3 className="font-bold text-lg">{category.name}</h3>
                <p className="text-sm opacity-90">{category.itemCount} items</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="relative max-w-4xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`transition-opacity duration-500 ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 absolute inset-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-lg italic">"{testimonial.text}"</p>
          </div>
        </div>
      ))}

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DealsCarousel({ deals }) {
  if (!deals || deals.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <div
          key={deal.id}
          className={`bg-gradient-to-br ${
            deal.color === "red"
              ? "from-red-500 to-red-700"
              : deal.color === "blue"
                ? "from-blue-500 to-blue-700"
                : "from-green-500 to-green-700"
          } rounded-xl p-6 text-white hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer`}
        >
          <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
          <p className="text-lg mb-4 opacity-90">{deal.description}</p>
          <div className="text-4xl font-bold mb-2">{deal.discount}</div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Ends in: {deal.endsIn}</span>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BrandsCarousel({ brands }) {
  if (!brands || brands.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="text-2xl font-bold text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
}

export default function ShoppingLandingPage() {
  const [storeApiData, setStoreApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStoreData = async () => {
      try {
        setLoading(true);
        const data = await fetchStoreApiData();
        setStoreApiData(data);
      } catch (err) {
        setError("Failed to load store data. Please try again later.");
        console.error("Error loading store data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadStoreData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!storeApiData) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {storeApiData.heroSlides && (
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel slides={storeApiData.heroSlides} />
        </section>
      )}

      {storeApiData.deals && (
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Today's Hot Deals 🔥</h2>
            <p className="text-gray-600 text-lg">
              Limited time offers you can't miss
            </p>
          </div>
          <DealsCarousel deals={storeApiData.deals} />
        </section>
      )}

      {storeApiData.categories && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">Shop by Category</h2>
              <p className="text-gray-600 text-lg">
                Explore our wide range of products
              </p>
            </div>
            <CategoriesCarousel categories={storeApiData.categories} />
          </div>
        </section>
      )}

      {storeApiData.products && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 text-lg">
              Handpicked items just for you
            </p>
          </div>
          <ProductsCarousel products={storeApiData.products} />
        </section>
      )}

      {storeApiData.testimonials && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg">
                Trusted by thousands of happy shoppers
              </p>
            </div>
            <TestimonialsCarousel testimonials={storeApiData.testimonials} />
          </div>
        </section>
      )}

      {storeApiData.brands && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Shop Top Brands</h2>
          </div>
          <BrandsCarousel brands={storeApiData.brands} />
        </section>
      )}

      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get 10% Off Your First Order
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals delivered to
            your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-lg outline-none"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
