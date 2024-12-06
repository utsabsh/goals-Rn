import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ itemData, onDeleteItem, id}) {
  return (
    <View style={styles.goalItem} key={itemData.key}>
      
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{itemData.text}</Text>
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
});
export default GoalItem;
