import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/100', 
            }}
            style={styles.profileImage}
          />
          <View style={styles.badgeWrapper}>
            <Text style={styles.freeBadge}>FREE</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Alfinkamil</Text>
        <Text style={styles.profileRole}>Pemilik</Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Informasi Usaha</Text>
          <Text style={styles.menuSubtitle}>Cafeteria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Buka Dashboard Qasir</Text>
          <Text style={styles.menuSubtitle}>
            Alamat Dashboard: cafeteria-1049716.qasir.id{'\n'}
            Subdomain: cafeteria-1049716
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Syarat dan Ketentuan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuTitle}>Kebijakan Privasi</Text>
        </TouchableOpacity>
      </View>

      {/* Qasir Pro Section */}
      <View style={styles.proSection}>
        <Text style={styles.proTitle}>Qasir Pro</Text>
        <Text style={styles.proSubtitle}>Untuk bisnis yang berkembang.</Text>
        <TouchableOpacity style={styles.upgradeButton}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
        </TouchableOpacity>
      </View>

      {/* Delete Account */}
      <TouchableOpacity style={styles.deleteAccount}>
        <Text style={styles.deleteAccountText}>Ajukan Hapus Akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomWidth: 8,
    borderBottomColor: '#f8f8f8',
  },
  profileImageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#f44336',
  },
  badgeWrapper: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -25 }],
    backgroundColor: '#f44336',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  freeBadge: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 12,
  },
  profileRole: {
    fontSize: 14,
    color: '#777',
  },
  menuContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 8,
    borderBottomColor: '#f8f8f8',
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 5,
    borderBottomColor: '#e0e0e0',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  proSection: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 16,
    borderBottomWidth: 8,
    borderBottomColor: '#f8f8f8',
  },
  proTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  proSubtitle: {
    fontSize: 14,
    color: '#777',
    marginVertical: 8,
  },
  upgradeButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  upgradeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteAccount: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 16,
  },
  deleteAccountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
});
