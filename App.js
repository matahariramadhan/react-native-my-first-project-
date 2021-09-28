import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { key: uuidv4(), title: enteredGoal },
    ]);
    setIsAddMode(false);
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  const deleteGoalHandler = (goalKey) => {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.key !== goalKey);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        cancelAddGoalHandler={cancelAddGoalHandler}
      />
      <GoalItem courseGoal={courseGoal} deleteGoalHandler={deleteGoalHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50, marginVertical: 20 },
});
