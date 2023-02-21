import { useMemo, useState } from "react";

export const useRoundUp = (amount: number) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);
  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate ? Math.floor(amount + 1) : amount,
      tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10))
    }),
    [amount, agreeToDonate]
  );

  const updateAgreeToDonate = () => setAgreeToDonate(!agreeToDonate);

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate
  };
};
