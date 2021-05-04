import React from "react"
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native"
import tailwind from "tailwind-rn"
import Feather from "react-native-vector-icons/Feather"
import IonIcons from "react-native-vector-icons/Ionicons"
import { FlatList } from "react-native-gesture-handler"

const data = [
  { title: "Pizza", food: "🍕" },
  { title: "Burger", food: "🍔" },
  { title: "Sausage", food: "🌭" },
  { title: "Samosa", food: "🌮" },
]

type Item = typeof data[0]

const foodItems = [
  {
    image: require("../assets/images/burger.png"),
    title: "Big cheese burger",
    text: "No 10 opp lekki phase 1 bridge in sangotedo estate",
  },
  {
    image: require("../assets/images/burger.png"),
    title: "Medium cheese burger",
    text: "No 10 opp lekki phase 1 bridge in sangotedo estate",
  },
]

type FoodItem = typeof foodItems[0]

export default function Home() {
  const renderItem = ({ item }: { item: Item }) => {
    return (
      <View
        style={tailwind("p-2 border-2 border-yellow-300 rounded-full mr-4")}
      >
        <View
          style={tailwind(
            "items-center justify-center bg-yellow-50 py-4 px-4 w-24 h-36 rounded-full",
          )}
        >
          <Text style={tailwind("text-3xl mb-2")}>{item.food}</Text>
          <Text style={tailwind("text-gray-700")}>{item.title}</Text>
        </View>
      </View>
    )
  }

  const renderFoodItem = ({ item }: { item: FoodItem }) => {
    return (
      <View style={tailwind("bg-white w-56 px-4 pb-4 mr-4 rounded-3xl")}>
        <View style={tailwind("items-center justify-center py-6")}>
          <Image source={item.image} style={tailwind("w-32 h-32")} />
        </View>
        <Text style={tailwind("font-semibold")}>{item.title}</Text>
        <Text style={tailwind("text-xs my-2")}>{item.text}</Text>
        <View style={tailwind("flex-row items-center justify-between")}>
          <View style={tailwind("flex-row items-center")}>
            <IonIcons name="star" size={18} color="#F5A62E" />
            <Text style={tailwind("ml-1")}>4+</Text>
          </View>
          <IonIcons name="heart" size={18} color="#FE554A" />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={tailwind("flex-1 bg-gray-100")}>
      <StatusBar backgroundColor="#F3F4F6" />
      <View>
        <View
          style={tailwind(
            "flex-row items-center justify-between w-full mt-4 px-8",
          )}
        >
          <TouchableOpacity
            style={tailwind(
              "w-10 h-10 bg-white items-center justify-center rounded-xl",
            )}
          >
            <Feather name="menu" size={24} />
          </TouchableOpacity>
          <View style={tailwind("items-center")}>
            <View style={tailwind("flex-row")}>
              <Text style={tailwind("underline mr-1")}>Delivery to</Text>
              <Feather name="chevron-down" size={18} />
            </View>
            <Text style={tailwind("text-yellow-700 mt-1")}>
              lekki phase 1, Estate
            </Text>
          </View>
          <TouchableOpacity
            style={tailwind(
              "w-10 h-10 bg-white items-center justify-center rounded-xl",
            )}
          >
            <Image
              source={require("../assets/images/emoji.png")}
              style={tailwind("w-16 h-16 mt-5")}
            />
          </TouchableOpacity>
        </View>

        {/* Delicious Food */}
        <View style={tailwind("mt-8 mx-8")}>
          <Text style={tailwind("font-bold text-xl")}>
            Enjoy Delicious food
          </Text>
          <View style={tailwind("mt-8")}>
            <FlatList
              data={data}
              keyExtractor={item => item.title}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Popular Restaurants */}
        <View style={tailwind("mt-8 mx-8")}>
          <View style={tailwind("flex-row items-center justify-between")}>
            <Text style={tailwind("font-medium text-lg")}>
              Popular restaurants
            </Text>
            <Text style={tailwind("underline text-yellow-700")}>
              View all(29)
            </Text>
          </View>
          <View style={tailwind("mt-6")}>
            <FlatList
              data={foodItems}
              keyExtractor={item => item.title}
              renderItem={renderFoodItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
