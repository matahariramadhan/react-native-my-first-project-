import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const GoalItem = ({ courseGoal, deleteGoalHandler }) => {
  return (
    <FlatList
      data={courseGoal}
      renderItem={(itemData) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.listItem}
          onPress={() => deleteGoalHandler(itemData.item.key)}
        >
          <Text>{itemData.item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginTop: 10,
  },
});

export default GoalItem;
