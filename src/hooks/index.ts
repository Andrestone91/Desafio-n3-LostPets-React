import { locationState, userState } from "./atoms";
import { useRecoilState } from "recoil";

export function useLocation() {
    return useRecoilState(locationState)
}

export function useUser() {
    return useRecoilState(userState)
}