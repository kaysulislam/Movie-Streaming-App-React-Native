import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to ExerciseScreen"
        onPress={() => navigation.navigate('Exercise')}
      />
    </View>
  );
};

export default HomeScreen;
