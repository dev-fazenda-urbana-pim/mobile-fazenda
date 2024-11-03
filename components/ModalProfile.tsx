import { Colors } from '@/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface ModalProfileProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function ModalProfile({ modalVisible, setModalVisible }: ModalProfileProps) {
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>

          <Text style={{ fontSize: 20 }}>Matheus Aurelio</Text>
          <Text style={{ fontSize: 16 }}>Matheus.A@urbanino.com</Text>

          <Pressable
            style={[styles.button, styles.buttonActions, styles.buttonLogout]}
          >
            <Text style={styles.textStyle}>Sair</Text>
            <MaterialIcons name="logout" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  button: {
    borderRadius: 8,
    padding: 10,
    marginTop: 24,
    width: '100%',
    alignItems: 'center',
  },
  buttonActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  buttonLogout: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.blue['indigo-dye'],
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
