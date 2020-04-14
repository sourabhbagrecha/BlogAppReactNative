import React, { useEffect } from 'react';
import { Text } from 'react-native';
import BlogForm from '../components/BlogForm';
import { withNavigation } from 'react-navigation';

function EditBlog(props) {
  const {navigation} = props;
  const id = navigation.getParam('id');
  const title = navigation.getParam('title');
  const content = navigation.getParam('content');
  useEffect(() => {

  }, [])
  return (
    <>
      <BlogForm id={id} title={title} content={content}/>
    </>
  )
};

export default withNavigation(EditBlog);