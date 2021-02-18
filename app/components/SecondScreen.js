import React from 'react';
import {View, Text} from 'react-native';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getCount, getPercent, getValue, getEqual, getSlice } from '../redux/selectors';
import { styles } from './styles';
import counterSlice from '../redux/toolkits';
import { store } from '../redux/store';

const SecondScreen = () => {
 /*  const motherOfSelectors = createSelector(
    [getCount, getPercent, getValue, getEqual],
    (count, percent, value, equal) => {
      const result = count * percent - value + equal;
      return result;
    }
    );
    const fatherOfSelectors = useSelector(motherOfSelectors); */
    const slice = useSelector(getSlice)
  return(
    <View style={{...styles.container, flex: 0.5}}>
        <Text>Second Screen</Text>
        <Text>{slice.value}</Text>
        <Text>{slice.name}</Text>
    </View>
  )
}

export default SecondScreen;