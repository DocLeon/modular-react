import { PaymentMethods } from "./PaymentMethods"
import { usePaymentMethods } from "../hooks/usePaymentMethods"

export const Payment = () => {
  const paymentMethods = usePaymentMethods()
  return (
    <div>
      <h3>Payment</h3>
      <div>
        <PaymentMethods paymentMethods = {paymentMethods}/>
      </div>
    </div>
  )
}