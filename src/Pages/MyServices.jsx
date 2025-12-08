import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyServices = () => {
  const [myServices, setMyServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyServices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user?.email]);

  if (loading) {
    return <p className="text-center mt-10">Loading services...</p>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount == 1) {
              const filterData = myServices.filter(
                (service) => service._id != id
              );
              console.log(filterData);
              setMyServices(filterData);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="my-16 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {myServices.map((service, index) => (
              <tr key={service?._id || index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={service?.image} alt={service?.serviceName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.serviceName}</div>
                      <div className="font-medium ">{service?.name}</div>
                    </div>
                  </div>
                </td>

                <td>{service?.category}</td>

                <td>${service?.price}</td>

                <td className="flex gap-2">
                  <Link
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </Link>
                  <Link
                    to={`/update-services/${service?._id}`}
                    className="btn btn-primary btn-xs"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {myServices.length === 0 && (
          <p className="text-center mt-6 text-gray-500">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default MyServices;
