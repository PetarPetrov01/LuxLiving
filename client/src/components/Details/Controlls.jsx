import { usePropertyContext } from "../../contexts/PropertyContext";
import { StyledControlls, StyledAnchor, OwnerControlls } from "../../styles/Details/Controlls.styled";
import { BidForm } from "./BidForm";

export const Controlls = ({
    isOwner,
    currentBidder,
    price,
    propId
}) => {

    const bidder = currentBidder ? currentBidder.email : null;

    const { onDeleteHandler } = usePropertyContext();

    return (
        <StyledControlls>
            {bidder
                ? <h4>Current bidder : {bidder}</h4>
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

