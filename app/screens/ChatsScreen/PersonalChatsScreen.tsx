import { Screen, Text, Icon, TextField } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useRef } from "react"
import { colors, spacing } from "../../theme"
import {
  Image,
  ImageStyle,
  ScrollView,
  View,
  ViewStyle,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { socket } from "../../socket"
interface PersonalChatsScreenProps extends AppStackScreenProps<"PersonalChats"> {}
const imageProfileUrl =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

const dataMessages = [
  {
    id: 1,
    message: "Hello0oooooooooooooooooooooooooooooo",
    isMe: true,
    time: "10:00",
  },
  {
    id: 2,
    message: "Hi",
    isMe: false,
    time: "10:01",
  },
  {
    id: 3,
    message: "How are you?",
    isMe: true,
  },
  {
    id: 4,
    message: "I'm fine, and you?",
    isMe: false,
  },
  {
    id: 5,
    message: "I'm fine too",
    isMe: true,
  },
  {
    id: 6,
    message: "Nice to hear that",
    isMe: false,
  },
  {
    id: 7,
    message: "Bye",
    isMe: true,
  },
  {
    id: 8,
    message: "Bye",
    isMe: false,
  },
  {
    id: 1,
    message: "Hello0oooooooooooooooooooooooooooooo",
    isMe: true,
    time: "10:00",
  },
  {
    id: 2,
    message: "Hi",
    isMe: false,
    time: "10:01",
  },
  {
    id: 3,
    message: "How are you?",
    isMe: true,
  },
  {
    id: 4,
    message: "I'm fine, and you?",
    isMe: false,
  },
  {
    id: 5,
    message: "I'm fine too",
    isMe: true,
  },
  {
    id: 6,
    message: "Nice to hear that",
    isMe: false,
  },
  {
    id: 7,
    message: "Bye",
    isMe: true,
  },
  {
    id: 8,
    message: "Bye",
    isMe: false,
  },
  {
    id: 1,
    message: "Hello0oooooooooooooooooooooooooooooo",
    isMe: true,
    time: "10:00",
  },
  {
    id: 2,
    message: "Hi",
    isMe: false,
    time: "10:01",
  },
  {
    id: 3,
    message: "How are you?",
    isMe: true,
  },
  {
    id: 4,
    message: "I'm fine, and you?",
    isMe: false,
  },
  {
    id: 5,
    message: "I'm fine too",
    isMe: true,
  },
  {
    id: 6,
    message: "Nice to hear that",
    isMe: false,
  },
  {
    id: 7,
    message: "Bye",
    isMe: true,
  },
  {
    id: 8,
    message: "Bye",
    isMe: false,
  },
  {
    id: 1,
    message: "Hello0oooooooooooooooooooooooooooooo",
    isMe: true,
    time: "10:00",
  },
  {
    id: 2,
    message: "Hi",
    isMe: false,
    time: "10:01",
  },
  {
    id: 3,
    message: "How are you?",
    isMe: true,
  },
  {
    id: 4,
    message: "I'm fine, and you?",
    isMe: false,
  },
  {
    id: 5,
    message: "I'm fine too",
    isMe: true,
  },
  {
    id: 6,
    message: "Nice to hear that",
    isMe: false,
  },
  {
    id: 7,
    message: "Bye",
    isMe: true,
  },
  {
    id: 8,
    message: "Bye",
    isMe: false,
  },
]

export const PersonalChatsScreen: FC<PersonalChatsScreenProps> = observer(
  function PersonalChatsScreen(_props) {
    const roomId = _props.route.params.room_id

    const userMe = "anggit"
    const [messages, setMessages] = React.useState([])
    const [messageText, setMessageText] = React.useState({
      room_id: roomId,
      message: "",
      user: userMe,
      timestamp: "22-12-12",
    })
    const scrollViewRef = useRef<ScrollView | null>(null)

    const scrollToBottom = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
    }

    const submitMessage = () => {
      scrollToBottom()
      socket.emit("newMessage", messageText)
      setMessageText({ ...messageText, message: "" })
    }

    useFocusEffect(
      React.useCallback(() => {
        // setMessages(dataMessages)

        console.log("roomId", roomId)

        socket.emit("findRoom", {
          room_id: roomId,
        })

        socket.on("foundRoom", (room) => {
          console.log("foundRoom", room)
          setMessages(room)
        })
      }, [socket]),
    )

    const handleBack = () => {
      _props.navigation.navigate("HomeChats")
    }

    return (
      <Screen
        contentContainerStyle={$mainContainer}
        preset="fixed"
        safeAreaEdges={["top", "bottom"]}
      >
        <View style={$chatsContainer}>
          <TouchableOpacity onPress={handleBack}>
            <Icon icon="back" />
          </TouchableOpacity>
          <Image source={{ uri: imageProfileUrl }} style={$imageRounded} />
          <View style={$subChatsContainer}>
            <View style={$titleChatsContainer}>
              <Text preset="bold" size="sm" text="marthaa" />
            </View>
            <Text preset="default" size="xs" text={"tap here for contact info"} />
          </View>
        </View>
        <Screen preset="scroll" style={$screenContentContainer}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView ref={scrollViewRef}>
              {messages.length > 0 &&
                messages.map((item, index) =>
                  item.user === userMe ? (
                    <View style={$isMeWrapper} key={index}>
                      <Text preset="default" size="sm" text={item.message} />
                    </View>
                  ) : (
                    <View style={$isNotMeWrapper} key={index}>
                      <Text preset="default" size="sm" text={item.message} />
                    </View>
                  ),
                )}
            </ScrollView>
          </KeyboardAvoidingView>
        </Screen>
        <View style={$bottomChats}>
          <View style={$flex1}>
            <Text
              text="+"
              size="xxl"
              selectionColor={colors.palette.neutral200}
              preset="subheading"
            />
          </View>
          <View style={$bottomChatsContainer}>
            <TextField
              name="fullName"
              value={messageText.message}
              onChangeText={(value) => {
                setMessageText({ ...messageText, message: value })
              }}
              placeholder="Pesan..."
              inputWrapperStyle={$textInputWrapper}
            />
          </View>
          <TouchableOpacity onPress={submitMessage} style={$iconRight}>
            <Icon icon="caretRight" />
          </TouchableOpacity>
        </View>
      </Screen>
    )
  },
)

