import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);


//   const handleOrder = (e) =>{
// e.preventDefault();


//     axios.post("http://localhost:3000/orders",)
//   }

  return (
    <div className="mx-auto max-w-6xl my-20">
      <div className="card lg:card-side bg-base-100 shadow-2xl">
        <figure>
          <img
            src={service.image}
            className="p-10 rounded-2xl w-[500px]"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service.name}</h2>
          <div className="flex flex-col gap-4">
            <p>Description: {service.description}</p>
            <p className="text-xl">Price : {service.price}</p>
            <p className="text-sm">Category : {service.category}</p>
          </div>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-secondary px-10">Buy</button> */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button
              className="btn btn-secondary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Buy/Order
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Order details</legend>

                    <label className="label">Title</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="My awesome page"
                    />

                    <label className="label">Slug</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="my-awesome-page"
                    />

                    <label className="label">Author</label>
                    <input type="text" className="input" placeholder="Name" />
                  </form>
                </form>
              </div>
            </dialog> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
