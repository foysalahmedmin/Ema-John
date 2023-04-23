import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf} from '@fortawesome/free-solid-svg-icons';

const RatingStar = (props) => {
    const [stars, setStars] = useState([])
    useEffect(()=>{
        setStars(Array.from(Array(props.rating).keys()))
    }, [])

    return (
        <div>
            {/* <FontAwesomeIcon icon={faStar} /> 
            <FontAwesomeIcon icon={faStarHalf} /> */}
            {
                stars.map(e => <><FontAwesomeIcon key={e} icon={faStar} /></> )
            }
        </div>
    );
};

export default RatingStar;