import { create } from "zustand";
import type { Address } from "@/types/account";

export type CheckoutStep = "address" | "shipping" | "payment";

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  type: "credit_card" | "bank_transfer" | "cash_on_delivery";
  cardDetails?: {
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv: string;
  };
}

interface CheckoutState {
  // Addresses
  addresses: Address[];
  setAddresses: (addresses: Address[]) => void;
  updateAddress: (address: Address) => void;
  deleteAddress: (addressId: string) => void;
  addAddress: (address: Address) => void;

  // Current active step
  activeStep: CheckoutStep;
  completedSteps: CheckoutStep[];

  // Selected data
  selectedAddress: Address | null;
  selectedShipping: ShippingOption | null;
  selectedPayment: PaymentMethod | null;

  // Actions
  setActiveStep: (step: CheckoutStep) => void;
  setSelectedAddress: (address: Address) => void;
  setSelectedShipping: (shipping: ShippingOption) => void;
  setSelectedPayment: (payment: PaymentMethod) => void;
  completeStep: (step: CheckoutStep) => void;
  canProceedToStep: (step: CheckoutStep) => boolean;
  resetCheckout: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set, get) => ({
  addresses: [],

  activeStep: "address",
  completedSteps: [],
  selectedAddress: null,
  selectedShipping: null,
  selectedPayment: null,

  setActiveStep: (step) => {
    const canProceed = get().canProceedToStep(step);
    if (canProceed) {
      set({ activeStep: step });
    }
  },

  setAddresses: (addresses) => {
    set({ addresses });
  },

  addAddress: (address) => {
    set((state) => ({
      addresses: [address, ...state.addresses],
    }));
  },

  updateAddress: (updatedAddress) => {
    set((state) => ({
      addresses: state.addresses.map((addr) =>
        addr.id === updatedAddress.id ? { ...addr, ...updatedAddress } : addr
      ),
      selectedAddress:
        state.selectedAddress?.id === updatedAddress.id
          ? { ...state.selectedAddress, ...updatedAddress }
          : state.selectedAddress,
    }));
  },

  deleteAddress: (addressId) => {
    set((state) => {
      const filtered = state.addresses.filter((addr) => addr.id !== addressId);
      const selectedAddress =
        state.selectedAddress?.id === addressId ? null : state.selectedAddress;

      return {
        addresses: filtered,
        selectedAddress,
        completedSteps: selectedAddress ? state.completedSteps : [],
        activeStep: selectedAddress ? state.activeStep : "address",
      };
    });
  },

  setSelectedAddress: (address) => {
    set({ selectedAddress: address });
  },

  setSelectedShipping: (shipping) => {
    set({ selectedShipping: shipping });
  },

  setSelectedPayment: (payment) => {
    set({ selectedPayment: payment });
  },

  completeStep: (step) => {
    set((state) => {
      const newCompletedSteps = [...state.completedSteps];
      if (!newCompletedSteps.includes(step)) {
        newCompletedSteps.push(step);
      }

      // Auto-open next step
      let nextStep: CheckoutStep | null = null;
      if (step === "address") nextStep = "shipping";
      else if (step === "shipping") nextStep = "payment";

      return {
        completedSteps: newCompletedSteps,
        activeStep: nextStep || state.activeStep,
      };
    });
  },

  canProceedToStep: (step) => {
    const { completedSteps, selectedAddress, selectedShipping } = get();

    // Address step is always accessible
    if (step === "address") return true;

    // Shipping step requires address selection
    if (step === "shipping") {
      return selectedAddress !== null || completedSteps.includes("address");
    }

    // Payment step requires address and shipping selection
    if (step === "payment") {
      return (
        (selectedAddress !== null && selectedShipping !== null) ||
        (completedSteps.includes("address") &&
          completedSteps.includes("shipping"))
      );
    }

    return false;
  },

  resetCheckout: () => {
    set({
      activeStep: "address",
      completedSteps: [],
      selectedAddress: null,
      selectedShipping: null,
      selectedPayment: null,
    });
  },
}));
