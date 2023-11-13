import { useEffect, useState } from "react";

import { ErrorContainer } from "../../styles/Error/Error.styled";

export const ErrorBox = ({ errors }) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
        console.log('IN useffect??');
        const timeout = setTimeout(() => {
            console.log('Deleting..');
            setVisible(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, [errors]);

    return (visible
        ? <ErrorContainer>
            {errors.split('\n').map(err => <p>{err}</p>)}
        </ErrorContainer>
        : null
    );
};