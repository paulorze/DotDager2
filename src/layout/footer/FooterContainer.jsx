import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useSelector } from 'react-redux';

const FooterContainer = () => {
    const es = useSelector(store=>store.es);
    const navigate = useNavigate();
    const handleNavigate = (url) => {
        navigate(url);
    };

    return (
        <Footer
            es={es}
            handleNavigate={handleNavigate}
        />
    );
};

export default FooterContainer;