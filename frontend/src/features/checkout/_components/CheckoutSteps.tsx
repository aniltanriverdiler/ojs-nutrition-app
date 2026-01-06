"use client";

import { useCheckoutStore } from "@/store/checkoutStore";
import AddressSelection from "./AddressSelection";
import ShippingSelection from "./ShippingSelection";
import PaymentSelection from "./PaymentSelection";

const CheckoutSteps = () => {
  const { activeStep, completedSteps, setActiveStep, canProceedToStep } =
    useCheckoutStore();

  const steps = [
    {
      id: "address" as const,
      title: "Adres",
      number: 1,
      component: <AddressSelection />,
    },
    {
      id: "shipping" as const,
      title: "Kargo",
      number: 2,
      component: <ShippingSelection />,
    },
    {
      id: "payment" as const,
      title: "Ödeme",
      number: 3,
      component: <PaymentSelection />,
    },
  ];

  const handleStepClick = (stepId: typeof activeStep) => {
    if (canProceedToStep(stepId)) {
      setActiveStep(stepId);
    }
  };

  return (
    <div className="space-y-4">
      {steps.map((step) => {
        const isActive = activeStep === step.id;
        const isCompleted = completedSteps.includes(step.id);
        const canAccess = canProceedToStep(step.id);

        return (
          <div key={step.id} className="overflow-hidden transition-all">
            {/* Step Header */}
            <button
              onClick={() => handleStepClick(step.id)}
              disabled={!canAccess}
              className="w-full flex items-center justify-between p-4 pb-1 text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                {/* Step Number */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-lg font-semibold ${
                    isCompleted
                      ? "bg-black text-white"
                      : isActive
                      ? "bg-black text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {isCompleted ? "✓" : step.number}
                </div>

                {/* Step Title */}
                <h3
                  className={`text-2xl font-semibold ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
            </button>

            {/* Step Content */}
            {isActive && <div className="bg-white pl-1">{step.component}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
