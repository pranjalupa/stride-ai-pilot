import { create } from 'zustand';

export type BufferOption = "none" | "0-1L" | "1-10L" | "10L+" | "other";
export type HorizonOption = "3-6m" | "6m-3y" | "3-5y" | "5y+" | "other";

interface StrideState {
  amount: string;
  intentText: string;
  buffer: BufferOption | null;
  horizon: HorizonOption | null;
  setAmount: (amount: string) => void;
  setIntentText: (intentText: string) => void;
  setBuffer: (buffer: BufferOption) => void;
  setHorizon: (horizon: HorizonOption) => void;
}

export const useStrideStore = create<StrideState>((set) => ({
  amount: '10L', // Default mock data from Screen 1
  intentText: 'I want to invest ₹10L. I need some of it to stay accessible.',
  buffer: null,
  horizon: null,
  setAmount: (amount) => set({ amount }),
  setIntentText: (intentText) => set({ intentText }),
  setBuffer: (buffer) => set({ buffer }),
  setHorizon: (horizon) => set({ horizon }),
}));
