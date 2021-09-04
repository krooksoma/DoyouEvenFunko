import React from "react";
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <h1 className="home-header">Latest Releases!!</h1>
      <div className="row background-image justify-content-center p-0">
        <a
          className="container-fluid p-0 d-flex justify-content-center"
          href="/latest"
        >
          <picture className="col-lg-4 col-md-6 home-image p-2" />
        </a>
      </div>
      <Footer />
    </>
  );
}
