import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { navigate } from "gatsby";


const WineCard = (props) => {



    return (

        /* onClick={() => this.handleToggle()} */
        <CardWrapper onClick={() => navigate(`/wines/${props.slug}`)}>
            <div className="wine-bottle">
                {/* <img src={props.img} id="wine-img" /> */}
            </div>
            <div className="info-section">
                <h6>{props.grape}</h6>
                <h4>{props.name}</h4>
                <h5>{props.producer} - {props.country}</h5>
                <h5>{`${props.year}`} </h5>

            </div>
        </CardWrapper >
    )
};

export default WineCard;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start hover:shadow-lg cursor-pointer`}
height: 430px;
width: 235px;
padding: 20px;
background: #fff;
border-radius: 5px;

.wine-bottle{
    ${ tw`flex justify-center `}
    
}

.info-section{
    ${ tw`mt-5 `}
}

.year-type{
    ${ tw`flex items-center`}
}

#wine-img{
    ${ tw` m-0 `}
    width: 70px;
    max-height: 210px;
    min-height: 210px;
}
#icon-img{
    ${ tw` mr-2 mt-0 mb-1`}
    width: 20px;
    max-height: 20px;
}

#type-img{
    ${ tw` mb-1 mt-0 ml-1`}
    width: 25px;
    max-height: 23px;
}


h4{
    font-family: Assistant;
    ${ tw` mb-1 `}
}

h3{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h5{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h6{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
.goes-with{
    ${ tw` mb-5 mt-5 flex items-center  `}
}


`