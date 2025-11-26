import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contacts() {
  const notify = () =>
    toast.success("Message Sent Successfully! 🚀", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
    });

  return (
    <>
      <div className="w-3/4 max-w-2xl mx-auto p-6 border rounded-lg shadow-md bg-white text-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Contact Us</h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <label className="flex-1 flex flex-col text-lg">
              First Name
              <input
                type="text"
                id="fname"
                placeholder="Your First Name"
                className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="flex-1 flex flex-col text-lg">
              Last Name
              <input
                type="text"
                id="lname"
                placeholder="Your Last Name"
                className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
          </div>

          <label className="flex flex-col text-lg">
            Email
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="flex flex-col text-lg">
            Favourite Character
            <input
              type="text"
              id="char"
              placeholder="char"
              className="mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <label className="flex flex-col text-lg">
            Message
            <textarea
              id="message"
              placeholder="Write your message..."
              rows="5"
              className="mt-1 p-2 border rounded focus:outline-none resize-none focus:ring-2 focus:ring-indigo-400"
            />
          </label>

          <button
            onClick={notify}
            className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
