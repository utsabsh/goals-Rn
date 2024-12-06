import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddHandler() {
    setModalIsVisible(true);
  }
  function endAddHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddHandler();
  }
  function deleteGoalHandler(id) {
    console.log(id, "id");

    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddHandler}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancle={endAddHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            windowSize={10}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  itemData={itemData.item}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
          {/* <ScrollView>
          {courseGoals.map((goal, i) => (
            <View style={styles.goalItem} key={i}>
            <Text style={styles.goalText}>{goal}</Text>
            </View>
            ))}
            </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
