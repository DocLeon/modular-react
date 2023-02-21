import { buildLocalPaymentMethod } from "./buildLocalPaymentMethod"
import { RemotePaymentMethod, PaymentMethod as PaymentMethod } from "./LocalPaymentMethod"

export const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  const extended: PaymentMethod[] = methods.map((method: RemotePaymentMethod) => buildLocalPaymentMethod(method))
  extended.push(buildLocalPaymentMethod({ name: 'cash' }))
  return extended
}
