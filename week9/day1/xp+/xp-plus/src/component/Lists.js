import LinkList from '../json/links.json'

import React from 'react'

function Lists() {
    return (
        <div>
            {LinkList.map((data,index)=>{
                return <div>
                    <ul>
                        <li>{data.SocialMedias}</li>
                    </ul>
                    <ol>
                        <p>{data.Skills.Area}</p>
                        <li>{data.Skills}</li>
                    </ol>
                </div>
            })}
        </div>
    )
}
export default Lists