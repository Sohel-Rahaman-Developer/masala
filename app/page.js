import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Banner from "./common/Banner";
import Category from "./common/Category";
import Footer from "./common/Footer";
import Header from "./common/Header";
import ProductList from "./common/ProductList";
import MediaCenter from "./components/MediaCenter";
import TestimonialSlider from "./common/TestimonialSlider";
import allProducts from "./data/products.json";
import reviewsData from './data/review.json';
import Link from "next/link";

// Accessing environment variables
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export default function Home() {
  const featuredProducts = allProducts.filter((product) => product.featured);
  const pageTitle = "Spices";
  const breadcrumbItems = ["Category", "Subcategory", "Product"];

  const testimonials = [
    {
      name: "John Doe",
      title: "CEO",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/images/john.jpg",
    },
    {
      name: "Jane Smith",
      title: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/jane.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      <ErrorBoundary>
        <div className="sticky top-0 w-full bg-white shadow-md z-50">
          <Header />
        </div>
        <Banner />
        <div className="max-w-[1800px] mx-auto">
          <Category />
          <ProductList products={featuredProducts} />
          <div className="mt-16 w-full flex justify-center">
            <Link href="/products">
              <button className="px-4 rounded rounded-md bg-[#f9370c] dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-[#fe5c14] focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                <p className="text-xl font-medium leading-5">See More Products</p>
                <svg className="dark:text-gray-900" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66663 16H25.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 21.3333L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 10.6667L25.3333 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </Link>
          </div>
          <MediaCenter />
          <TestimonialSlider reviewsData={reviewsData} />
        </div>
        <Footer />
      </ErrorBoundary>
    </>
  );
}
