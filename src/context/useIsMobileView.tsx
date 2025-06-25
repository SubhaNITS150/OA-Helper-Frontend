import { useState, useEffect } from 'react';

const useIsMobileView = (): boolean => {
    const [isMobileView, setIsMobileView] = useState<boolean>(false);

    useEffect(() => {
        const checkMobileView = () => {
            setIsMobileView(window.innerWidth < 640);
        };

        checkMobileView();

        window.addEventListener('resize', checkMobileView);

        return () => window.removeEventListener('resize', checkMobileView);
    }, []);

    return isMobileView;
};

export default useIsMobileView;
