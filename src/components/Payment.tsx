import { PaymentMethods } from "./PaymentMethods"
import { usePaymentMethods } from "../hooks/usePaymentMethods"
import { useMemo, useState } from "react"

export const Payment = ({amount}: {amount : number}) => {
  const paymentMethods = usePaymentMethods()
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false)
  const {total, tip} = useMemo(
    () => ({
      total: agreeToDonate ? Math.floor(amount + 1): amount,
      tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10))
    }),
    [amount, agreeToDonate]
  )
  return (
    <div>
      <h3>Payment</h3>
      <div>
        <PaymentMethods paymentMethods = {paymentMethods}/>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreeToDonate}
            onChange={() => setAgreeToDonate(!agreeToDonate)}
          />
          <p>
            {agreeToDonate
              ? "Thanks for the donation"
              : `I would like to donate £${tip} to charity`
            }
          </p>
        </label>
        <button>£{total}</button>
      </div>
    </div>
  )
}