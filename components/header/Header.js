import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainTabNavigator from "../tabNavigator/MainTabNavigator"
import style from "./Styles"
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: style.header.backgroundColor
        },
        headerTintColor: style.header.textColor,
        headerTitleAlign: style.header.textAlign,
        headerTitleStyle: {
          fontWeight: style.header.fontWeight,
        },
      }}
    >
      <Stack.Screen
        name="MusicList"
        component={MainTabNavigator}
        options={{
          title: "Choose Music",
          headerLeft: () => {
            return (
              <View>
                <TouchableOpacity>
                  <Text>Cancel</Text>
                </TouchableOpacity>
              </View>
            );
          },
          headerRight: () => {
            return (
              <View>
                <TouchableOpacity>
                  <Text>Done</Text>
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
}
