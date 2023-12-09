import './PageBanner.css';
import PropTypes from 'prop-types';

const PageBanner = ({title}) => {
    return (
        <div className='banner_area'>

            <h1 className='p-20 m-auto text-6xl font-extrabold'>{title}</h1>
            
        </div>
    );
};

PageBanner.propTypes = {
    title: PropTypes.string
    
};

export default PageBanner;