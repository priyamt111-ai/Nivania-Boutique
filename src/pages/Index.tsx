import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import FeaturesBar from "@/components/FeaturesBar";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        {/* <FeaturesBar />*/}
       {/* <CategorySection />*/}
        {/*<ProductSection />*/}
        {/*<NewsletterSection />*/}
      </main>
      { <Footer /> }
    </div>
  );
};

export default Index;
