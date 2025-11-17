// frontend/src/features/checkout/_components/PaymentSelection.tsx
"use client";

import React, { useState } from "react";
import { useCheckoutStore, type PaymentMethod } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CreditCard, Building2, Wallet } from "lucide-react";

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
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Ödeme Yöntemi</h4>
        <RadioGroup
          value={paymentType}
          onValueChange={(value) =>
            setPaymentType(value as PaymentMethod["type"])
          }
          className="space-y-2"
        >
          <div
            className={`border rounded-lg p-3 cursor-pointer transition-colors ${
              paymentType === "credit_card"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
            onClick={() => setPaymentType("credit_card")}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="credit_card" id="credit_card" />
              <Label
                htmlFor="credit_card"
                className="flex items-center gap-2 cursor-pointer"
              >
                <CreditCard className="w-5 h-5" />
                <span>Kredi/Banka Kartı</span>
              </Label>
            </div>
          </div>

          <div
            className={`border rounded-lg p-3 cursor-pointer transition-colors ${
              paymentType === "bank_transfer"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
            onClick={() => setPaymentType("bank_transfer")}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="bank_transfer" id="bank_transfer" />
              <Label
                htmlFor="bank_transfer"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Building2 className="w-5 h-5" />
                <span>Havale/EFT</span>
              </Label>
            </div>
          </div>

          <div
            className={`border rounded-lg p-3 cursor-pointer transition-colors ${
              paymentType === "cash_on_delivery"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
            onClick={() => setPaymentType("cash_on_delivery")}
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="cash_on_delivery" id="cash_on_delivery" />
              <Label
                htmlFor="cash_on_delivery"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Wallet className="w-5 h-5" />
                <span>Kapıda Ödeme</span>
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Credit Card Form */}
      {paymentType === "credit_card" && (
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <Label htmlFor="cardNumber">Kart Numarası</Label>
            <Input
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
              maxLength={19}
            />
          </div>
          <div>
            <Label htmlFor="cardHolder">Kart Üzerindeki İsim</Label>
            <Input
              id="cardHolder"
              placeholder="AD SOYAD"
              value={cardDetails.cardHolder}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardHolder: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Son Kullanma Tarihi</Label>
              <Input
                id="expiryDate"
                placeholder="AA/YY"
                value={cardDetails.expiryDate}
                onChange={(e) =>
                  setCardDetails({
                    ...cardDetails,
                    expiryDate: e.target.value,
                  })
                }
                maxLength={5}
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="000"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                maxLength={3}
                type="password"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bank Transfer Info */}
      {paymentType === "bank_transfer" && (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            Sipariş onaylandıktan sonra havale bilgileri e-posta adresinize
            gönderilecektir.
          </p>
        </div>
      )}

      {/* Cash on Delivery Info */}
      {paymentType === "cash_on_delivery" && (
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-gray-700">
            Ödemenizi ürün teslim alırken nakit olarak yapabilirsiniz.
          </p>
        </div>
      )}

      <div className="flex justify-between items-center pt-4">
        <Button variant="outline" onClick={handleBack}>
          Geri
        </Button>
        <Button
          onClick={handleConfirmOrder}
          className="bg-green-600 hover:bg-green-700"
        >
          Siparişi Tamamla
        </Button>
      </div>
    </div>
  );
};

export default PaymentSelection;