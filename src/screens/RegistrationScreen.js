// RegistrationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const RegistrationScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Perform input validation
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    // Make API request to register user
    // You would need to replace the following with your actual API endpoint and logic
    fetch('YOUR_REGISTER_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the registration success or failure
        console.log(data);
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
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default RegistrationScreen;
