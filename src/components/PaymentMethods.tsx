import { PaymentMethod } from "../model/LocalPaymentMethod"

export const PaymentMethods = ({ paymentMethods }: { paymentMethods: PaymentMethod[] }) => (
  <>
    {paymentMethods.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.isDefault} />
        <span>{method.label}</span>
      </label>
    ))}
  </>)
