import { atom } from "recoil"

export interface newDocModal {
    open: boolean,
}

const defaultStateModal: newDocModal = {
    open: true,

}
export const NewDocModal = atom<newDocModal>({
key:"NewDocModal",
default:defaultStateModal
})