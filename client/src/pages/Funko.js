import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { ADD_FUNKO } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"

const Funko = (props) => {
  const [formState, setFormState] = useState({
    model: "",
    series: "",
    number: "",
    price: "",
    image: "",
  });

  const [addFunko, { error, data }] = useMutation(ADD_FUNKO, {
    update(cache, {data: {addFunko}}){
      // try{
      //   const{ funkos } = cache.readQuery({ query: QUERY_FUNKOS });

      //   cache.writeQuery({
      //     query: QUERY_FUNKOS,
      //     data: { funkos: [addFunko, ...funkos]}
      //   })
      // }catch(e){
      //   console.error(e);
      // }
      const { me } = cache.readQuery( {query: QUERY_ME})
      cache.writeQuery({
        query: QUERY_ME,
        data: {me: {...me, funkos: [...me.funkos, addFunko]}}
      })

    }
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log("CLIENT SIDE // Funko Form object data:", formState);
    const datum = {model: formState.model, series: formState.series, number:Number(formState.number), price:parseFloat(formState.price), image: formState.image}
    try {
      const { data } = await addFunko({
        variables: { ...datum},
      });

      // console.log(data);
    } catch (e) {
      console.error(e);
    }
// reseting fields
    setFormState({
      model: "",
      series: "",
      number: "",
      price: "",
      image: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add your funko</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Redirect to="/dashboard"/>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input m-2"
                  placeholder="Model"
                  name="model"
                  type="text"
                  value={formState.model}
                  onChange={handleChange}
                />
                <input
                  className="form-input m-2"
                  placeholder="Series"
                  name="series"
                  type="text"
                  value={formState.series}
                  onChange={handleChange}
                />
                <input
                  className="form-input m-2"
                  placeholder="Number"
                  name="number"
                  type="number"
                  value={formState.number}
                  onChange={handleChange}
                />
                <input
                  className="form-input m-2"
                  placeholder="Price"
                  name="price"
                  type="Int"
                  value={formState.price}
                  onChange={handleChange}
                />
                <input
                  className="form-input m-2"
                  placeholder="Image URL"
                  name="image"
                  type="text"
                  value={formState.image}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary m-2"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Funko;