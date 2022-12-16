import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { api } from "../services/api"

export const UsersChatsStoreModel = types
  .model("UsersChatsStore")
  .props({
    fullName: types.optional(types.string, ""),
    phoneNumber: types.optional(types.string, ""),
    profile_picture: types.optional(types.string, ""),
    biodata: types.optional(types.string, ""),
    status: types.optional(types.string, ""),
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get validationErrors() {
      return {
        fullName: (function () {
          if (store.fullName.length === 0) return "can't be blank"
          if (store.fullName.length < 6) return "must be at least 6 characters"
          return ""
        })(),
        phoneNumber: (function () {
          if (store.phoneNumber.length === 0) return "can't be blank"
          if (store.phoneNumber.length < 6) return "must be at least 6 characters"
          return ""
        })(),
      }
    },
  }))
  .actions((store) => ({
    async fetchUserRegister() {
      const payload = {
        fullName: store.fullName,
        phoneNumber: store.phoneNumber,
      }

      const response = await api.usersChatsRegister(payload)
      if (response.kind === "ok") {
        store.setProp("fullName", response.user.fullName)
        store.setProp("phoneNumber", response.user.phoneNumber)
        store.setProp("profile_picture", response.user.profile_picture)
        store.setProp("biodata", response.user.biodata)
        store.setProp("status", response.user.status)
      } else {
        console.tron.error(`Error fetching UsersChats: ${JSON.stringify(response)}`, [])
      }

      return response
    },

    setFullname(value: string) {
      store.fullName = value.replace(/ /g, "")
    },
    setPhoneNumber(value: string) {
      store.phoneNumber = value.replace(/ /g, "")
    },
    setProfilePicture(value: string) {
      store.profile_picture = value.replace(/ /g, "")
    },
    setBiodata(value: string) {
      store.biodata = value.replace(/ /g, "")
    },
    setstatus(value: string) {
      store.status = value.replace(/ /g, "")
    },
  }))

export interface UsersChatsStore extends Instance<typeof UsersChatsStoreModel> {}
export interface UsersChatsStoreSnapshot extends SnapshotOut<typeof UsersChatsStoreModel> {}
