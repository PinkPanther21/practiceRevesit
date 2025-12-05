import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    char: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const notify = () =>
    toast.success("Message Sent Successfully! 🚀", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
    });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "First name is required";
    if (!formData.lname.trim()) newErrors.lname = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      notify();
      // Clear form
      setFormData({ fname: "", lname: "", email: "", char: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <div className="w-3/4 max-w-2xl mx-auto p-6 border rounded-lg shadow-md bg-white text-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Contact Us
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex-1 flex flex-col text-lg">
              First Name
              <input
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="Your First Name"
                className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.fname && (
                <span className="text-red-500 text-sm">{errors.fname}</span>
              )}
            </label>
            <label className="flex-1 flex flex-col text-lg">
              Last Name
              <input
                type="text"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Your Last Name"
                className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.lname && (
                <span className="text-red-500 text-sm">{errors.lname}</span>
              )}
            </label>
          </div>

          <label className="flex flex-col text-lg">
            Email
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>

          

          <label className="flex flex-col text-lg">
            Message
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              className="mt-1 p-2 border rounded focus:outline-none resize-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
