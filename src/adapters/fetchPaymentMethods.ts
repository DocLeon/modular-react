import { convertPaymentMethods } from "../model/convertPaymentMethods"
import { LocalPaymentMethod } from "../model/LocalPaymentMethod"

export const fetchPaymentMethods = async () => {
  const url = 'http://localhost:3000/api/payment-methods'
  const response = await fetch(url)
  const extended: LocalPaymentMethod[] = convertPaymentMethods(await response.json())
  return extended
};
