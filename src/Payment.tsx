import { useEffect, useState } from "react"
import { convertPaymentMethods } from "./convertPaymentMethods"
import { LocalPaymentMethod, RemotePaymentMethod } from "./LocalPaymentMethod"

const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([])

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'http://localhost:3000/api/payment-methods'
      const response = await fetch(url)
      console.log(response)
      const methods: RemotePaymentMethod[] = await response.json()
      const extended: LocalPaymentMethod[] = convertPaymentMethods(methods)
      setPaymentMethods(extended)
    }
    fetchPaymentMethods()
      .catch(console.error)
  },[])
    
  return paymentMethods
}

const PaymentMethods = ({paymentMethods}: {paymentMethods: LocalPaymentMethod[]}) => (
    <>
      {paymentMethods.map((method) => (
          <label key={method.provider}>
            <input
              type="radio"
              name="payment"
              value={method.provider}
              defaultChecked={method.isDefault}
            />
            <span>{method.label}</span>
          </label>
        ))}
    </>)

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