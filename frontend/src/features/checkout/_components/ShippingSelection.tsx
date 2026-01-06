"use client";

import { useState, useEffect } from "react";
import { useCheckoutStore, type ShippingOption } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { calculateShipmentFee } from "@/lib/api/order";
import { useCartStore } from "@/store/cartStore";

const ShippingSelection = () => {
  const {
    selectedShipping,
    setSelectedShipping,
    completeStep,
    setActiveStep,
    selectedAddress,
  } = useCheckoutStore();

  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const totalCartPrice = getTotalPrice();

  const [localSelectedId, setLocalSelectedId] = useState<string>(
    selectedShipping?.id || ""
  );
  const [calculatedShipmentFee, setCalculatedShipmentFee] = useState<
    number | null
  >(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate shipment fee when component mounts
  useEffect(() => {
    const fetchShipmentFee = async () => {
      if (!selectedAddress?.id) {
        // Don't show error, just use default
        console.warn("No address selected for shipping calculation");
        return;
      }

      setIsCalculating(true);
      try {
        const fee = await calculateShipmentFee(selectedAddress.id);
        setCalculatedShipmentFee(fee);
      } catch (error) {
        console.error(
          "Kargo ücreti hesaplanamadı, varsayılan ücret kullanılıyor:",
          error
        );
        // Use default fee if calculation fails (0 TL as default)
        setCalculatedShipmentFee(0);
      } finally {
        setIsCalculating(false);
      }
    };

    fetchShipmentFee();
  }, [selectedAddress]);

  // Determine if shipping is free based on cart total
  const isFreeShipping = totalCartPrice >= 150;
  const finalShipmentFee = isFreeShipping ? 0 : calculatedShipmentFee || 0;

  const shippingOptions: ShippingOption[] = [
    {
      id: "standard",
      name: "Standart Kargo",
      description: "150 TL ve üzeri siparişlerde ücretsiz",
      price: finalShipmentFee,
      estimatedDays: "3-5 iş günü",
    },
  ];

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
    /* Shipping Card Section */
    <div className="space-y-4 flex flex-col gap-3 mt-5 ml-15">
      {isCalculating && (
        <div className="text-center text-gray-500 py-4">
          Kargo ücreti hesaplanıyor...
        </div>
      )}
      {shippingOptions.map((option) => (
        <Label
          key={option.id}
          className="hover:bg-accent/50 flex items-start gap-3 rounded-sm border p-5 has-aria-checked:border-2 has-aria-checked:border-black has-aria-checked:bg-gray-100 cursor-pointer"
        >
          <Checkbox
            id={option.id}
            checked={localSelectedId === option.id}
            onCheckedChange={() => setLocalSelectedId(option.id)}
            className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
          />
          <div className="flex flex-col w-full gap-1">
            <p className="text-lg leading-none font-medium">{option.name}</p>
            <p className="mt-3 text-gray-500 text-base font-normal">
              {option.description}
            </p>
            <p className="text-gray-500 text-base font-normal">
              {option.estimatedDays}
            </p>
            <p className="text-gray-500 text-base font-normal">
              {option.price === 0 ? "Ücretsiz" : `${option.price} TL`}
            </p>
          </div>
        </Label>
      ))}

      {/* Back and Continue Button */}
      <div className="flex flex-row gap-3 justify-center items-center w-full px-1.5">
        <Button
          variant="outline"
          type="button"
          onClick={handleBack}
          className="bg-white font-semibold cursor-pointer w-1/2 px-5 py-7 text-base"
        >
          Geri
        </Button>
        <Button
          variant="default"
          type="button"
          onClick={handleConfirm}
          disabled={!localSelectedId}
          className="bg-black hover:bg-black/90 text-white font-semibold cursor-pointer w-1/2 px-5 py-7 text-base"
        >
          Devam Et
        </Button>
      </div>
    </div>
  );
};

export default ShippingSelection;
