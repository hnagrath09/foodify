import React, { useRef } from "react"
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import tailwind from "tailwind-rn"
import clsx from "clsx"
import data, { Item } from "../assets/data/slides"

export type OnboardProps = {
  handleDone: () => void
  navigation: any
}

export default function Onboard({ handleDone, navigation }: OnboardProps) {
  const slider = useRef<AppIntroSlider | null>(null)

  const keyExtractor = (item: Item) => item.title

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View style={tailwind("items-center justify-center mt-12")}>
        <TouchableOpacity
          style={tailwind("absolute top-0 right-8")}
          onPress={handleDone}
        >
          <Text style={tailwind("text-lg font-semibold text-yellow-700")}>
            Skip
          </Text>
        </TouchableOpacity>
        <Image source={item.logo} style={tailwind("w-12 h-8")} />
        <Text style={tailwind("text-xl font-bold mt-12 text-center mx-10")}>
          {item.title}
        </Text>
        <Image source={item.image} style={tailwind("w-64 h-64 mt-12")} />
      </View>
    )
  }

  const renderPagination = (activeIndex: number) => {
    return (
      <View style={tailwind("absolute w-full bottom-10")}>
        <View style={tailwind("flex-row items-center mx-36 justify-between")}>
          {data.map((_, i) => (
            <TouchableOpacity
              key={i}
              style={tailwind(
                clsx(
                  "rounded-full",
                  i === activeIndex
                    ? "w-3 h-3 bg-gray-700"
                    : "w-2 h-2 bg-gray-400",
                ),
              )}
              onPress={() => {
                slider.current?.goToSlide(i)
              }}
            />
          ))}
        </View>
        <TouchableOpacity
          style={tailwind(
            "bg-yellow-600 justify-center items-center rounded-3xl py-4 mx-6 mt-12",
          )}
          onPress={() => navigation.navigate("signup")}
        >
          <Text
            style={tailwind("text-center text-white font-semibold text-lg")}
          >
            Create an account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind("w-full mt-8")}>
          <Text
            style={tailwind(
              "text-center text-lg font-semibold text-yellow-700",
            )}
          >
            login
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderPagination={renderPagination}
        ref={slider}
      />
    </View>
  )
}
