import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

interface ModalProfileProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

export default function ModalProfile({ modalVisible, setModalVisible }: ModalProfileProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={24} color="black" />
          </Pressable>

          <Pressable style={[styles.button, styles.buttonActions, styles.buttonConfig]}>
            <Text style={styles.textStyle}>Configurar Conta</Text>
            <MaterialIcons name="settings" size={24} color="white" />
          </Pressable>

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  buttonConfig: {
    backgroundColor: '#2196F3',
  },
  buttonLogout: {
    backgroundColor: '#FF0000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
