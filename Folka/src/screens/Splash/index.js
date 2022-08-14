import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../ulits/styles';
const Splash = () => {
  return (
    <View style={styles.containerSplash}>
      <Image
        source={{
          uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pikpng.com%2Fpngl%2Fb%2F561-5612131_tech-icon-png.png&f=1&nofb=1',
        }}
        style={styles.containerImageF}
        resizeMode={'contain'}></Image>
    </View>
  );
};

export default Splash;
