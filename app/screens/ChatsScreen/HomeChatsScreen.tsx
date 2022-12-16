import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { AppStackScreenProps } from "../../navigators/AppNavigator"
import { Screen, Text, Toggle, ToggleProps } from "../../components"
import { spacing, colors } from "../../theme"
import { useFocusEffect } from "@react-navigation/native"
import { socket } from "../../socket"

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

type message = {
  message: string
  id: string
  user: string
  timestamp: string
}

type TRoom = {
  id: string
  phoneNumber: string
  messages: message[]
}

export const HomeChatsScreen: FC<HomeChatsScreenProps> = observer(function HomeChatsScreen(_props) {
  const [isShowToggle, setIsShowToggle] = React.useState<boolean>(false)
  const [rooms, setRooms] = React.useState<TRoom[]>([])

  const handleShowToggle = () => {
    console.log("clicked", isShowToggle)
    setIsShowToggle(!isShowToggle)
  }

  useFocusEffect(
    React.useCallback(() => {
      socket.connect()

      socket.on("roomsList", (room) => {
        console.log("room", room)
        setRooms(room)
      })
    }, [socket]),
  )

  const handlePersonalChat = (roomId: string) => {
    _props.navigation.navigate("PersonalChats", {
      room_id: roomId,
    })
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
        {rooms.length > 0 &&
          rooms.map((item, index) => (
            <TouchableOpacity
              onPress={() => handlePersonalChat(item.id)}
              style={$chatsContainer}
              key={index}
            >
              {isShowToggle ? (
                <ControlledToggle id={index} variant="radio" containerStyle={$radioContainer} />
              ) : null}
              {/* <Image source={{ uri: item.imageProfileUrl }} style={$imageRounded} /> */}
              <View style={$subChatsContainer}>
                <View style={$titleChatsContainer}>
                  <Text preset="bold" size="sm" text={item.phoneNumber ?? ""} />
                  <Text preset="default" size="xs" text={item.messages[0]?.user ?? ""} />
                </View>
                <Text preset="default" size="xs" text={item.messages[0]?.message ?? ""} />
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
