import {PaymentMethods} from "./PaymentMethods"
import {usePaymentMethods} from "../hooks/usePaymentMethods"
import {useRoundUp} from "../hooks/useRoundUp"
import {DonationBox} from "./DonationBox";

export const Payment = ({amount, countryCode}: {amount : number, countryCode : string}) => {
  const paymentMethods = usePaymentMethods()
  const {agreeToDonate, updateAgreeToDonate, total, tip} = useRoundUp(amount, countryCode)
  return (
    <div>
      <h3>Payment</h3>
      <div>
        <PaymentMethods paymentMethods = {paymentMethods}/>
      </div>
      <div>
        <DonationBox agreeToDonate={agreeToDonate}
                     updateAgreeToDonate = {updateAgreeToDonate}
                     tip={tip}
                     countryCode={countryCode}/>
        <button>{countryCode === 'JP' ? '¥':'£'}{total}</button>
      </div>
    </div>
    )
  }
