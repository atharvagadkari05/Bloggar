import { atom } from "recoil"

export interface AuthStateModal {
    open: boolean,
    view: "login" | "signup" 
}

const defaultStateModal: AuthStateModal = {
    open: false,
    view: "login"

}
export const authstatemodalAtom = atom<AuthStateModal>({
key:"authstatemodalAtom",
default:defaultStateModal
})