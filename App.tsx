import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import CreateAccount from "./components/create-account"
import Login from "./components/login"
import Onboard from "./components/onboard"
import Home from "./components/home"

const Stack = createStackNavigator()

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(false)

  function handleDone() {
    setShowOnboarding(false)
  }

  return showOnboarding ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding">
          {props => <Onboard {...props} handleDone={handleDone} />}
        </Stack.Screen>
        <Stack.Screen name="signup">
          {props => <CreateAccount {...props} handleDone={handleDone} />}
        </Stack.Screen>
        <Stack.Screen name="login">
          {props => <Login {...props} handleDone={handleDone} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Home />
  )
}
