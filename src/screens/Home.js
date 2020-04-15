import React, { useContext, useEffect } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import BlogList from '../components/BlogList';
import { withNavigation } from 'react-navigation';
// import { BlogsContext } from '../contexts/blogsProvider';
import { Context } from '../contexts/BlogContext';

function Home(props) {
  const {navigation} = props;
  const addNew = () => {
    navigation.navigate("NewBlog")
  };
  const {state, getBlogPost} = useContext(Context);
  useEffect(() => {
    getBlogPost();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPost();
    });
    return () => {
      listener.remove();
    }
  }, []);


  return (
    <>
      <Text style={styles.title}>All Blogs!</Text>
      <BlogList
        blogs={state}
      />
      <Button
        title="+ Add New Blog"
        onPress={addNew}
      />
    </>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,    
    textAlign: "center"
  }
})

export default withNavigation(Home);
