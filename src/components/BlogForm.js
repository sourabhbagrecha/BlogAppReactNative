import React, { useContext, useEffect } from 'react';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';
import useInputState from '../hooks/useInputState';
// import { BlogsContext } from '../contexts/blogsProvider';
import { withNavigation } from 'react-navigation';
import { Context } from '../contexts/BlogContext';

function BlogForm(props) {
  const {id, title, content, navigation} = props;
  const [titleI, handleTitleChange] = useInputState(title);
  const [contentI, handleContentChange] = useInputState(content);
  const {state, addBlogPost, editBlogPost} = useContext(Context);
  const callback = () => navigation.navigate("Home");
  const submit = () => {
    id ?
    editBlogPost({id, title: titleI, content: contentI, callback})  
    :
    addBlogPost({id: Date.now().toString(), title: titleI, content: contentI, callback});
  };
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>{id ? "Edit Blog" : "Add a New Blog"}</Text>
        <TextInput
          value={titleI}
          onChangeText={handleTitleChange}
          placeholder="Title"
          style={{...styles.input}}
        />
        <TextInput
          value={contentI}
          onChangeText={handleContentChange}
          placeholder="Content"
          style={{...styles.input}}
        />
        <Button
          title="Post"
          onPress={submit}
        />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  main: {
    marginVertical: 100,
    paddingHorizontal: 30,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 15,
    marginVertical: 25
  }
});

export default withNavigation(BlogForm);
