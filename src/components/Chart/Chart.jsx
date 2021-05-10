import React from 'react';

const Chart = ({ data, city }) => {
    return (
        <div>
            <h1>
                {city}
            </h1>
            <div>
                {data.map((temp, index) => {
                    return (
                        <p key={index}>{temp} °C</p>
                    )
                })}
            </div>
        </div>
    );
};

export default Chart;