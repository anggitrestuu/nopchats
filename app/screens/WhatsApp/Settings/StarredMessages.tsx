/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, ImageStyle } from "react-native"
import { Icon, Screen, Text } from "../../../components"
import { spacing, colors } from "../../../theme"

import { ChatTabScreenProps } from "app/navigators/WhatsAppNavigator"

interface SettingsStarredMessagesScreenProps
  extends ChatTabScreenProps<"SettingsStarredMessages"> {}

export const SettingsStarredMessagesScreen: FC<SettingsStarredMessagesScreenProps> = observer(
  function SettingsStarredMessgaesScreen(_props) {
    const { navigation } = _props

    const handleBack = () => {
      navigation.goBack()
    }

    return (
      <Screen preset="fixed" style={$container} safeAreaEdges={["top"]}>
        <View
          style={{
            flexDirection: "row",
            padding: spacing.small,
          }}
        >
          <TouchableOpacity
            onPress={handleBack}
            style={{
              ...$flexRow,
              flex: 1,
            }}
          >
            <Icon color={colors.palette.blue100} icon="caretLeft" onPress={handleBack} />
            <Text
              style={{
                color: colors.palette.blue100,
              }}
              size="md"
              text="Settings"
            />
          </TouchableOpacity>
          <View
            style={{
              ...$flexRow,
              flex: 2,
            }}
          >
            <Text size="lg" text="Starred Messages" />
          </View>
        </View>
      </Screen>
    )
  },
)

const $container: ViewStyle = {
  backgroundColor: colors.palette.neutral200,
}

const $imageRounded: ImageStyle = {
  width: 60,
  height: 60,
  borderRadius: 50,
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}
