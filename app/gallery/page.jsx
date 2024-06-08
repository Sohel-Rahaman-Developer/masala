import React from "react";
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";
import Footer from "../common/Footer";
import Gallery from "../components/Gallery";

function page() {
    const pageTitle = "Gallery";
    const breadcrumbItems = ["gallery"];
  return (
    <>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1800px] mx-auto">
        <Gallery/>
      </div>
      <Footer />
    </>
  );
}

export default page;
