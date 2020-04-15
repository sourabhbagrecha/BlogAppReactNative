const blogReducer = (state, action) => {
  let {title, content, id} = action.payload || {};
  switch (action.type){
    case 'Get_blogposts':
      return action.payload;
    case 'Add':
      return  [...state, {title, content, id }];
    case 'Edit':
      return state.map(s => {
        return s.id === id ? {title, content, id} : s;
      });
    case 'Delete':
      return state.filter(s => s.id !== id);
    default: 
      return state;
  }
};

export default blogReducer;