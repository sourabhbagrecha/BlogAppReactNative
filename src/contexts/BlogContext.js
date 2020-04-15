import createDataContext from "./createDataContext";
import blogReducer from "../reducers/blogReducer";
import jsonServer from "../api/jsonServer";

const getBlogPost = dispatch => {
  return async () => {
    try {
      const response = await jsonServer.get('/blogposts');
      console.log(response.data);
      dispatch({ type: 'Get_blogposts', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  }
}

const addBlogPost = dispatch => {
  return async (payload) => {
    try {
      const {id, title, content, callback} = payload;
      await jsonServer.post('/blogposts', {id, title, content});
      console.log("Posted!");
      if(callback){
        callback();
      }
    } catch (error) {
      console.log(error);
    }
    // dispatch({ type: 'Add', payload });
  };
};

const editBlogPost = dispatch => {
  return async (payload) => {
    const {id, title, content, callback} = payload;
      await jsonServer.put(`/blogposts/${id}`, {title, content});
      console.log("Posted!");
      if(callback){
        callback();
      }
    dispatch({ type: "Edit", payload });
  };
};

const deleteBlogPost = dispatch => {
  return async (payload) => {
    try {
      await jsonServer.delete(`/blogposts/${payload.id}`);
      dispatch({ type: "Delete", payload});
    } catch (error) {
      console.log(error)
    }
  };
};


export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, editBlogPost, deleteBlogPost, getBlogPost }, []);