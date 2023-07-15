import { atom } from "recoil"

export const locationState = atom({
    key: "location",
    default: {
        lng: "",
        lat: ""
    }
})

export const userState = atom({
    key: "user",
    default: {
        username: "",
        website: "",
    }
})


