import React, { createContext, useState } from "react";

const BlogsContext = createContext();

function BlogsProvider(props){
  const [blogs, setBlogs] = useState([
    {
      "id": "612766abc2187126c28de1728",
      "title": "Black Leather Jacket",
      "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      "id": "78728a29b2187126c28de1223",
      "title": "Sky is Pink",
      "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    }
  ]);
  return (
    <BlogsContext.Provider value={{blogs, setBlogs}}>
      {props.children}
    </BlogsContext.Provider>
  )
}

export {BlogsContext, BlogsProvider};
