import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const RecentListing = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="my-8 px-[145px]">
      <div>
        <h3 className="font-bold text-3xl text-center">
          Popular winter care services
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-10">
        {services.slice(0, 6).map((service, index) => (
          <div key={index} className="card bg-base-100  shadow-2xl">
            <figure>
              <img
                src={service?.image}
                className="w-full h-[300px] object-cover"
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <div className="flex justify-between">
                <p>Price : {service?.price}</p>
                <p>Location: {service?.location}</p>
              </div>
              <div className="card-actions justify-end">
                {" "}
                <Link
                  to={`/services/${service?._id}`}
                  className="btn btn-secondary"
                >
                  View Details
                </Link>
                {/* <Link to={`/services/${service?.service._id}`} className="btn btn-primary">View Details</Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListing;
