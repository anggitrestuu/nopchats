/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { Icon, Screen, TextField } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"

interface CreateStatusScreenProps extends AppStackScreenProps<"CreateStatus"> {}

export const CreateStatusScreen: FC<CreateStatusScreenProps> = observer(function CreateStatusScreen(
  _props,
) {
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
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContentContainer}>
      <View style={$topContainer}>
        <View style={$flexRow}>
          <TouchableOpacity onPress={handleToHome}>
            <Icon icon="x" color={colors.palette.neutral100} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChangeBackgroundColour}>
            <Icon icon="palete" color={colors.palette.neutral100} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          flexBasis: "80%",
        }}
      >
        <TextField
          multiline={true}
          style={$inputStyle}
          inputWrapperStyle={$inputWrapper}
          placeholder="Type a status"
          placeholderTextColor={colors.palette.neutral100}
        />
      </View>
    </Screen>
  )
})

const $screenContentContainer: ViewStyle = {
  flex: 1,
  padding: spacing.small,
  backgroundColor: colors.palette.blue100,
}

const $topContainer: ViewStyle = {
  paddingHorizontal: spacing.small,
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

const $inputWrapper: ViewStyle = {
  height: 200,
  backgroundColor: "transparent",
  borderWidth: 0,
}

const $inputStyle: TextStyle = {
  color: colors.palette.neutral100,
  padding: 10,
  fontSize: 30,
  textAlign: "center",
}
