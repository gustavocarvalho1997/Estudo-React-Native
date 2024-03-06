/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

import Comp, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';

export default () => (
    <View>
        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro />
    </View>
);
