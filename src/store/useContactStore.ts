import { create } from 'zustand';

interface ContactState {
  formState: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  isSubmitting: boolean;
  submitSuccess: boolean | null;
  submitError: string | null;
  updateForm: (field: string, value: string) => void;
  resetForm: () => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setSubmitSuccess: (success: boolean | null) => void;
  setSubmitError: (error: string | null) => void;
}

export const useContactStore = create<ContactState>((set) => ({
  formState: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  isSubmitting: false,
  submitSuccess: null,
  submitError: null,
  updateForm: (field, value) => set((state) => ({
    formState: {
      ...state.formState,
      [field]: value,
    },
  })),
  resetForm: () => set({
    formState: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    submitSuccess: null,
    submitError: null,
  }),
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
  setSubmitSuccess: (success) => set({ submitSuccess: success }),
  setSubmitError: (error) => set({ submitError: error }),
}));