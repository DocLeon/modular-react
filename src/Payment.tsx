import { useEffect, useState } from "react"

type LocalPaymentMethod = {provider: string, label: string}
type RemotePaymentMethod = {name: string}

const apiResponse = JSON.stringify([{name: 'apple'},{name: 'google'}])

export const Payment = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>([])

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'http://localhost:3000/api/payment-methods'
      const response = await fetch(url)
      console.log(response)
      const methods: RemotePaymentMethod[] = await response.json()
      const extended: LocalPaymentMethod[] = methods.map((method: RemotePaymentMethod)=>({
        provider: method.name,
        label: `Pay with ${method.name}`
      }))
      extended.push({provider: 'cash', label: 'Pay in cash'})
      setPaymentMethods(extended)
    }
    fetchPaymentMethods()
      .catch(console.error)
  },[])

  return (
    <div>
      <h3>Payment</h3>
      <div>
        {paymentMethods.map((method) => (
          <label key={method.provider}>
            <input
              type="radio"
              name="payment"
              value={method.provider}
              defaultChecked={method.provider === 'cash'}
            />
            <span>{method.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}