import { Screen, Text, TextField } from "../../components"
import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { AppStackScreenProps } from "../../navigators"
import { TextStyle, View, ViewStyle } from "react-native"
import { spacing, colors } from "../../theme"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useStores } from "../../models"

interface RegisterChatsScreenProps extends AppStackScreenProps<"RegisterChats"> {}

export const RegisterChatsScreen: FC<RegisterChatsScreenProps> = observer(
  function RegisterChatsScreen(_props) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const {
      usersChatsStore: {
        fullName,
        phoneNumber,
        setFullname,
        setPhoneNumber,
        fetchUserRegister,
        validationErrors,
      },
    } = useStores()

    const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

    const handleSubmit = async () => {
      setIsSubmitted(true)

      if (Object.values(validationErrors).some((v) => !!v)) return
      const data = await fetchUserRegister()

      if (data.kind === "ok") {
        _props.navigation.navigate("HomeChats")
      }
    }

    return (
      <Screen preset="fixed" safeAreaEdges={["top"]}>
        <View style={$heading}>
          <View style={$flex1}></View>
          <View>
            <Text preset="bold" size="md" text={"Phone Number"} />
          </View>
          <View style={$done}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text preset="default" size="md" text={"Done"} />
            </TouchableOpacity>
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
                value={phoneNumber}
                name="phoneNumber"
                onChangeText={setPhoneNumber}
                helper={errors?.phoneNumber}
                status={errors?.phoneNumber ? "error" : undefined}
                placeholder="Phone Number"
                inputWrapperStyle={$inputWrapper}
                keyboardType="phone-pad"
                style={$inputStyle}
              />
            </View>
          </View>
          <View style={$phoneNumberWrapper}>
            <View style={$countryCode}>
              <Text preset="default" size="xl" text={"FullName"} />
            </View>
            <View style={$phoneNumber}>
              <TextField
                name="fullName"
                value={fullName}
                onChangeText={setFullname}
                helper={errors?.fullName}
                status={errors?.fullName ? "error" : undefined}
                placeholder="Isi nama lengkap anda"
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
  marginBottom: spacing.small,
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
