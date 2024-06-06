import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
const Auth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    if (username && password) {
      Cookies.set("auth", JSON.stringify({ username, password }), {
        expires: 1,
      });
      sessionStorage.setItem("auth", JSON.stringify({ username, password }));
      Swal.fire({
        title: "Success",
        text: "Success logged in",
        confirmButtonText: "OK",
        icon: "success",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/");
        }
      });
    }
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSumbit}
        className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="passwpord"
            className="block text-sm font-medium text-gray-700"
          >
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
          >
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Auth;
