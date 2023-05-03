import ImgSlider from './ImgSlider';
const App =()=>{
  const slides =[

     { url:"http://localhost:3000/img-1.jpg"  },
     { url:"http://localhost:3000/img-2.jpg"  },
     { url:"http://localhost:3000/img-3.jpg"  },
     { url:"http://localhost:3000/img-4.jpg"  },
     { url:"http://localhost:3000/img-5.jpg"  },
  ];

const containerStyles ={
  width:'500px',
  height:'280px',
  margin:"0 auto",
}

  return (
    <div>
      <h1>Hello World</h1>

    <div style={containerStyles}>
       <ImgSlider slides={slides}/>
    </div>
    </div>
  )
}

export default App;