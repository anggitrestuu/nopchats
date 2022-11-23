import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Screen, Text, Toggle, ToggleProps } from "../../components"
import { spacing, colors } from "../../theme"

interface HomeChatsScreenProps extends AppStackScreenProps<"HomeChats"> {}

const dataChats = [
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
  {
    imageProfileUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "John Doe",
    date: "12/12/2020",
    lastMessage: "Hello, how are you?",
  },
]

function ControlledToggle(props: ToggleProps) {
  console.log("props.id", props?.id)
  const [value, setValue] = React.useState(props.value)

  return <Toggle {...props} value={value} onPress={() => setValue(!value)} />
}

export const HomeChatsScreen: FC<HomeChatsScreenProps> = observer(function HomeChatsScreen(_props) {
  const [isShowToggle, setIsShowToggle] = React.useState<boolean>(false)

  const handleShowToggle = () => {
    console.log("clicked", isShowToggle)
    setIsShowToggle(!isShowToggle)
  }

  const handlePersonalChat = () => {
    _props.navigation.navigate("PersonalChats")
  }

  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <View style={$heading}>
        <TouchableOpacity onPress={handleShowToggle}>
          <Text
            preset="default"
            size="md"
            style={{ color: colors.palette.blue100 }}
            text={isShowToggle ? "Cancel" : "Edit"}
          />
        </TouchableOpacity>
        <Text preset="bold" size="md" text="Chats" />
        <TouchableOpacity>
          <Text
            style={{ color: colors.palette.blue100 }}
            preset="default"
            size="md"
            text="New Chat"
          />
        </TouchableOpacity>
      </View>

      <View style={$flexCol}>
        <Text text="Chats" size="xxl" preset="heading" />

        <View style={$subHeading}>
          <TouchableOpacity>
            <Text
              preset="default"
              size="md"
              style={{ color: colors.palette.blue100 }}
              text="Broadcast List"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{ color: colors.palette.blue100 }}
              preset="default"
              size="md"
              text="New Group"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={$screenContentContainer}>
        {dataChats.map((item, index) => (
          <TouchableOpacity onPress={handlePersonalChat} style={$chatsContainer} key={index}>
            {isShowToggle ? (
              <ControlledToggle id={index} variant="radio" containerStyle={$radioContainer} />
            ) : null}
            <Image source={{ uri: item.imageProfileUrl }} style={$imageRounded} />
            <View style={$subChatsContainer}>
              <View style={$titleChatsContainer}>
                <Text preset="bold" size="sm" text={item.name} />
                <Text preset="default" size="xs" text={item.date} />
              </View>
              <Text preset="default" size="xs" text={item.lastMessage} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Screen>
  )
})

const $imageRounded: ImageStyle = {
  width: 52,
  height: 52,
  borderRadius: 50,
}

const $radioContainer: ViewStyle = {
  marginRight: spacing.small,
}

const $paddingContent = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
}

const $screenContentContainer: ViewStyle = {
  ...$paddingContent,
}

const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $flexCol: ViewStyle = {
  flexDirection: "column",
  ...$paddingContent,
}

const $subChatsContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  marginLeft: spacing.small,
}

const $chatsContainer: ViewStyle = {
  ...$flexRow,
  marginBottom: spacing.small,
  height: 75,
}

const $titleChatsContainer: ViewStyle = {
  ...$flexRow,
  justifyContent: "space-between",
}

const $flexHeading: ViewStyle = {
  ...$flexRow,
  ...$paddingContent,
}

const $heading: ViewStyle = {
  ...$flexHeading,
  backgroundColor: colors.palette.neutral200,
  justifyContent: "space-between",
}

const $subHeading: ViewStyle = {
  ...$flexRow,
  justifyContent: "space-between",
}
