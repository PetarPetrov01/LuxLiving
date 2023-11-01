import { usePropertyContext } from "../../contexts/PropertyContext";
import { StyledControlls, StyledAnchor, OwnerControlls } from "../../styles/Details/Controlls.styled";
import { BidForm } from "./BidForm";

export const Controlls = ({
    isOwner,
    currentBidder,
    price,
    propId
}) => {
    const { onDeleteHandler } = usePropertyContext();

    return (
        <StyledControlls>
            {currentBidder
                ? <h4>Current bidder : {currentBidder}</h4>
                : null}

            {isOwner
                ? <OwnerControlls>
                    <StyledAnchor to={`/catalog/${propId}/edit`}> Edit</StyledAnchor>
                    <StyledAnchor onClick={(e) => onDeleteHandler(e, propId)}>Delete</StyledAnchor>
                </OwnerControlls>
                : <>
                    <BidForm previousPrice={price} _id={propId} />
                </>
            }
        </StyledControlls>
    );
};

