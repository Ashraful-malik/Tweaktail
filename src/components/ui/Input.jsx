import React from "react";

function Input() {
  return (
    <div className="mb-4">
      <label
        for="simple-input"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Username
      </label>
      <input
        type="text"
        id="simple-input"
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        placeholder="Enter your username"
      />
    </div>
  );
}

export default Input;
