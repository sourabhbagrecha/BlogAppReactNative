import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { withNavigation } from 'react-navigation';

function Blog(props) {
  const {id, title, content, navigation} = props;
  const editNow = () => {
    navigation.navigate("EditBlog", {id, title, content})
  }
  return (
    <>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Button
          title="Edit"
          onPress={editNow}
        />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  main: {
    padding: 20
  },
  title: {
    fontWeight: "700",
    fontSize: 35
  },
  content: {
    marginTop: 10,
    fontSize: 17
  }
})

export default withNavigation(Blog);