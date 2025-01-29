import React from "react";

export default function book() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Book Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Author</th>
              <th className="py-2 px-4 border-b">Year</th>
            </tr>
          </thead>
          <tbody>{/* Add rows here */}</tbody>
        </table>
      </div>
    </div>
  );
}
