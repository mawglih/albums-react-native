import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export const App = () => {
  return(
    <View>
      <Header headerText={'Albums1'}/>
      <AlbumList />
    </View>
    
  ) ;
};