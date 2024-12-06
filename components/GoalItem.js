import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function GoalItem({ itemData, onDeleteItem, id, onEditedItem, index, lenght }) {
  const [isEditable, setIsEditable] = useState(false);
  const [editedText, setEditedText] = useState("");
  console.log(lenght, index);

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{itemData}</Text>
        {index < lenght - 1  && (
          <Button title="+" onPress={() => setIsEditable(!isEditable)} />
        )}
        {isEditable && (
          <TextInput
            style={styles.input}
            onChangeText={(value) => {
              setEditedText(value);
            }}
            onBlur={() => {
              onEditedItem(index, editedText);
              setIsEditable(false);
            }}
            onSubmitEditing={() => {
              onEditedItem(index, editedText);
              setIsEditable(false);
            }}
          />
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: { opacity: 0.5 },
  goalText: {
    padding: 8,
    color: "white",
  },
  button: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
  },
});
export default GoalItem;
