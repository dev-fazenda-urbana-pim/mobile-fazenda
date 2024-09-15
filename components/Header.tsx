import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import ModalProfile from './ModalProfile';
const userProfile = require('@/assets/images/user-profile.png');

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <ModalProfile modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View style={styles.header}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image source={userProfile} style={styles.profile} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#024059',
  },
  logo: {
    height: 50,
    width: 50, // Ajuste conforme necessário
    resizeMode: 'contain',
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
