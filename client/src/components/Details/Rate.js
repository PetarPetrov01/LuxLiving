import { useCallback, useMemo } from 'react';
import { FaStar } from 'react-icons/fa';

export const Rate = ({ rating, setRating, hoverRating, setHoverRating }) => {

    const starColor = useCallback(
        (index) => {
            if (hoverRating >= index) {
                return 'rgb(255, 215, 0)';
            } else if (!hoverRating && rating >= index) {
                return 'rgb(255, 215, 0)';
            }

            return 'rgb(150,150,150)';
        }, [rating, hoverRating]);


    const StarsRating = useMemo(() => {
        return [...Array(5)]
            .map((_, i) => i + 1)
            .map(index => {
                return (
                    <FaStar
                        key={index}
                        size={30}
                        style={{ color: starColor(index), cursor: 'pointer' }}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHoverRating(index)}
                        onMouseLeave={() => setHoverRating(null)}
                    />
                );
            });
    }, [starColor, setRating, setHoverRating]);


    return <div>{StarsRating}</div>;
};