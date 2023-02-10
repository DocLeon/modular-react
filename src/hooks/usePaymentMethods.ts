import { useEffect, useState } from "react";
import { fetchPaymentMethods } from "../adapters/fetchPaymentMethods";
import { LocalPaymentMethod } from "../LocalPaymentMethod";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([]);

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

