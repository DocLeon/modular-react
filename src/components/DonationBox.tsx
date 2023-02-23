const formatLabel = (agreeToDonate: boolean,
                     tip: number,
                     countryCode: string) => {
    const currencySign = countryCode === "JP" ? "¥": "£"
    return agreeToDonate
        ? "Thanks for the donation"
        : `I would like to donate ${currencySign}${tip} to charity`
}

type DonationBoxProps = { agreeToDonate: boolean, updateAgreeToDonate: () => void | {}, tip: number, countryCode: string };

export const DonationBox = ({
                                agreeToDonate,
                                updateAgreeToDonate,
                                tip,
                                countryCode
                            }: DonationBoxProps) =>
<>
    <label>
        <input
            type="checkbox"
            checked={agreeToDonate}
            onChange={updateAgreeToDonate}
        />
        <p>
            {formatLabel(agreeToDonate, tip, countryCode)}
        </p>
    </label>
</>