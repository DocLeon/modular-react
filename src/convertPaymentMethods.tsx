import { buildLocalPaymentMethod } from "./buildLocalPaymentMethod";
import { RemotePaymentMethod, LocalPaymentMethod } from "./LocalPaymentMethod";

export const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  const extended: LocalPaymentMethod[] = methods.map((method: RemotePaymentMethod) => buildLocalPaymentMethod(method));
  extended.push(buildLocalPaymentMethod({ name: 'cash' }));
  return extended;
};
