import { FaRegAddressCard } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="container-flex ">
        <div className="col form-background pt-5">
          <h6 className="row justify-content-center align-items-end form-background">
            Romulo Goncalves
          </h6>
          <a
            className="row justify-content-center align-items-end form-background footer-link"
            href="https://krooksoma.github.io/RepoOnReact/"
          >
            <FaRegAddressCard />
            Portfolio
          </a>
        </div>
      </div>
    </>
  );
}
