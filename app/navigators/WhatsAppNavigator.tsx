import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import * as Chats from "../screens/WhatsApp"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { SettingsEditProfileScreen } from "../screens/WhatsApp/Settings/EditProfile"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SettingsStarredMessagesScreen } from "../screens/WhatsApp/Settings/StarredMessages"

export type ChatTabParamList = {
  Status: undefined
  Calls: undefined
  Camera: undefined
  Chats: undefined
  Settings: undefined
  SettingsEditProfile: undefined
  SettingsStarredMessages: undefined
}

export type ChatTabScreenProps<T extends keyof ChatTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<ChatTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<ChatTabParamList>()

const Stack = createNativeStackNavigator<ChatTabParamList>()

function SettingsStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"Settings"}>
      <Stack.Screen name="Settings" component={Chats.SettingsScreen} />
      <Stack.Screen name="SettingsEditProfile" component={SettingsEditProfileScreen} />
      <Stack.Screen name="SettingsStarredMessages" component={SettingsStarredMessagesScreen} />
    </Stack.Navigator>
  )
}

export function ChatNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="Calls"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Status"
        component={Chats.StatusScreen}
        options={{
          tabBarLabel: "Status",
          tabBarIcon: ({ focused }) => (
            <Icon
              containerStyle={{
                marginBottom: spacing.tiny,
              }}
              size={32}
              icon="status"
              color={focused && colors.palette.blue100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Calls"
        component={Chats.CallsScreen}
        options={{
          tabBarLabel: "Calls",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={32}
              containerStyle={{
                marginBottom: spacing.tiny,
              }}
              icon="calls"
              color={focused && colors.palette.blue100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Camera"
        component={Chats.HomeChatsScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={32}
              containerStyle={{
                marginBottom: spacing.tiny,
              }}
              icon="camera"
              color={focused && colors.palette.blue100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chats"
        component={Chats.HomeChatsScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={32}
              containerStyle={{
                marginBottom: spacing.tiny,
              }}
              icon="chats"
              color={focused && colors.palette.blue100}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <Icon
              size={32}
              containerStyle={{
                marginBottom: spacing.tiny,
              }}
              icon="settingsv2"
              color={focused && colors.palette.blue100}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.medium,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}
