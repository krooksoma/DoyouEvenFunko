import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_FUNKO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

export default function FunkoList(props) {
  // eslint-disable-next-line
  const { loading, data } = useQuery(QUERY_ME);
  // const userData = data?.me || {};
  const [removeFunko, { error }] = useMutation(
    REMOVE_FUNKO,
     {
    update(cache, { data: { removeFunko }}){
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeFunko },
        });
      } catch (err) {
        console.error(err);
      }

      const { me } = cache.readQuery( {query: QUERY_ME})
      cache.writeQuery({
        query: QUERY_ME,
        data: {me: {...me, funkos: [...me.funkos, removeFunko]}}
      })
    },
    }
  );

  console.log(data);

  const handleRemoveFunko = async (funkoId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(funkoId);
      // eslint-disable-next-line
      const { data } = await removeFunko({
        variables: { funkoId: funkoId },
        
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log("Console log inside funko list", props.id);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
        <div key={props.id} className="card h-100">
          <div className="container">
          <img
            className="card-img-top m-2 img-fluid"
            src={`${props.image}`}
            alt={props.model}            
          />
          </div>
          <div className="card-body">
            <h4 className="card-title bg-light">{props.model}</h4>
            <div className="card-text">
              <p>Series: {props.series}</p>
              <p>Number: {props.number}</p>
              <p>Purchase Price: ${props.price}</p>
            </div>
          </div>
          <button
            className="btn btn-danger m-3"
            style={{ maxWidth: "6rem" }}
            onClick={() => handleRemoveFunko(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </>
  );
}
