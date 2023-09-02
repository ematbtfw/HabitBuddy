import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, CheckBox } from 'react-native';

const HabitTrackingScreen = () => {
  const [habits, setHabits] = useState([
    { id: '1', title: 'Exercise', completed: false },
    { id: '2', title: 'Read', completed: true },
    { id: '3', title: 'Meditate', completed: false },
    // Add more habits as needed
  ]);

  const toggleHabitCompletion = (id) => {
    // Find the habit by id and toggle its completed status
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <View>
      <Text>Habit Tracking</Text>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              value={item.completed}
              onValueChange={() => toggleHabitCompletion(item.id)}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HabitTrackingScreen;
