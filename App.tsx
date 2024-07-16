import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import App from './src/app';

export default function index() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}