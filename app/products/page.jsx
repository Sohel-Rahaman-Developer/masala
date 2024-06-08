import React from "react";

import allProducts from '../data/products.json'; // Assuming you have a JSON file with all products
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";
import ProductList from "../common/ProductList";
import Footer from "../common/Footer";

const AllProductsPage = () => {
  const pageTitle = "All Products";
  const breadcrumbItems = ["Products"];
  return (
    <div>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1800px] mx-auto">
        <ProductList products={allProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default AllProductsPage;
