import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  let lenghtOfArray;
  function startAddHandler() {
    setModalIsVisible(true);
  }
  function endAddHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    console.warn(enteredGoalText);

    setCourseGoals([...courseGoals,enteredGoalText]);
    endAddHandler();
  }
  function deleteGoalHandler(id) {}
  function editGoalHanlder(id, editedText) {
    const cpyCourseGoals=courseGoals.splice(id + 1, 0, editedText);
    setCourseGoals([...courseGoals,cpyCourseGoals])
  }
  useEffect(() => {
    lenghtOfArray = courseGoals.length;
    console.warn(courseGoals, courseGoals.length);
  }, [courseGoals]);

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
            renderItem={({ item, index }) => {
              return (
                <GoalItem
                  itemData={item}
                  onDeleteItem={deleteGoalHandler}
                  index={index}
                  key={index}
                  onEditedItem={editGoalHanlder}
                  lenght={lenghtOfArray}
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
    flex: 4,
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
