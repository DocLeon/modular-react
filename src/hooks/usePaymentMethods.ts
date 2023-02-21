import { useEffect, useState } from "react";
import { fetchPaymentMethods } from "../adapters/fetchPaymentMethods";
import { PaymentMethod } from "../model/LocalPaymentMethod";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const loadPaymentMethods = async () => {
      const extended = await fetchPaymentMethods();
      setPaymentMethods(extended);
    };

    loadPaymentMethods()
      .catch(console.error);
  }, []);

  return paymentMethods
}

