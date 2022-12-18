/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { ChatNavigator, ChatTabParamList } from "./ChatNavigator"
import { DemoTabParamList } from "./DemoNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { WelcomeScreen } from "../screens"
import { CreateStatusScreen } from "../screens/ChatsScreen/CreateStatus"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Login: undefined // @demo remove-current-line
  HomeChats: undefined
  PersonalChats: {
    room_id: string
  }
  EditContact: undefined
  RegisterChats: undefined
  Chat: NavigatorScreenParams<ChatTabParamList>
  CreateStatus: undefined
  Demo: NavigatorScreenParams<DemoTabParamList> // @demo remove-current-line
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Chat"} // @demo remove-current-line
    >
      <>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CreateStatus" component={CreateStatusScreen} />
        <Stack.Screen name="Chat" component={ChatNavigator} />

        {/* <Stack.Screen name="EditContact" component={EditContactChatsScreen} />
        <Stack.Screen name="RegisterChats" component={RegisterChatsScreen} />
        <Stack.Screen name="PersonalChats" component={PersonalChatsScreen} />
        <Stack.Screen name="HomeChats" component={HomeChatsScreen} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      </>

      {/* @demo remove-block-end */}
      {/** 🔥 Your screens go here */}
    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
