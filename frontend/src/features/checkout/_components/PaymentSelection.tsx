"use client";

import React, { useState } from "react";
import { useCheckoutStore, type PaymentMethod } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LockKeyhole } from "lucide-react";

const PaymentSelection = () => {
  const { selectedPayment, setSelectedPayment, setActiveStep } =
    useCheckoutStore();
  const [paymentType, setPaymentType] = useState<PaymentMethod["type"]>(
    selectedPayment?.type || "credit_card"
  );

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleConfirmOrder = () => {
    const payment: PaymentMethod = {
      type: paymentType,
      ...(paymentType === "credit_card" && { cardDetails }),
    };
    setSelectedPayment(payment);

    // TODO: Process payment and create order
    alert("Sipariş tamamlanıyor...");
  };

  const handleBack = () => {
    setActiveStep("shipping");
  };

  return (
    <div className="space-y-4 mt-5 ml-15">
      <h2 className="text-2xl font-medium mb-4">Ödeme Yöntemi</h2>

      {/* Credit Card Payment */}
      <div>
        <Label
          className={`hover:bg-accent/50 flex flex-col gap-3 items-start rounded-sm border p-5 cursor-pointer ${
            paymentType === "credit_card"
              ? "border-black bg-gray-50 border-2"
              : "border-gray-200"
          }`}
        >
          <div className="flex items-start gap-3 w-full">
            <Checkbox
              id="credit_card"
              checked={paymentType === "credit_card"}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPaymentType("credit_card");
                } else {
                  setPaymentType("credit_card");
                }
              }}
              className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
            />
            <div className="justify-between items-center w-full">
              <p className="text-lg leading-none font-medium">Kredi Kartı</p>
            </div>
          </div>

          {/* Credit Card Form */}
          {paymentType === "credit_card" && (
            <div className="mt-2 space-y-4 w-full">
              {/* Card Number */}
              <Input
                id="cardNumber"
                type="text"
                placeholder="Kart Numarası"
                value={cardDetails.cardNumber}
                onChange={(e) => {
                  // Remove all non-digit characters
                  const value = e.target.value.replace(/\D/g, "");
                  // Format as: XXXX XXXX XXXX XXXX
                  let formatted = "";
                  for (let i = 0; i < value.length && i < 16; i++) {
                    if (i > 0 && i % 4 === 0) {
                      formatted += " ";
                    }
                    formatted += value[i];
                  }
                  setCardDetails({ ...cardDetails, cardNumber: formatted });
                }}
                maxLength={19}
                className="p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
              />

              {/* Card Holder Name */}
              <Input
                id="cardHolder"
                type="text"
                placeholder="Kart Üzerindeki İsim"
                value={cardDetails.cardHolder}
                onChange={(e) => {
                  // Convert to uppercase and only allow letters and spaces
                  const value = e.target.value
                    .toUpperCase()
                    .replace(/[^A-ZÇĞİÖŞÜ\s]/g, "");
                  setCardDetails({ ...cardDetails, cardHolder: value });
                }}
                className="p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
              />

              {/* Expiry Date and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  id="expiryDate"
                  type="text"
                  placeholder="Ay / Yıl"
                  value={cardDetails.expiryDate}
                  onChange={(e) => {
                    // Remove all non-digit characters
                    const value = e.target.value.replace(/\D/g, "");
                    // Format as: MM/YY
                    let formatted = "";
                    if (value.length > 0) {
                      formatted = value.substring(0, 2);
                      if (value.length > 2) {
                        formatted += " / " + value.substring(2, 4);
                      }
                    }
                    setCardDetails({
                      ...cardDetails,
                      expiryDate: formatted,
                    });
                  }}
                  maxLength={7}
                  className="p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                />
                <Input
                  id="cvv"
                  type="text"
                  placeholder="CVC"
                  value={cardDetails.cvv}
                  onChange={(e) => {
                    // Only allow digits
                    const value = e.target.value.replace(/\D/g, "");
                    setCardDetails({ ...cardDetails, cvv: value });
                  }}
                  maxLength={3}
                  className="p-6 bg-white border border-gray-300 focus-visible:border-black focus-visible:border-2 focus-visible:ring-0 rounded-sm"
                />
              </div>
            </div>
          )}
        </Label>
      </div>

      {/* Cash on Delivery - Cash */}
      <div>
        <Label
          className={`hover:bg-accent/50 flex flex-col gap-3 items-start rounded-sm border p-5 cursor-pointer ${
            paymentType === "bank_transfer"
              ? "border-black bg-gray-50 border-2"
              : "border-gray-200"
          }`}
        >
          <div className="flex items-start gap-3 w-full">
            <Checkbox
              id="bank_transfer"
              checked={paymentType === "bank_transfer"}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPaymentType("bank_transfer");
                }
              }}
              className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
            />
            <div className="flex flex-row justify-between items-center w-full">
              <p className="text-lg leading-none font-medium">
                Kapıda Ödeme (Nakit)
              </p>
              <p className="text-base text-gray-700 font-semibold">
                39 TL İşlem Bedeli
              </p>
            </div>
          </div>

          {/* Cash on Delivery Info */}
          {paymentType === "bank_transfer" && (
            <div className="mt-2 w-full">
              <p className="text-gray-700 text-base font-normal">
                Kargo şirketi tarafından kapıda ödeme hizmet bedeli
                alınmaktadır.
              </p>
            </div>
          )}
        </Label>
      </div>

      {/* Cash on Delivery - Credit Card */}
      <div>
        <Label
          className={`hover:bg-accent/50 flex flex-col gap-3 items-start rounded-sm border p-5 cursor-pointer ${
            paymentType === "cash_on_delivery"
              ? "border-black bg-gray-50 border-2"
              : "border-gray-200"
          }`}
        >
          <div className="flex items-start gap-3 w-full">
            <Checkbox
              id="cash_on_delivery"
              checked={paymentType === "cash_on_delivery"}
              onCheckedChange={(checked) => {
                if (checked) {
                  setPaymentType("cash_on_delivery");
                }
              }}
              className="rounded-full size-5 data-[state=checked]:border-black data-[state=checked]:bg-black data-[state=checked]:text-white data-[state=checked]:rounded-full data-[state=checked]:size-5 cursor-pointer"
            />
            <div className="flex flex-row justify-between items-center w-full">
              <p className="text-lg leading-none font-medium">
                Kapıda Ödeme (Kredi Kartı)
              </p>
              <p className="text-base text-gray-700 font-semibold">
                39 TL İşlem Bedeli
              </p>
            </div>
          </div>

          {/* Cash on Delivery - Credit Card Info */}
          {paymentType === "cash_on_delivery" && (
            <div className="mt-2 w-full">
              <p className="text-gray-700 text-base font-normal">
                Kargo şirketi tarafından kapıda ödeme hizmet bedeli
                alınmaktadır.
              </p>
            </div>
          )}
        </Label>
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-4 mt-6">
        <div className="flex items-start gap-3">
          <Checkbox
            id="billing-consent"
            className="bg-white mt-1 data-[state=checked]:bg-black data-[state=checked]:black"
          />
          <label
            htmlFor="billing-consent"
            className="text-gray-500 cursor-pointer"
          >
            Fatura adresim teslimat adresimle aynı
          </label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms-consent"
            className="bg-white mt-1 data-[state=checked]:bg-black data-[state=checked]:black"
          />
          <label
            htmlFor="terms-consent"
            className="text-gray-500 cursor-pointer"
          >
            <span className="font-bold text-black hover:underline">
              Gizlilik Sözleşmesini
            </span>{" "}
            ve{" "}
            <span className="font-bold text-black hover:underline">
              Satış Sözleşmesini
            </span>{" "}
            okudum, onaylıyorum.
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row gap-3 justify-center items-center w-full pt-4 px-1.5">
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
          onClick={handleConfirmOrder}
          disabled={!paymentType}
          className="bg-black hover:bg-black/90 text-white font-semibold cursor-pointer w-1/2 px-5 py-7 text-base"
        >
          Siparişi Tamamla
        </Button>
      </div>

      {/* Security Info */}
      <div className="flex items-center justify-center gap-2 text-gray-400 mt-6">
        <LockKeyhole className="size-4" />
        <span>Ödemeler güvenli ve şifrelidir</span>
      </div>
    </div>
  );
};

export default PaymentSelection;
