import React, { useEffect, useState, useContext } from 'react';
import { Text } from 'react-native';
import Blog from '../components/Blog';
import { withNavigation } from 'react-navigation';
// import { BlogsContext } from '../contexts/blogsProvider';
import { Context } from '../contexts/BlogContext';

function BlogScreen(props) {
  const {navigation} = props;
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const {state} = useContext(Context);

  const id = navigation.getParam('id');

  useEffect(() => {
    const details = state.find(v => v.id === id);
    setBlogData(details);
    setLoading(false)
  }, []);

  return (
    <>
      {
        loading ?
        <Text>loading...</Text>
        :
        <Blog id={id} title={blogData.title} content={blogData.content} />
      }
    </>
  )
};

export default withNavigation(BlogScreen);
