/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon, Screen, Text } from "../../../components"
import { spacing, colors } from "../../../theme"
import { ChatTabScreenProps } from "app/navigators/WhatsAppNavigator"

interface SettingsAccountScreenProps extends ChatTabScreenProps<"Settings"> {}

export const SettingsAccountScreen: FC<SettingsAccountScreenProps> = observer(
  function SettingsAccountScreen(_props) {
    const { navigation } = _props
    const handleBack = () => {
      navigation.goBack()
    }
    return (
      <Screen contentContainerStyle={$mainContainer} preset="auto" safeAreaEdges={["top"]}>
        <View
          style={{
            flexDirection: "row",
            padding: spacing.small,
            backgroundColor: colors.palette.neutral100,
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
            <Text size="lg" weight="bold" text="Account" />
          </View>
        </View>

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
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Privacy" />
            </View>
          </View>
          <View
            style={{
              ...$flexRow,
              marginBottom: spacing.medium,
            }}
          >
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Security" />
            </View>
          </View>
          <View
            style={{
              ...$flexRow,
              marginBottom: spacing.medium,
            }}
          >
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Two-Step Verification" />
            </View>
          </View>
          <View
            style={{
              ...$flexRow,
            }}
          >
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Change Number" />
            </View>
          </View>
        </View>

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
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Request Account Info" />
            </View>
          </View>
          <View
            style={{
              ...$flexRow,
            }}
          >
            <View
              style={{
                width: "100%",
                marginLeft: spacing.medium,
                borderBottomColor: colors.palette.neutral200,
                borderBottomWidth: 1,
                paddingBottom: spacing.small,
              }}
            >
              <Text size="md" text="Delete My Account" />
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

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
