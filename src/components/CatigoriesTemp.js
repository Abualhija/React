import React from 'react';

function CatItem (props) {
    return (
        <div class="discover-item">
            <li>{props.catigorieName}</li>
            <span>{props.catigorieNum}</span>
        </div>
)
    }
    export default CatItem ;
