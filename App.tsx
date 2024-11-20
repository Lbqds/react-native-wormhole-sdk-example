/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {install} from 'react-native-quick-crypto';
install();

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {
  getIsTransferCompletedEth,
  hexToUint8Array,
} from '@alephium/wormhole-sdk';
import * as ethers from 'ethers';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const check = () => {
    const provider = new ethers.providers.JsonRpcProvider(
      'https://ethereum-rpc.publicnode.com',
    );
    const signedVaa = hexToUint8Array(
      '0100000000030085ac975371e10efd6a4929b54636dd641006e4f811ff820b4d90c816de5b871b299d9f1380741bd9f1fdaae44a4f11e7fa5214908f7b207a24b1a649b2a8194c0101a8091762c975030ab308d1392ef6aafb6ab5099b0fd5878901252eafe5a249f22abfdd03e5cf0a67609eeba3ff436a3ba68abf337414538c61bf41282f2ea9ba00034e7d9716344467b9bbe53e10a24d05cfaf6c2b0c3be79db50974f1a2223c68e16157fe26e8261e14aaf3c1b5b60536d4b99253d796e2b749cb4372294a48a0c101673d29592be9000000ff00027f42f8e21128e70c7a30098a32c5c388de7eb4ffc6ef7dd86f72e8e11acc48000000000000001260cd0100000000000000000000000000000000000000000000000000000000927b4848000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000200148bcc3d01cd1eb7cc05275ef03208c64a77fd03ae0000000000000000000000000000000000000000000000000000000000000000',
    );
    getIsTransferCompletedEth(
      '0x579a3bDE631c3d8068CbFE3dc45B0F14EC18dD43',
      provider,
      signedVaa,
    ).then(result => console.log(`>>>>>>>>>>>>> ${result}`));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="check" color={'red'} onPress={check} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
