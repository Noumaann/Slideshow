import {useState} from "react";
const ImgSlider =({slides})=>{
    const[currentIndex, setCurrentIndex]= useState(0);

    const sliderStyles={
        height:'100%',
        position:'relative',
    }

    const slideStyles ={
        width:'100%',
        height:'100%',
        boderRadius:"10px",
        backgroundPosition:'center',
        backgroundSize:'cover',

        backgroundImage:`url(${slides[currentIndex].url})`

    };

    

    const leftArrowStyle={
        position:'absolute',
        top:'50%',
        transform:'translate(0, -50%)',
        left:'32px',
        fontSize: '45px',
        color:'#fff',
        zIndex: 1,
        cursor:'pointer',
    };

    const rightArrowStyle={
        position:'absolute',
        top:'50%',
        transform:'translate(0, -50%)',
        right:'32px',
        fontSize: '45px',
        color:'#fff',
        zIndex: 1,
        cursor:'pointer',
    };



    const dotContainerStyle={
        display: 'flex',
        justifyContent: 'center'
    }

    const dotstyles ={
        margin :'0 5px',
        cursor:'pointer',
        fontSize:'20px',
    }






    const goToPrevious=()=>{
        const isFirstSlide= currentIndex===0
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const goToNext=()=>{
        const isLastSlide = currentIndex ===slides.length-1;
        const newIndex =isLastSlide ? 0:currentIndex+1;
        setCurrentIndex(newIndex)
    }



//sliding specific index
    const goToSlide =slideIndex=>{
     setCurrentIndex(slideIndex);
    }

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyle} onClick={goToPrevious}>/</div>
            <div style={rightArrowStyle}onClick={goToNext}>\</div>
            <div style={slideStyles}></div>
            <div style={dotContainerStyle}>
               {slides.map((slide, slideIndex)=>(
                    <div key={slideIndex} style={dotstyles} onClick={()=>goToSlide(slideIndex)}>.</div>
               ))} 
            </div>
        </div>
    )
}

export default ImgSlider;