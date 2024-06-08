"use client";
import React from "react";
import { useParams } from 'next/navigation';
import allProducts from '../../data/products.json';
import Header from "@/app/common/Header";
import Breadcrumb from "@/app/common/Breadcrumb";
import ProductList from "@/app/common/ProductList";
import Footer from "@/app/common/Footer";

const ProductsPage = () => {
  const params = useParams();
  const { category } = params;

  // Filter products based on category
  const products = category ? allProducts.filter(product => product.category === category) : allProducts;

  // Determine page title and breadcrumb items based on category
  const pageTitle = category ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "All Products";
  const breadcrumbItems = ["Products", pageTitle];

  return (
    <div>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1800px] mx-auto">
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;
