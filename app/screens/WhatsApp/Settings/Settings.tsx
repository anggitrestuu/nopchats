/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { Icon, Screen, Text } from "../../../components"
import { spacing, colors } from "../../../theme"
import { ChatTabScreenProps } from "app/navigators/WhatsAppNavigator"

interface SettingsScreenProps extends ChatTabScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen(_props) {
  const { navigation } = _props

  const handleSettingEditProfile = () => {
    navigation.navigate("SettingsEditProfile")
  }

  const handleSettingsStarredMessages = () => {
    navigation.navigate("SettingsStarredMessages")
  }

  return (
    <Screen contentContainerStyle={$mainContainer} preset="auto" safeAreaEdges={["top"]}>
      <View style={$heading}>
        <Text preset="bold" size="md" text="Settings" />
      </View>

      <TouchableOpacity
        onPress={handleSettingEditProfile}
        style={{
          ...$paddingContent,
          ...$flexRow,
          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <Image source={{ uri: "https://i.pravatar.cc/150?img=2" }} style={$imageRounded} />
        <View style={{ marginLeft: spacing.medium }}>
          <Text preset="bold" size="md" text="Anggit Restu" />
          <Text preset="default" size="md" text="FullStack Developer" />
        </View>

        <View style={$actionAlign}>
          <View style={$actionRow}>
            <Icon icon="caretRight" color={colors.palette.neutral500} />
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          ...$paddingContent,

          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <TouchableOpacity
          onPress={handleSettingsStarredMessages}
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="starred" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Starred Messages" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            ...$flexRow,
          }}
        >
          <Icon icon="waWeb" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="WhatssApp Web/Desktop" />
          </View>
        </View>
      </View>

      {/*  */}

      <View
        style={{
          ...$paddingContent,

          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <View
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="account" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Account" />
          </View>
        </View>
        <View
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="chatsWa" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Chats" />
          </View>
        </View>
        <View
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="notif" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Notifications" />
          </View>
        </View>
        <View
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="dataStorage" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Data and Storage Usage" />
          </View>
        </View>
      </View>

      {/*  */}
      <View
        style={{
          ...$paddingContent,

          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <View
          style={{
            ...$flexRow,
            marginBottom: spacing.medium,
          }}
        >
          <Icon icon="help" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Help" />
          </View>
        </View>
        <View
          style={{
            ...$flexRow,
          }}
        >
          <Icon icon="tell" size={32} />
          <View
            style={{
              width: "100%",
              marginLeft: spacing.medium,
              borderBottomColor: colors.palette.neutral200,
              borderBottomWidth: 1,
              paddingBottom: spacing.small,
            }}
          >
            <Text size="md" text="Tell a Friend" />
          </View>
        </View>
      </View>
    </Screen>
  )
})

const $imageRounded: ImageStyle = {
  width: 52,
  height: 52,
  borderRadius: 50,
}

const $mainContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral200,
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $paddingContent = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
}

const $flexHeading: ViewStyle = {
  ...$flexRow,
  ...$paddingContent,
}

const $heading: ViewStyle = {
  ...$flexHeading,
  backgroundColor: colors.palette.neutral100,
  justifyContent: "center",
}

const $actionAlign: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
}

const $actionRow: ViewStyle = {
  flexDirection: "row",
}
