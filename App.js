import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import Login from './App/Screens/LoginScreen/Login';

export default function App() {
  return (

    <ClerkProvider publishableKey='pk_test_c291bmQtbWFudGlzLTM2LmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View style={styles.container}>

        {/* sing in component  */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
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
