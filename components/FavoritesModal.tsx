import { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useAppContext } from "../context/useAppContext";

type Props = {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  productId?: string;
};

export function FavoritesModal({
  setModalVisible,
  modalVisible,
  productId,
}: Props) {
  const { addToFavorites } = useAppContext();
  const [reason, setReason] = useState("");
  const handleChangeText = (text: string) => {
    setReason(text);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.reasonInput}
            placeholder="Why you like this product?"
            onChangeText={handleChangeText}
          />
          <View style={styles.buttonsContainer}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close Modal</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                addToFavorites({ productId, reason });
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Add to favorites</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  reasonInput: {
    padding: 11,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
