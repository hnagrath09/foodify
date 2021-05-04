import React from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import tailwind from "tailwind-rn"

export type LoginProps = {
  handleDone: () => void
  navigation: any
}

export default function Login({ handleDone, navigation }: LoginProps) {
  return (
    <View style={tailwind("flex-1 mx-12 mt-16")}>
      <View style={tailwind("items-center justify-center mb-8")}>
        <Image
          source={require("../assets/images/Icon.png")}
          style={tailwind("w-12 h-8")}
        />
      </View>
      <TouchableOpacity
        style={tailwind("absolute top-2 right-0 underline")}
        onPress={handleDone}
      >
        <Text style={tailwind("font-semibold text-yellow-700 underline")}>
          Skip
        </Text>
      </TouchableOpacity>
      <Text style={tailwind("font-bold text-2xl text-gray-700")}>
        Login to your account
      </Text>
      <Text style={tailwind("mt-4 text-gray-500")}>
        Good to see you agian, enter your details below to continue ordering.
      </Text>
      <View style={tailwind("mt-6")}>
        <Text style={tailwind("mb-3 text-gray-700 ml-4")}>Email Address</Text>
        <TextInput
          placeholder="Enter email"
          style={tailwind(
            "px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg",
          )}
        />
      </View>
      <View style={tailwind("mt-6")}>
        <Text style={tailwind("mb-3 text-gray-700 ml-4")}>Password</Text>
        <TextInput
          placeholder="Enter password"
          style={tailwind(
            "px-4 py-4 bg-gray-50 border border-gray-200 rounded-lg",
          )}
        />
      </View>
      <TouchableOpacity
        style={tailwind(
          "justify-center items-center rounded-3xl py-4 mt-40 w-full bg-white border border-gray-200",
        )}
      >
        <Text style={tailwind("text-center")}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind(
          "bg-yellow-600 justify-center items-center mt-6 rounded-3xl py-4 w-full",
        )}
        onPress={() => navigation.navigate("signup")}
      >
        <Text style={tailwind("text-center text-white font-semibold")}>
          Create an account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind("w-full mt-6")}>
        <Text style={tailwind("text-center font-semibold text-yellow-700")}>
          Login to my account
        </Text>
      </TouchableOpacity>
    </View>
  )
}
