"use client";

import React, { useState } from "react";
import { useCheckoutStore, type PaymentMethod } from "@/store/checkoutStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { LockKeyhole } from "lucide-react";
import { completeOrder, type CompleteOrderPayload } from "@/lib/api/order";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PaymentSelection = () => {
  const router = useRouter();
  const {
    selectedPayment,
    setSelectedPayment,
    setActiveStep,
    selectedAddress,
    resetCheckout,
  } = useCheckoutStore();
  const clearCart = useCartStore((state) => state.clearCart);

  const [paymentType, setPaymentType] = useState<PaymentMethod["type"]>(
    selectedPayment?.type || "credit_card"
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingConsentChecked, setBillingConsentChecked] = useState(false);
  const [termsConsentChecked, setTermsConsentChecked] = useState(false);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleConfirmOrder = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!selectedAddress?.id) {
      toast.error("Lütfen bir teslimat adresi seçin");
      return;
    }

    // Consent validations
    if (!billingConsentChecked) {
      toast.error("Lütfen fatura adresi onayını işaretleyiniz");
      return;
    }

    if (!termsConsentChecked) {
      toast.error("Lütfen sözleşmeleri okuyup onaylayınız");
      return;
    }

    if (paymentType === "credit_card") {
      const cleanCardNumber = cardDetails.cardNumber.replace(/\D/g, "");
      if (!cleanCardNumber || cleanCardNumber.length < 16) {
        toast.error("Lütfen geçerli bir kart numarası giriniz");
        return;
      }
      if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
        toast.error("Lütfen CVV kodunu giriniz");
        return;
      }
    }

    setIsProcessing(true);

    try {
      let payload: CompleteOrderPayload;

      // Payment type specific payloads
      if (paymentType === "credit_card") {
        const formattedDate = cardDetails.expiryDate.replace(/\s/g, "").replace("/", "-");
        
        payload = {
          // Postman test data 
          address_id: selectedAddress?.id || "", 
          payment_type: "credit_cart",
          card_digits: "1234567891234567", 
          card_expiration_date: "06-26",   
          card_security_code: "123",       
          card_type: "VISA",           
        };
      } else if (paymentType === "bank_transfer") {
        payload = {
          address_id: selectedAddress.id,
          payment_type: "bank_transfer",
          card_digits: "0000000000000000",
          card_expiration_date: "01-30",
          card_security_code: "000",
          card_type: "NONE",
        };
      } else if (paymentType === "cash_on_delivery") {
        payload = {
          address_id: selectedAddress.id,
          payment_type: "cash_on_delivery",
          card_digits: "0000000000000000",
          card_expiration_date: "01-30",
          card_security_code: "000",
          card_type: "NONE",
        };
      } else {
        toast.error("Geçersiz ödeme yöntemi");
        setIsProcessing(false);
        return;
      }

      console.log("📦 Gönderilen payload:", JSON.stringify(payload, null, 2));

      const result = await completeOrder(payload);

      console.log("📨 Backend yanıtı:", result);

      await new Promise((resolve) => setTimeout(resolve, 7000));

      if (result.success) {
        toast.success("Siparişiniz başarıyla tamamlandı! 🎉");
        clearCart();
        resetCheckout();
        router.push("/account/orders");
      } else {
        console.error("❌ Sipariş başarısız:", result);

        if (result.validationErrors) {
          console.error("🔍 Validation hataları:", result.validationErrors);

          // Show detailed error messages
          Object.entries(result.validationErrors).forEach(([field, errors]) => {
            console.error(`🔍 ${field} hatası:`, errors);
          });
        }

        toast.error(result.message || "Sipariş oluşturulamadı");
      }
    } catch (error) {
      console.error("❌ Sipariş hatası (catch):", error);
      toast.error("Bir hata oluştu");
    } finally {
      setIsProcessing(false);
    }
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
        <div
          className={`flex items-start gap-3 p-4 rounded-md border-2 transition-all duration-300 ${
            billingConsentChecked
              ? "border-black bg-gray-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
        >
          <Checkbox
            id="billing-consent"
            checked={billingConsentChecked}
            onCheckedChange={(checked) =>
              setBillingConsentChecked(checked as boolean)
            }
            className="bg-white mt-1 data-[state=checked]:bg-black data-[state=checked]:black border-2"
          />
          <label
            htmlFor="billing-consent"
            className={`cursor-pointer transition-colors ${
              billingConsentChecked ? "text-black font-medium" : "text-gray-600"
            }`}
          >
            Fatura adresim teslimat adresimle aynı
          </label>
        </div>
        <div
          className={`flex items-start gap-3 p-4 rounded-md border-2 transition-all duration-300 ${
            termsConsentChecked
              ? "border-black bg-gray-50"
              : "border-gray-300 bg-white hover:border-gray-400"
          }`}
        >
          <Checkbox
            id="terms-consent"
            checked={termsConsentChecked}
            onCheckedChange={(checked) =>
              setTermsConsentChecked(checked as boolean)
            }
            className="bg-white mt-1 data-[state=checked]:bg-black data-[state=checked]:black border-2"
          />
          <label
            htmlFor="terms-consent"
            className={`cursor-pointer transition-colors ${
              termsConsentChecked ? "text-black" : "text-gray-600"
            }`}
          >
            <span className="font-bold text-black hover:underline">
              Gizlilik Sözleşmesini
            </span>{" "}
            ve{" "}
            <span className="font-bold text-black hover:underline">
              Satış Sözleşmesini
            </span>{" "}
            okudum, onaylıyorum.
            {!termsConsentChecked && (
              <span className="text-red-500 ml-1">*</span>
            )}
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
          disabled={
            !paymentType ||
            isProcessing ||
            !billingConsentChecked ||
            !termsConsentChecked
          }
          className={`text-white font-semibold w-1/2 px-5 py-7 text-base transition-all duration-300 ${
            billingConsentChecked && termsConsentChecked && !isProcessing
              ? "bg-black hover:bg-black/90 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isProcessing ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Ödeme Yapılıyor...
            </div>
          ) : (
            "Siparişi Tamamla"
          )}
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
