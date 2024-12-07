// file: app/screens/SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    // Splash screen akan tampil selama 3 detik
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('@/assets/images/splash-logo.png')} 
        style={styles.logo}
      /> */}
        <Text >
          Anda dapat membuka proyek ini di Android, iOS, dan web.
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D3D47', 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
