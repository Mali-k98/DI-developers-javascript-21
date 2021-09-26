import React from 'react'

function Scale() {
    return (
        <>
            <div className='scale'>
            <h3>Plant care:</h3>
            <div>
                
                <ol>
                    Light:
                    <li>Sunny light areas: At least 4 hours of direct sun</li>
                    <li> High-light areas: Over 200 ft-c, but not direct sun </li>
                    <li>Medium-light areas: 75 ft-c to 200 ft-c</li>
                    <li>Low-light areas: 25 ft-c to 75 ft-c</li>
                </ol>
                </div>
            <div>
                
                <ol>
                    Temperature:
                    <li>Cool: 50°F night, 65°F day temperatures</li>
                    <li>Average: 65°F night, 75°F day temperatures</li>
                    <li>Warm: 70°F night, 85°F day temperatures</li>
                </ol>
            </div>
            <div>
                
                <ol>
                    Humidity:
                    <li>Relative Humidity 1. High: 50% or higher</li>
                    <li>Average: 25% to 49%</li>
                    <li>Low: 5% to 24%</li>
                </ol>
            </div>
            <div>
                
                <ol>
                    Watering:
                    <li>Keep soil mix moist </li>
                    <li>Surface of soil mix should dry before re-watering</li>
                    <li>Soil mix can become moderately dry before re-watering</li>
                </ol>
            </div>
                {/* <p> Light 1. Sunny light areas: At least 4 hours of direct sun 2. High-light areas: Over 200 ft-c, but not direct sun 3. Medium-light areas: 75 ft-c to 200 ft-c 4. Low-light areas: 25 ft-c to 75 ft-c </p> */}
                {/* <p>Temperature 1. Cool: 50°F night, 65°F day temperatures 2. Average: 65°F night, 75°F day temperatures 3. Warm: 70°F night, 85°F day temperatures </p> */}
                {/* <p>Relative Humidity 1. High: 50% or higher 2. Average: 25% to 49% 3. Low: 5% to 24%</p> */}
                {/* <p>Watering 1. Keep soil mix moist 2. Surface of soil mix should dry before re-watering 3. Soil mix can become moderately dry before re-watering</p> */}
            </div>
        </>
    )
}

export default Scale
