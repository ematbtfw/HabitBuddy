import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const GoalSettingScreen = () => {
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDeadline, setGoalDeadline] = useState('');
  const [goalMilestone, setGoalMilestone] = useState('');

  const handleSetGoal = () => {
    // Implement logic to save the user-defined goal
    const goalData = {
      title: goalTitle,
      deadline: goalDeadline,
      milestone: goalMilestone,
    };
    // Send goalData to your backend API or store it locally as needed
  };

  return (
    <View>
      <Text>Goal Setting</Text>
      <TextInput
        placeholder="Goal Title"
        value={goalTitle}
        onChangeText={setGoalTitle}
      />
      <TextInput
        placeholder="Deadline"
        value={goalDeadline}
        onChangeText={setGoalDeadline}
      />
      <TextInput
        placeholder="Milestone"
        value={goalMilestone}
        onChangeText={setGoalMilestone}
      />
      <Button title="Set Goal" onPress={handleSetGoal} />
    </View>
  );
};

export default GoalSettingScreen;
