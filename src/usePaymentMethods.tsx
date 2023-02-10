import { useEffect, useState } from "react";
import { convertPaymentMethods } from "./convertPaymentMethods";
import { LocalPaymentMethod } from "./LocalPaymentMethod";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'http://localhost:3000/api/payment-methods';
      const response = await fetch(url);
      const extended: LocalPaymentMethod[] = convertPaymentMethods(await response.json());
      setPaymentMethods(extended);
    };

    fetchPaymentMethods()
      .catch(console.error);
  }, []);

  return paymentMethods;
};
