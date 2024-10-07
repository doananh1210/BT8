import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const { width } = Dimensions.get('window'); 
export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Scan Product</Text>
      <View style={styles.scanArea}>
        <Image
          style={styles.productImage}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kbYOqKuevTKny4fekhGtcLceHVBFffKyUg&s' }}
        />
        <View style={styles.scanOverlay}>
          <View style={styles.overlayCornerTopLeft}></View>
          <View style={styles.overlayCornerTopRight}></View>
          <View style={styles.overlayCornerBottomLeft}></View>
          <View style={styles.overlayCornerBottomRight}></View>
        </View>
      </View>
      <View style={styles.productInfo}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kbYOqKuevTKny4fekhGtcLceHVBFffKyUg&s' }}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Orange Juice</Text>
          <Text style={styles.productDescription}>Lauren’s</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => alert('Product added!')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  backText: {
    fontSize: 18,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  scanArea: {
    width: width * 0.9,
    height: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
    position: 'relative',
  },
  productImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  scanOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  overlayCornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#4A90E2',
  },
  overlayCornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#4A90E2',
  },
  overlayCornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#4A90E2',
  },
  overlayCornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#4A90E2',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%',
    marginBottom: 30,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 12,
    color: 'gray',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
