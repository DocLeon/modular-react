import { PaymentMethods } from "./PaymentMethods"
import { usePaymentMethods } from "../hooks/usePaymentMethods"
import { useRoundUp } from "../hooks/useRoundUp"

export const Payment = ({amount}: {amount : number}) => {
  const paymentMethods = usePaymentMethods()
  const {agreeToDonate, updateAgreeToDonate, total, tip} = useRoundUp(amount)
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
            onChange={updateAgreeToDonate}
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