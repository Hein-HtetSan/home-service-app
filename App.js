import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';

export default function App() {
  return (

    <ClerkProvider publishableKey='pk_test_c291bmQtbWFudGlzLTM2LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container}>

        {/* sing in component  */}
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        {/* sign out component  */}
        <SignedOut>
          <Login />
        </SignedOut>

        <StatusBar style="auto" />

      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
