import { useEffect, useState } from "react";
import { StyledBidForm, BidInput, BidButton } from "../../styles/Details/Details.styled";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const BidForm = ({
    previousPrice,
    _id
}) => {
    const { onBidHandler } = usePropertyContext();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        setAmount(previousPrice);
    }, [previousPrice]);

    const onChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (amount <= previousPrice) {
            alert('You can\'t bid less than the current amount!');
            setAmount(previousPrice);
        } else {
            console.log('Submiting');
            onBidHandler(_id, amount);
        }

    };

    return (
        <>
            <StyledBidForm onSubmit={onSubmitHandler} >
                <BidInput
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={onChangeHandler} />
                <BidButton>Bid</BidButton>
            </StyledBidForm>
        </>
    );
};