import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Banner from "./common/Banner";
import Category from "./common/Category";
import Footer from "./common/Footer";
import Header from "./common/Header";

import ProductList from "./common/ProductList";

import MediaCenter from "./components/MediaCenter";
import allProducts from "./data/products.json";

export default function Home() {
  const featuredProducts = allProducts.filter((product) => product.featured);
  // Dummy data
  const pageTitle = "Spices";
  const breadcrumbItems = ["Category", "Subcategory", "Product"];

  return (
    <>
    <ErrorBoundary>
      <div className=" sticky top-0 w-full bg-white shadow-md z-50">
        <Header />
      </div>
      <Banner />
      <div className="max-w-[1800px] mx-auto">
        <Category />
        <ProductList products={featuredProducts} />
        <MediaCenter />
      </div>
      <Footer />
      </ErrorBoundary>
    </>
  );
}
