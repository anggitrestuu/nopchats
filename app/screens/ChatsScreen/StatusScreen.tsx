import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { Icon, Screen, Text } from "../../components"
import { spacing, colors } from "../../theme"
import { ChatTabScreenProps } from "app/navigators/ChatNavigator"

interface StatusScreenProps extends ChatTabScreenProps<"Status"> {}

export const StatusScreen: FC<StatusScreenProps> = observer(function StatusScreen(_props) {
  return (
    <Screen contentContainerStyle={$mainContainer} preset="fixed" safeAreaEdges={["top"]}>
      <View style={$heading}>
        <TouchableOpacity>
          <Text
            preset="default"
            size="md"
            style={{ color: colors.palette.blue100 }}
            text="Privacy"
          />
        </TouchableOpacity>
        <Text preset="bold" size="md" text="Chats" />
      </View>

      <View
        style={{
          ...$paddingContent,
          ...$flexRow,
          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <Image source={{ uri: "https://i.pravatar.cc/150?img=2" }} style={$imageRounded} />
        <View style={{ marginLeft: spacing.medium }}>
          <Text preset="bold" size="md" text="My status" />
          <Text preset="default" size="md" text="Add to my status" />
        </View>

        <View style={$actionAlign}>
          <View style={$actionRow}>
            <Icon
              style={{
                marginRight: spacing.small,
              }}
              icon="cameraStatus"
            />
            <Icon icon="pencilStatus" />
          </View>
        </View>
      </View>

      <View
        style={{
          ...$paddingContent,
          ...$flexRow,
          marginTop: spacing.extraLarge,
          backgroundColor: colors.palette.neutral100,
        }}
      >
        <Text size="md" text="No recent updates to show right now." />
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
  justifyContent: "space-between",
}

// const $action: ViewStyle = {
//   align: { flex: 1, alignItems: "flex-end" },
//   row: { flexDirection: "row" },
// }

const $actionAlign: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
}

const $actionRow: ViewStyle = {
  flexDirection: "row",
}
