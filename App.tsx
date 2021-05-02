import React, { useState } from "react"
import { Text, View } from "react-native"
import tailwind from "tailwind-rn"
import Onboard from "./components/onboard"

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)

  function handleDone() {
    setShowOnboarding(false)
  }

  return showOnboarding ? (
    <Onboard handleDone={handleDone} />
  ) : (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <Text>Welcome to Home Page!!!</Text>
    </View>
  )
}
