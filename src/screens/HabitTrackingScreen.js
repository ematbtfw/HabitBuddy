// HabitTrackingScreen.js
import React, { useState } from 'react';
import { View, FlatList, Text, CheckBox } from 'react-native';

const HabitTrackingScreen = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Exercise', completed: false },
    { id: 2, name: 'Read', completed: true },
    // Add more habits as needed
  ]);

  const handleCheckboxToggle = id => {
    // Update the completed status of the habit
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <View>
      <FlatList
        data={habits}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <CheckBox
              value={item.completed}
              onValueChange={() => handleCheckboxToggle(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HabitTrackingScreen;
