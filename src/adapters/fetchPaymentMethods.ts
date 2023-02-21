import { convertPaymentMethods } from "../model/convertPaymentMethods"
import { PaymentMethod } from "../model/PaymentMethod"

export const fetchPaymentMethods = async () => {
  const url = 'http://localhost:3000/api/payment-methods'
  const response = await fetch(url)
  const extended: PaymentMethod[] = convertPaymentMethods(await response.json())
  return extended
};
