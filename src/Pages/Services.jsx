import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading services...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">All Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <p className="font-bold text-indigo-600">$ {item.price}</p>

              <Link to={`/services/${item.id}`}>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
