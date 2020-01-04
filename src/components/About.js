import React from 'react';
import RainBow from '../HOC/rainbow';

const About = (props) => {
    // console.log(this.props.history.push('/'));
    return (

        <div className="container">
            <h4 className="center"> About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut maiores nostrum, modi aspernatur eius distinctio reiciendis quidem rem ex voluptatum veniam illo maxime architecto ad, nulla officia dolores hic quasi.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sunt molestias, doloribus eos doloremque quaerat consectetur necessitatibus officia rerum non deserunt ducimus vitae debitis dolorem. Eveniet, explicabo quos? Doloribus, officia!
            </p>
        </div>


    )

}

export default RainBow(About);