const $imageRounded: ImageStyle = {
  width: 52,
  height: 52,
  borderRadius: 50,
  marginLeft: spacing.medium,
}
const $flexRow: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

const $titleChatsContainer: ViewStyle = {
  ...$flexRow,
  justifyContent: "space-between",
}

const $subChatsContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1,
  marginLeft: spacing.small,
}
const $paddingContent: ViewStyle = {
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
}

const $chatsContainer: ViewStyle = {
  ...$flexRow,
  ...$paddingContent,
  backgroundColor: colors.palette.neutral100,
  height: 75,
}

const $screenContentContainer: ViewStyle = {
  paddingBottom: spacing.huge,
  paddingHorizontal: spacing.medium,
  backgroundColor: colors.palette.neutral200,
}

const $mainContainer: ViewStyle = {
  backgroundColor: colors.palette.neutral200,
  flex: 1,
}

const $bottomChats: ViewStyle = {
  backgroundColor: colors.palette.neutral200,
  ...$flexRow,
  ...$paddingContent,
}

const $flex1: ViewStyle = {
  flex: 1,
}

const $iconRight: ViewStyle = {
  flex: 1,
  alignContent: "center",
  paddingHorizontal: spacing.medium,
}

const $bottomChatsContainer = {
  flex: 8,
}

const $textInputWrapper: ViewStyle = {
  borderRadius: 100,
}

const $isMeWrapper: ViewStyle = {
  backgroundColor: colors.palette.green100,
  borderRadius: 10,
  padding: spacing.small,
  maxWidth: "70%",
  alignSelf: "flex-end",
  marginBottom: spacing.small,
}

const $isNotMeWrapper: ViewStyle = {
  backgroundColor: colors.palette.neutral100,
  borderRadius: 10,
  padding: spacing.small,
  maxWidth: "70%",
  alignSelf: "flex-start",
  marginBottom: spacing.small,
}
