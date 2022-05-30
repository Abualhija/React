import React from 'react';

function CollTemp (props) {
    return (
        <div class='All_top_promotions'>
            <div class='top_promotion_1'>
                <div class='promotion_photo'>
                    <img src={props.imgLink}/>
                    <div class="overlay">
                        <div class="text">{props.overlayText}</div>
                    </div>
                </div>
                <div class='promotion_body Collection'>
                    <p class='title'>{props.Title}</p>
                    <p class='name'>{props.Name}</p>
                </div>
                <div class='Collection Button'>
                    <button >View Collection<span class="material-symbols-outlined">chevron_right</span> </button>
                </div>
            </div>
    </div>
    )
    }
    export default CollTemp ;
