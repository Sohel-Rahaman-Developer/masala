import React from "react";
import Header from "../common/Header";
import Breadcrumb from "../common/Breadcrumb";

import Footer from "../common/Footer";
import Contactus from "../components/Contactus";

function page() {
  const pageTitle = "Contact Us";
  const breadcrumbItems = ["Contact"];
  return (
    <>
      <Header />
      <Breadcrumb pageTitle={pageTitle} items={breadcrumbItems} />
      <div className="max-w-[1200px] mx-auto">
        <Contactus />
      </div>
      <Footer/>
    </>
  );
}

export default page;
