import { useEffect, useState } from "react";
import { StyledBidForm, BidInput, BidButton } from "../../styles/Details/Controlls.styled";
import { usePropertyContext } from "../../contexts/PropertyContext";
import { useUserContext } from "../../contexts/UserContext";

export const BidForm = ({
    previousPrice,
    _id
}) => {
    const { user: { _id: userId } } = useUserContext();
    const { onBidHandler } = usePropertyContext();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (previousPrice !== undefined) {
            setAmount(previousPrice);
        }
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
            onBidHandler(_id, userId, amount);
        }
    };

    return (
        <>
            <StyledBidForm onSubmit={onSubmitHandler} >
                <BidInput
                    className="bid-input"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={onChangeHandler}
                />
                <BidButton className="bid-btn">Bid</BidButton>
            </StyledBidForm>
        </>
    );
};