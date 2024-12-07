import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require('@/assets/images/banner-placeholder.png')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <Text style={styles.bannerText}>Konsultasikan penggunaan aplikasi Kasir</Text>
      </View>

      {/* Menu Icons */}
      <View style={styles.menuContainer}>
        {[
          { label: 'Kelola Produk', key: 'kelola' },
          { label: 'Pegawai', key: 'pegawai' },
          { label: 'Outlet', key: 'outlet' },
          { label: 'Saldo Wallet', key: 'wallet' },
          { label: 'Bantuan', key: 'bantuan' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Laporan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Laporan</Text>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Penjualan Des 2024</Text>
            <Text style={styles.cardValue}>Rp0</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Penjualan Hari Ini</Text>
            <Text style={styles.cardValue}>Rp0</Text>
          </View>
        </View>
      </View>

      {/* Paket Berlangganan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Paket Berlangganan</Text>
        <TouchableOpacity style={styles.promoCard}>
          <Text style={styles.promoText}>Langganan Kasir Pro untuk fitur lengkap!</Text>
        </TouchableOpacity>
      </View>

      {/* Perangkat Tambahan */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perangkat Tambahan</Text>
        <TouchableOpacity style={styles.promoCard}>
          <Text style={styles.promoText}>Makin Canggih dengan Perangkat Kasir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  banner: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  bannerText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    marginVertical: 8,
  },
  menuIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 25,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 14,
    color: '#333',
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  promoCard: {
    backgroundColor: '#ffe5e5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  promoText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});
