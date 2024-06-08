"use client"
import React from "react";
import { useParams } from "next/navigation";
import Header from "../../common/Header";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";

import productsData from "../../data/products.json";
import ProductDetails from "@/app/components/ProductDetails";

function ProductPage() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const pageTitle = product.name;
  const breadcrumbItems = [product.name];

  return (
    <>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1800px] mx-auto">
        <ProductDetails product={product} />

      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
