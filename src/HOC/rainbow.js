import React from 'react'

const RainBow = (WrappedComponent) => {

    const colors = ['red','pink','blue','green'];
    const randomColor = colors[Math.floor(Math.random()*3)];
    const className = randomColor + "-text";
    
    return (props) => {

        return (
            <div className={className}> 
                <WrappedComponent {...props}/>
            </div>
        )

    }

}

export default RainBow;