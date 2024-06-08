import React from "react";
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import AboutUs from "../components/AboutUs";


function page() {
    const pageTitle = "About Us";
    const breadcrumbItems = ["about us"];
  return (
    <>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1800px] mx-auto lg:px-6 px-3">
        <AboutUs/>
      </div>
      <Footer />
    </>
  );
}

export default page;
