/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  return (
    <>
      <Text style={Estilo.TextoGrande}>{props.principal}</Text>
      <Text>{props.secundario}</Text>
    </>
  );
};
