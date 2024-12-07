import { StyleSheet, View, Text, Image } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Kartu 1 */}
      <View style={styles.card}>
        <ThemedText type="title" style={styles.cardTitle}>
          Informasi Penting
        </ThemedText>
        <Text style={styles.cardContent}>
          Aplikasi ini mencakup kode contoh untuk membantu Anda memulai pengembangan.
        </Text>
      </View>

      {/* Kartu 2 */}
      <View style={styles.card}>
        <ThemedText type="title" style={styles.cardTitle}>
          Dukungan Platform
        </ThemedText>
        <Text style={styles.cardContent}>
          Anda dapat membuka proyek ini di Android, iOS, dan web.
        </Text>
      </View>

      {/* Kartu 3 */}
      <View style={styles.card}>
        <ThemedText type="title" style={styles.cardTitle}>
          Gambar
        </ThemedText>
        <Text style={styles.cardContent}>
          Anda dapat menggunakan gambar statis dengan sufiks seperti @2x dan @3x untuk mendukung
          kepadatan layar yang berbeda.
        </Text>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={styles.image}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 14,
    color: '#333',
  },
  image: {
    alignSelf: 'center',
    marginTop: 8,
    width: 100,
    height: 100,
  },
});
