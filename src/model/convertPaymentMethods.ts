import { buildLocalPaymentMethod } from "./buildLocalPaymentMethod"
import { RemotePaymentMethod, PaymentMethod } from "../types/PaymentMethod"

export const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  const extended: PaymentMethod[] = methods.map((method: RemotePaymentMethod) => buildLocalPaymentMethod(method))
  extended.push(buildLocalPaymentMethod({ name: 'cash' }))
  return extended
}
