import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React, { useState } from "react";

function Profile() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSave = () => {
    // Implement your save logic here
    console.log("Saved");
  };

  const user = useAppSelector((state: RootState) => state.auth.currentUser)

//   const username = "yourusername@gmail.com"; // Replace with actual username

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-6">Trang cá nhân</h2>
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          className="bg-gray-200 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user?.username??''}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-200 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user?.email??''}
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="bg-gray-200 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={user?.phone??''}
          disabled
        />
      </div>
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={() => {}}
      >
        Lưu
      </button>
    </div>
  );
}

export default Profile;
