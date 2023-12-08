// LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, TouchableOpacity, AsyncStorage, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform input validation
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    // Make API request to authenticate user
    // You would need to replace the following with your actual API endpoint and logic
    fetch('YOUR_LOGIN_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the login success or failure
        console.log(data);

        // Save authentication token locally using AsyncStorage
        AsyncStorage.setItem('token', data.token);

        // Navigate to the next screen (you need to define this)
        navigation.navigate('HabitTracking');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
