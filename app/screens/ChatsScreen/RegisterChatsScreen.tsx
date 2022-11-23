import { Screen, Text, TextField } from "../../components"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppStackScreenProps } from "../../navigators"
import { TextStyle, View, ViewStyle } from "react-native"
import { spacing, colors } from "../../theme"

interface RegisterChatsScreenProps extends AppStackScreenProps<"RegisterChats"> {}

export const RegisterChatsScreen: FC<RegisterChatsScreenProps> = observer(
  function RegisterChatsScreen(_props) {
    const [phoneNumber, setPhoneNumber] = React.useState("")

    const handleChange = (text: string) => {
      setPhoneNumber(text)
    }

    console.log("phoneNumber", phoneNumber)

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$heading}>
          <View style={$flex1}></View>
          <View>
            <Text preset="bold" size="md" text={"Phone Number"} />
          </View>
          <View style={$done}>
            <Text preset="default" size="md" text={"Done"} />
          </View>
        </View>
        <View style={$paddingContainer}>
          <Text
            style={$textSubHeading}
            preset="default"
            size="md"
            text={"Please confirm your country code and enter your phone number "}
          />
        </View>

        <View style={$paddingContainer}>
          <View style={$phoneNumberWrapper}>
            <View style={$countryCode}>
              <Text preset="default" size="xl" text={"+62"} />
            </View>
            <View style={$phoneNumber}>
              <TextField
                onChangeText={handleChange}
                placeholder="Phone Number"
                inputWrapperStyle={$inputWrapper}
                keyboardType="phone-pad"
                style={$inputStyle}
              />
            </View>
          </View>
        </View>
      </Screen>
    )
  },
)

const $paddingContainer: ViewStyle = {
  paddingHorizontal: spacing.small,
  paddingVertical: spacing.small,
}

const $heading: ViewStyle = {
  ...$paddingContainer,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.palette.neutral200,
  flexDirection: "row",
}

const $flex1: ViewStyle = {
  flex: 1,
}

const $done: ViewStyle = {
  flex: 1,
  alignItems: "flex-end",
}

const $textSubHeading: TextStyle = {
  textAlign: "center",
}

const $phoneNumberWrapper: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: colors.palette.neutral200,
}

const $countryCode: ViewStyle = {
  flex: 3,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderRightWidth: 0,
  borderColor: "rgba(60, 60, 67, 0.29)",
  borderLeftWidth: 0,
  paddingVertical: 3,
}

const $phoneNumber: ViewStyle = {
  flex: 7,
  borderWidth: 1,
  borderRightWidth: 0,
  borderColor: "rgba(60, 60, 67, 0.29)",
}

const $inputWrapper: ViewStyle = {
  backgroundColor: "transparent",
  borderWidth: 0,
}

const $inputStyle: TextStyle = {
  fontSize: 24,
}
