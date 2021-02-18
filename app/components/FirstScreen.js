import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { setCountAction, setPercentAction } from '../redux/actions';
import { decrement, increment, incrementByAmount } from '../redux/toolkits';
import SecondScreen from './SecondScreen';
import { styles } from './styles';

const FirstScreen = () => {
  const dispatch = useDispatch();
  const setData = () => {
    /* dispatch(setCountAction(0))
    dispatch(setPercentAction(5)) */
    dispatch(incrementByAmount({value: 10, name: 'Samir'}));
  }
  const cleanData = () => {
    /* dispatch(setCountAction(0))
    dispatch(setPercentAction(5)) */
    dispatch(decrement());
  }
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={setData} style={styles.button}>
            <Text style={styles.text}>click me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cleanData} style={styles.button}>
            <Text style={styles.text}>no click</Text>
        </TouchableOpacity>
        <SecondScreen />
    </View>
  )
}

export default FirstScreen;