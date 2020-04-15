import React from 'react';
import { FlatList } from 'react-native';
import BlogEntry from './BlogEntry';

function BlogList(props) {
  const {blogs} = props
  return (
    <>
      <FlatList
        data={blogs}
        renderItem={({item}) => <BlogEntry key={item.id.toString()} {...item} />}
      />
    </>
  )
};

export default BlogList;
