import { useEffect, useState } from "react";
import { StyledBidForm, BidInput, BidButton } from "../../styles/Details/Details.styled";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const BidForm = ({
    previousPrice,
    _id
}) => {
    const [amount, setAmount] = useState(0);
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