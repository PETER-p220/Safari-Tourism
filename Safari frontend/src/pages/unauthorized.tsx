import React from "react";

const Unauthorized: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold text-red-600">Unauthorized</h2>
      <p>You do not have access to this page. Please log in with valid credentials.</p>
      <a href="/auth/login" className="text-blue-600 underline">Back to Login</a>
    </div>
  );
};

export default Unauthorized;