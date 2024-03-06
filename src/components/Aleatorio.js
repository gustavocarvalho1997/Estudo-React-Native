/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

export default (props) => {
    // console.warn(props);
    const {min, max} = props;
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta) + min;
    return (
        <Text style={Estilo.TextoGrande}>O valor aleatório é {aleatorio}!</Text>
    );
}