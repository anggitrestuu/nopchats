/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon, Screen, Text, TextField } from "../../components"
import { colors, spacing } from "../../theme"
import { ChatTabScreenProps } from "../../navigators/ChatNavigator"
import { dataHomeScreens } from "./data"

interface CallsScreenProps extends ChatTabScreenProps<"Calls"> {}

export const CallsScreen: FC<CallsScreenProps> = observer(function CallsScreen(_props) {
  const listBackgroundColour = [
    colors.palette.blue100,
    colors.palette.green100,
    colors.palette.accent100,
    colors.palette.primary100,
  ]

  const [, setBackgroundColour] = React.useState<string>(listBackgroundColour[0])

  const handleChangeBackgroundColour = () => {
    const randomIndex = Math.floor(Math.random() * listBackgroundColour.length)
    setBackgroundColour(listBackgroundColour[randomIndex])
  }

  const handleToHome = () => {
    _props.navigation.navigate("Chat")
  }

  return (
    <Screen contentContainerStyle={$mainContainer} preset="fixed" safeAreaEdges={["top"]}>
      <View style={$heading}>
        <TouchableOpacity>
          <Text preset="default" size="md" style={{ color: colors.palette.blue100 }} text="Edit" />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: 76,
              paddingVertical: spacing.tiny,
              backgroundColor: colors.palette.blue100,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderColor: colors.palette.blue100,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: colors.palette.neutral100,
              }}
              text="All"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 76,
              paddingVertical: spacing.tiny,
              backgroundColor: colors.palette.neutral200,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderColor: colors.palette.blue100,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: colors.palette.blue100,
              }}
              text="Missed"
            />
          </TouchableOpacity>
        </View>

        <Text size="md" style={{ color: colors.palette.blue100 }} text="Calls" />
      </View>

      <Screen preset="scroll" style={$screenContentContainer}>
        {dataHomeScreens.length > 0 &&
          dataHomeScreens.map((item, index) => (
            <TouchableOpacity
              // onPress={() => handlePersonalChat(item.id)}
              style={$chatsContainer}
              key={index}
            >
              <Image source={{ uri: item.imageProfileUrl }} style={$imageRounded} />
              <View style={$subChatsContainer}>
                <View style={$titleChatsContainer}>
                  <Text preset="bold" size="sm" text={item.name ?? ""} />
                  <View style={$flexRow}>
                    <Text preset="default" size="xs" text="10/13/2022" />
                    <Icon
                      icon="info"
                      size={24}
                      style={{
                        marginLeft: spacing.tiny,
                      }}
                    />
                  </View>
                </View>
                <View style={$flexRow}>
                  <Icon
                    icon="calls"
                    size={14}
                    style={{
                      marginRight: spacing.tiny,
                    }}
                  />
                  <Text preset="default" size="xs" text="outgoing" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </Screen>
    </Screen>
  )
})

const $imageRounded: ImageStyle = {
  width: 52,
  height: 52,
  borderRadius: 50,
}

const $subChatsContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  marginLeft: spacing.small,
  borderBottomWidth: 1,
  borderBottomColor: colors.palette.neutral200,
  paddingBottom: spacing.small,
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $titleChatsContainer: ViewStyle = {
  ...$flexRow,
  justifyContent: "space-between",
}

const $chatsContainer: ViewStyle = {
  ...$flexRow,
  marginBottom: spacing.small,
  height: 75,
}

const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.small,
}

const $mainContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral100,
}

const $paddingContent = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
}

const $flexHeading: ViewStyle = {
  ...$flexRow,
  ...$paddingContent,
  backgroundColor: colors.palette.neutral200,
}

const $heading: ViewStyle = {
  ...$flexHeading,
  backgroundColor: colors.palette.neutral200,
  justifyContent: "space-between",
}

const $actionAlign: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
}

const $actionRow: ViewStyle = {
  flexDirection: "row",
}
