import { Screen, Text, TextField } from "../../components"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppStackScreenProps } from "../../navigators"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { spacing, colors } from "../../theme"

interface EditContactScreenProps extends AppStackScreenProps<"EditContact"> {}

export const EditContactChatsScreen: FC<EditContactScreenProps> = observer(
  function EditContactChatsScreen(_props) {
    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$heading}>
          <TouchableOpacity>
            <Text
              style={{ color: colors.palette.blue100 }}
              preset="default"
              size="md"
              text="Cancel"
            />
          </TouchableOpacity>
          <Text size="md" preset="heading">
            Edit Contact
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: colors.palette.neutral300 }}
              preset="default"
              size="md"
              text="Save"
            />
          </TouchableOpacity>
        </View>

        <View style={$paddingContent}>
          <View style={$wrapperRow}>
            <Text size="sm" weight="bold" text="Name" style={$widthText} />
            <View style={$wrapperTextField}>
              <TextField
                name="fullName"
                placeholder="Name"
                inputWrapperStyle={$inputWrapper}
                keyboardType="phone-pad"
                style={$inputStyle}
              />
            </View>
          </View>
          <View style={$wrapperRow}>
            <Text size="sm" weight="bold" text="Phone" style={$widthText} />
            <View style={$wrapperTextField}>
              <TextField
                name="fullName"
                placeholder="Phone Number"
                inputWrapperStyle={$inputWrapper}
                keyboardType="phone-pad"
                style={$inputStyle}
              />
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ color: colors.palette.blue100 }} text="more fields" />
          </TouchableOpacity>

          <View style={$marginView} />

          <TouchableOpacity>
            <Text style={{ color: colors.palette.red100 }} text="Delete Contact" />
          </TouchableOpacity>
        </View>
      </Screen>
    )
  },
)

const $heading: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: spacing.medium,
  marginBottom: 35,
}

const $paddingContent: ViewStyle = {
  padding: spacing.medium,
}

const $marginView: ViewStyle = {
  marginBottom: spacing.medium,
}

const $inputWrapper: ViewStyle = {
  marginTop: -10,
  backgroundColor: "transparent",
  borderWidth: 0,
  borderBottomColor: colors.palette.neutral200,
  paddingBottom: spacing.tiny,
  borderBottomWidth: 2,
}

const $wrapperRow: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: spacing.medium,
}

const $widthText: TextStyle = {
  width: "30%",
}

const $wrapperTextField: ViewStyle = {
  width: "70%",
}

const $inputStyle: TextStyle = {
  fontSize: 16,
}
