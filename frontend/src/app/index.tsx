import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <div>
      <Image
          className="absolute"
          source={require('../assets/background.png')}
          style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <div className="">
          <p>hello</p>
        </div>  
        <p>hi</p>
      </SafeAreaView>
    </div>
  );
}