import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useAuth from '../hooks/useAuth';
import ModalProfile from './ModalProfile';

export default function Header() {
  const [modalVisible, setModalVisible] = useState(false);

  const { user } = useAuth();

  console.log(user);

  return (
    <View>
      <ModalProfile modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <View style={styles.header}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.avatar}>
            {user?.nome.slice(0, 2).toUpperCase() ?? "TE"}
          </Text>
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
  avatar: {
    textAlign: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 8,
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
