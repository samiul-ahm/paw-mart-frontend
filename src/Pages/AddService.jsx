import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };
    console.log(formData);
    axios.post("http://localhost:3000/services", formData).then((res) => {
      console.log(res);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Added Successfully",
          icon: "success",
          draggable: true,
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  return (
    <div>
      {/* <h2>Add service Page</h2> */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Pet / Product</h2>

        {/* Name */}
        <div>
          <label className="block font-medium">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium">Category</label>
          <select name="category" className="w-full border p-2 rounded">
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            rows="4"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium">Image (URL)</label>
          <input
            type="url"
            name="image"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Image Preview
        // {image && (
        //   <div className="mt-2">
        //     <img
        //       src={image}
        //       alt="Preview"
        //       className="h-40 object-cover rounded"
        //     />
        //   </div>
        // )} */}

        {/* Pick Up Date */}
        <div>
          <label className="block font-medium">Pick Up Date</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email (Readonly) */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            value={user?.email}
            type="email"
            name="email"
            className="w-full border p-2 rounded bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddService;
