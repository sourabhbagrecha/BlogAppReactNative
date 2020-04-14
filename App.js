import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import NewBlog from './src/screens/NewBlog';
import BlogScreen from './src/screens/BlogScreen';
import { createAppContainer } from 'react-navigation';
import EditBlog from './src/screens/EditBlog';
import { BlogsProvider } from './src/contexts/blogsProvider';

const navigator = createStackNavigator({
  Home: Home,
  Blog: BlogScreen,
  NewBlog: NewBlog,
  EditBlog: EditBlog
}, 
{
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "The Blog App"
  }
})

const App = createAppContainer(navigator);

export default () => {
  return <BlogsProvider><App/></BlogsProvider>
};