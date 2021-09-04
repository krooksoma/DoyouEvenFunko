import Grogu from "../img/Grogu.jpg";
import Ashoka from "../img/Ashoka.jpg"
import DarkTrooper from "../img/DarkTrooper.jpg"
import BobaFett from "../img/BobaFett.jpg"
import BoKatan from "../img/BoKatan.jpg"
import MandalorianBantha from "../img/MandalorianBantha.jpg"
import Footer from "../components/Footer"

export default function LatestReleases() {
  return (
    <>
      <div className="card-group ">
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={Grogu}
              className="img-fluid store-1"
              alt="Grogu with cookies"
            />           
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">Grogu with Cookies</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-grogu-with-cookies-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={Ashoka}
              className="img-fluid store-1"
              alt="Ahsoka"
            />           
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">Ahsoka With Sabers</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-ahsoka-with-sabers-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={DarkTrooper}
              className="img-fluid store-1"
              alt="DarkTrooper"
            />            
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">Dark Trooper</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-dark-trooper-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
      </div>
      <div className="card-group ">
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={BobaFett}
              className="img-fluid store-1"
              alt="BobaFett"
            />
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">BobaFett</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-boba-fett-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={BoKatan}
              className="img-fluid store-1"
              alt="Bo-Katan Kryze"
            />
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">Bo-Katan Kryze</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-bo-katan-kryze-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
        <div className="col-lg-3 col-md-6 col-sm-12 card p-3 m-3">
          <div>
            <img
              src={MandalorianBantha}
              className="img-fluid store-1"
              alt="Grogu with cookies"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </div>
          <div className="card-body row align-items-center align-content-end">
            <h5 className="card-title">Mandalorian & the Child on Bantha</h5>
            
            <a href="https://www.funko.com/shop/details/star-wars-the-mandalorian-dark-trooper-pop" className="btn btn-light fs-4">
              🛒
            </a>
          </div>
        </div>        
      </div>
      <Footer/>
    </>
  );
}
