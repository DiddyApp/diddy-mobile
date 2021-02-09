import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BackIcon } from './icons.component';

const LoginHeader = ({navigation: { goBack } }) => {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <BackIcon />
    </TouchableOpacity>
  );
};
export default LoginHeader;