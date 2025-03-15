import React, {useContext, useState} from 'react';
import './card.css'
import Button from '../../button';
import { AppContext } from '../UseReduceraAndUseContext';

const Card = () => {
    const {state, dispatch} = useContext(AppContext)
    let [btnText, setBtnText] = useState("click me");
    const [short, setShort] = useState("This is short decription");
    const [shortDes, setShortDes] = useState(true);
    const [hideCard, setHideCard] = useState(true);
    const [images, setImages] = useState('https://st.adda247.com/https://storeimages.adda247.com/39371738142538.webp?tr=w-undefined','https://st.adda247.com/https://storeimages.adda247.com/887421738157071.jpg?tr=w-undefined','https://st.adda247.com/https://storeimages.adda247.com/867021735294981.png?tr=w-undefined','https://st.adda247.com/https://storeimages.adda247.com/886061738240839.jpg?tr=w-undefined')
    const [cnt, setCnt] = useState(0);

    function handleClick(){
        setBtnText("Clicked By You")
        setShort("You have got short deescription by yourself")
       dispatch({
        type: 'card',
        payload: {btnText: "clicked By you"}
       })
    }
    function handleDesc(){
        if(shortDes){
            setShortDes(false)
        } else{
            setShortDes(true)
        }
    }
    function handleHide(){
        setHideCard(false)
    }
  
    function changeCourse(){
        let updatedCount = cnt+1;
       if(updatedCount<images.length){
        setCnt(updatedCount);
        setImages(images[updatedCount])
       }

    }
    if(!hideCard){
        return null ;
    }
    return(
       <div className='card-container'>
            <div className = "img-container" >
                <img src={images}></img>
            </div>
            <div>
                <h2>Heading</h2>
                {shortDes?<span>{short}</span>:null}
                <button onClick={handleClick}>{btnText}</button>
                <button onClick={handleDesc}>Hide Description</button>
                <button onClick={handleHide}>Hide card</button>
                <button onClick={changeCourse}>Change Course</button>
            </div>
            <Button/>
        </div>
    )
}

export default Card;