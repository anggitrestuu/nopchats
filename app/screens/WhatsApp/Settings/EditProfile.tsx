/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { Icon, Screen, Text, TextField } from "../../../components"
import { spacing, colors } from "../../../theme"

import { ChatTabScreenProps } from "app/navigators/WhatsAppNavigator"

interface SettingsEditProfileScreenProps extends ChatTabScreenProps<"SettingsEditProfile"> {}

export const SettingsEditProfileScreen: FC<SettingsEditProfileScreenProps> = observer(
  function SettingsEditProfileScreen(_props) {
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
            <Text size="lg" text="Edit Profile" />
          </View>
        </View>

        <View
          style={{
            backgroundColor: colors.palette.neutral100,
            paddingTop: 55,
            padding: spacing.small,
          }}
        >
          <View
            style={{
              ...$flexRow,
              marginBottom: spacing.medium,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: "https://i.pravatar.cc/150?img=2" }} style={$imageRounded} />
              <Text
                style={{
                  marginTop: spacing.tiny,
                  color: colors.palette.blue100,
                }}
                text="Edit"
              />
            </View>
            <View
              style={{
                ...$flexRow,
                flex: 2,
                marginLeft: spacing.medium,
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text text="Enter your name and add an optional profile picture" />
            </View>
          </View>
          <TextField
            inputWrapperStyle={{
              backgroundColor: "transparent",
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderColor: colors.palette.neutral200,
            }}
            defaultValue="Anggit Restu"
          />
        </View>

        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              marginLeft: spacing.small,
            }}
            text="Phone Number"
          />
          <TextField
            inputWrapperStyle={{
              backgroundColor: colors.background,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderColor: colors.palette.neutral200,
              paddingVertical: spacing.small,
            }}
            value="081374373918"
          />
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              marginLeft: spacing.small,
            }}
            text="About"
          />
          <TextField
            inputWrapperStyle={{
              backgroundColor: colors.background,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderColor: colors.palette.neutral200,
              paddingVertical: spacing.small,
            }}
            defaultValue="Anggit Restu"
          />
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
