import React, { createContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  return (
    <BlogContext.Provider value={{ users, setUsers }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
