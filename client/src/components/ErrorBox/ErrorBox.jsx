import { useEffect, useState } from "react";

import { ErrorContainer } from "../../styles/Error/Error.styled";

export const ErrorBox = ({ errors }) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [errors]);

    return (visible ?
        <ErrorContainer>
            {errors.split('\n').map((err, i) => <p key={i}>{err}</p>)}
        </ErrorContainer>
        : null
    );
};