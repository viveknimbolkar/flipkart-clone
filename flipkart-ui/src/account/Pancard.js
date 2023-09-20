import React,{useEffect} from "react";
import AccountSideMenu from "../components/AccountSideMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";
function Pancard() {
 
  return (
    <>
      <Header />
      <div className="container mb-4">
        <div className="row mt-4">
          <div className="col-md-3 ">
            <AccountSideMenu />
          </div>
          <div className="col-auto"></div>
          <div className="col-md-8 bg-white ">
            <div class="row p-3 ">
              <div className="d-flex">
                <h4>Pancard Information </h4>
                <a className="text-primary text-decoration-none mx-4 mt-1">
                  Edit
                </a>
              </div>
              <div class="col-md-6  my-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Pan Number"
                />
              </div>
              <div class="col-md-6 my-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name of pancard"
                />
              </div>

              <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" />
                <label class="input-group-text" for="inputGroupFile02">
                  Upload
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  I do hereby declare that PAN furnished/stated above is correct
                  and belongs to me, registered as an account holder with
                  www.flipkart.com. I further declare that I shall solely be
                  held responsible for the consequences, in case of any false
                  PAN declaration.
                </label>
              </div>
              <div class="col-auto my-3">
                <button type="submit" class="btn btn-primary mb-3">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pancard;
