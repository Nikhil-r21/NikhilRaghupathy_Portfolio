import { create } from 'zustand';

interface ModalState {
  isFreelanceModalOpen: boolean;
  openFreelanceModal: () => void;
  closeFreelanceModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isFreelanceModalOpen: false,
  openFreelanceModal: () => set({ isFreelanceModalOpen: true }),
  closeFreelanceModal: () => set({ isFreelanceModalOpen: false }),
}));