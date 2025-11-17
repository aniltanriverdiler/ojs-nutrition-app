// frontend/src/features/checkout/_components/ShippingSelection.tsx
"use client";

import React, { useState } from "react";
import { useCheckoutStore, type ShippingOption } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Truck, Zap } from "lucide-react";

const shippingOptions: ShippingOption[] = [
  {
    id: "standard",
    name: "Standart Kargo",
    description: "150 TL ve üzeri siparişlerde ücretsiz",
    price: 0,
    estimatedDays: "3-5 iş günü",
  },
  {
    id: "express",
    name: "Hızlı Kargo",
    description: "Aynı gün kargo",
    price: 29.99,
    estimatedDays: "1 iş günü",
  },
];

const ShippingSelection = () => {
  const { selectedShipping, setSelectedShipping, completeStep, setActiveStep } =
    useCheckoutStore();
  const [localSelectedId, setLocalSelectedId] = useState<string>(
    selectedShipping?.id || ""
  );

  const handleConfirm = () => {
    const shipping = shippingOptions.find((opt) => opt.id === localSelectedId);
    if (shipping) {
      setSelectedShipping(shipping);
      completeStep("shipping");
    }
  };

  const handleBack = () => {
    setActiveStep("address");
  };

  return (
    <div className="space-y-4">
      <RadioGroup
        value={localSelectedId}
        onValueChange={setLocalSelectedId}
        className="space-y-3"
      >
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className={`border rounded-lg p-4 cursor-pointer transition-colors ${
              localSelectedId === option.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setLocalSelectedId(option.id)}
          >
            <div className="flex items-start gap-3">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label
                htmlFor={option.id}
                className="flex-1 cursor-pointer space-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {option.id === "express" ? (
                      <Zap className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Truck className="w-5 h-5 text-gray-500" />
                    )}
                    <span className="font-semibold text-gray-800">
                      {option.name}
                    </span>
                  </div>
                  <span className="font-semibold text-blue-600">
                    {option.price === 0 ? "ÜCRETSİZ" : `₺${option.price}`}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{option.description}</p>
                <p className="text-xs text-gray-500">
                  Tahmini teslimat: {option.estimatedDays}
                </p>
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" onClick={handleBack}>
          Geri
        </Button>
        <Button
          onClick={handleConfirm}
          disabled={!localSelectedId}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Devam Et
        </Button>
      </div>
    </div>
  );
};

export default ShippingSelection;
