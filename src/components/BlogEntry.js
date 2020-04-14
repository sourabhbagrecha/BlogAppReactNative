import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { BlogsContext } from '../contexts/blogsProvider';

function BlogEntry(props) {
  const {id, title, navigation} = props;
  const {blogs, setBlogs} = useContext(BlogsContext);
  const deleteNow = () => {
    setBlogs(blogs.filter(b => b.id !== id))
  }
  return (
    <>
      <View style={styles.main}>
        <TouchableOpacity style={styles.titleClick} onPress={() => navigation.navigate("Blog", {id})}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteNow}>
          <View style={styles.action}>
            <MaterialCommunityIcons name="delete" style={styles.deleteIcon}/>
          </View>
        </TouchableOpacity>
      </View>
    </>    
  )
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1
  },
  title: {
    fontSize: 20,
    flex: 1,
    fontWeight: "700",
    color: "black"
  },
  deleteIcon: {
    color: "#bb0000",
    fontSize: 25
  },
  action: {
    padding: 5
  },
  titleClick: {
    flex: 1
  }
})

export default withNavigation(BlogEntry);
