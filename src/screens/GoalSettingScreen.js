// GoalSettingScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const GoalSettingScreen = () => {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');

  const handleAddGoal = () => {
    // Perform input validation
    if (!goalName) {
      // Show an error message
      return;
    }

    // Add the new goal to the list
    setGoals(prevGoals => [...prevGoals, { id: prevGoals.length + 1, name: goalName }]);

    // Clear the input field
    setGoalName('');
  };

  return (
    <View>
      <TextInput
        placeholder="Goal Name"
        value={goalName}
        onChangeText={text => setGoalName(text)}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />

      <FlatList
        data={goals}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default GoalSettingScreen;
