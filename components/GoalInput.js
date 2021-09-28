import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ addGoalHandler, visible, cancelAddGoalHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoal = () => {
    if (enteredGoal.length === 0) return;
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  const cancelAddGoal = () => {
    cancelAddGoalHandler();
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={goalInputHandler}
        />
        <View style={styles.inputButton}>
          <View style={styles.cancelButton}>
            <Button title="CANCEL" color="red" onPress={cancelAddGoal} />
          </View>
          <View style={styles.addButton}>
            <Button title="ADD" onPress={addGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
    height: 50,
    marginBottom: 10,
  },
  inputButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    marginHorizontal: 5,
  },
  addButton: {
    marginHorizontal: 5,
  },
});

export default GoalInput;
