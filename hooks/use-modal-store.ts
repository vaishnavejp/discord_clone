// used to control all modals in the app
import { Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createServer" | "invite" | "editServer" | "members";

interface ModalData {
    server?: Server
}

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    data: ModalData;
    onOpen: (type: ModalType, data?: ModalData) => void; 
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false, 
    onOpen: (type, data) => set({ isOpen: true, type, data}),
    onClose: () => set({ isOpen: false, type: null})
}));

