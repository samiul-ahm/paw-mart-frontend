import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Services = () => {
  const [category, setCategory]= useState('');
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <p className="text-center mt-10">Loading services...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center my-5">
        <h2 className="text-2xl font-bold mb-6">All Services</h2>
        <select onChange={(e)=>setCategory(e.target.value)} defaultValue="Choose category" className="select">
          <option disabled={true}>Pick a category</option>
            <option>All</option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <div key={item.id} className=" rounded-xl shadow-xl overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <p className="font-bold text-secondary">$ {item.price}</p>

              {/* <Link to={`/services/${item.id}`}>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  See Details
                </button>
              </Link> */}
              <Link to={`/services/${item?._id}`} className="btn btn-secondary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
