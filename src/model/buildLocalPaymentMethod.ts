import { RemotePaymentMethod } from "./LocalPaymentMethod"

export const buildLocalPaymentMethod = (remotePaymentMethod: RemotePaymentMethod) => ({
  provider: remotePaymentMethod.name,
  label: `Pay with ${remotePaymentMethod.name}`,
  isDefault: remotePaymentMethod.name === 'cash'
})
