import React, { useEffect, useState, useContext } from 'react';
import { Text } from 'react-native';
import Blog from '../components/Blog';
import { withNavigation } from 'react-navigation';
import { BlogsContext } from '../contexts/blogsProvider';

function BlogScreen(props) {
  const {navigation} = props;
  const [blogData, setBlogData] = useState({});
  const [loading, setLoading] = useState(true);
  const {blogs} = useContext(BlogsContext);

  const id = navigation.getParam('id');

  useEffect(() => {
    const details = blogs.find(v => v.id === id);
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
