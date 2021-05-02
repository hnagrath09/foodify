import clsx from "clsx"
import React, { useRef, useState } from "react"
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Button,
} from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import tailwind from "tailwind-rn"

const data = [
  {
    title: "Order from your favourite stores or vendors",
    image: require("./assets/images/Onboard1.png"),
    logo: require("./assets/images/Icon.png"),
  },
  {
    title: "Choose from a wide range of  delicious meals",
    image: require("./assets/images/Onboard2.png"),
    logo: require("./assets/images/Icon.png"),
  },
  {
    title: "Enjoy instant delivery and payment",
    image: require("./assets/images/Onboard3.png"),
    logo: require("./assets/images/Icon.png"),
  },
]

type Item = typeof data[0]

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const slider = useRef<AppIntroSlider | null>(null)

  const keyExtractor = (item: Item) => item.title

  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View style={tailwind("items-center justify-center mt-12")}>
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
      <>
        <TouchableOpacity
          style={tailwind("absolute top-12 right-8")}
          onPress={() => setShowOnboarding(false)}
        >
          <Text style={tailwind("text-lg font-semibold text-yellow-700")}>
            Skip
          </Text>
        </TouchableOpacity>
        <View style={tailwind("absolute w-full bottom-20")}>
          <View style={tailwind("flex-row items-center mx-36 justify-between")}>
            {data.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={tailwind(
                  clsx(
                    "w-3 h-3 rounded-full",
                    i === activeIndex ? "bg-gray-700" : "bg-gray-400",
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
      </>
    )
  }

  return showOnboarding ? (
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
  ) : (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <Text>Welcome to Home Page!!!</Text>
    </View>
  )
}
