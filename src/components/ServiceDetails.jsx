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
            <button className="btn btn-secondary px-10">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
