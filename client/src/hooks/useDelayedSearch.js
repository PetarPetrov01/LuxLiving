import { useEffect, useState } from "react";

export const useDelayedSearch = (value, delay = 700) => {
    const [delayedSearch, setDelaydSearch] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelaydSearch(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return delayedSearch;
};
