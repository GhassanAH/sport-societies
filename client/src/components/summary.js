import React,{useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import '../css/summary.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import worldCup from "../img/worldCup2.jpeg"
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { toBlob, toJpeg } from 'html-to-image';
import Resizer from "react-image-file-resizer";




const Summary = ({data, data2, data3, data4,data5,data6}) => {

    const [round164, setRound164] = useState(null)
    const [round168, setRound168] = useState(null)
    const [round82, setRound82] = useState(null)
    const [round84, setRound84] = useState(null)
    const [round41, setRound41] = useState(null)
    const [round42, setRound42] = useState(null)
    const [roundf1, setRoundf1] = useState(null)
    const ref = useRef(null);
    let navigate = useNavigate();



    useEffect(() => {
        setRound164({
            Game116:data2["Game116"],
            Game316:data2["Game316"],
            Game516:data2["Game516"],
            Game716:data2["Game716"],
    
        })
        setRound82({
            Game28:data3["Game28"],  
            Game18:data3["Game18"], 
        }
    
        )
        setRound84({
            Game48:data3["Game48"], 
            Game38:data3["Game38"],  
        })
        setRound41({
            Game14:data4["Game14"]
        })
        setRound42({
            Game24:data4["Game24"]
        })
        setRoundf1({
            Game11:data6["Game11"],
            Game12:data5["Game12"]
            
        })
        setRound168({
            Game216:data2["Game216"],
            Game416:data2["Game416"], 
            Game616:data2["Game616"],
            Game816:data2["Game816"], 
        })



    },[data2, data3, data4, data5, data6])

    const onDownload = async () => {


        var imageUrl = "";
        if(window.innerWidth > 1200){
            imageUrl = await imageUrlGenerator(0,0,0,false);
        }else if(window.innerWidth <= 1200 && window.innerWidth > 1100){
            imageUrl = await imageUrlGenerator(1100,600,600,true);
        }else if(window.innerWidth <= 1100 && window.innerWidth > 800){
            imageUrl = await imageUrlGenerator(1000,600,600,true);
        }else if(window.innerWidth <= 800 && window.innerWidth > 600){
            imageUrl = await imageUrlGenerator(800,600,600,true);
        }else if(window.innerWidth <= 600 && window.innerWidth > 400){
            imageUrl = await imageUrlGenerator(600,600,600,true);
        }else if(window.innerWidth <= 400){
            imageUrl = await imageUrlGenerator(400,800,1100,true);

        }

    

        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download ="YourWorldCupPrediction.jpeg"
        fakeLink.href =imageUrl;
        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);
        fakeLink.remove();
        window.localStorage.removeItem("groups")
        window.localStorage.removeItem("round16")
        window.localStorage.removeItem("round4")
        window.localStorage.removeItem("round8")
        window.localStorage.removeItem("final")
        window.localStorage.removeItem("winner")
        navigate("/",{ replace: true })
      
        
    }
    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
            file,
            900,
            900,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "base64"
            );
    });

    const imageUrlGenerator = async (width,canvasWidth, canvasHeight, resize) => {
        const containeri = ref.current;
        var blob = await toBlob(containeri, {width:width, canvasWidth:canvasWidth, canvasHeight:canvasHeight});
        const file = new File([blob], "image.jpeg");
        if (resize){
            const imageUrl = await resizeFile(file);
            return imageUrl
        }else{
            const imageUrl = await toJpeg(containeri);
            return imageUrl
        }
    }
       
    return (
        <>       
             <Helmet>
                    <title>World Cup Qatar 2022 | Predictions Summary</title>
                    <meta name="description" content="Sport Societies || World Cup Qatar 2022 Prediction"/>
                    <meta name="keywords" content="Sport Societies, sport societies, Round of 16, Quarterfinal, Semifinals, Groups stage, World cup Qatar 2022, prediction"/>
                    <link rel="canonical" href="/summary"/>
             </Helmet>
            <div className="mainContainerSummary">
                <div ref={ref} className="main-wrapper">
                    <div className="container-info-Summary">
                        <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-Summary"></img>
                        <div className="container-info-heading-Summary">
                            <h2>WORLD CUP QATAR 2022</h2>
                            <h3>Prediction Summary</h3>
                            
                        </div>
                    </div>
                    <div className="summary-container">
                            <div className="gridContainerSummary">
                                    {Object.entries(data).map(([columnId, column], index) =>{
                                        if(column.name === "Group A" || column.name === "Group B" || column.name === "Group C" || column.name === "Group D"){
                                            return(
                                                <div
                                                className="mainItemSummary"
                                                key={columnId}
                                                >
                                                    <h3>{column.name}</h3>
                                                    <div className="column-wrapper">
                                                        {column.items.sort((a,b) => a.position - b.position).map((item, index) => {
                                                        
                                                            
                                                                    return( 
                                                                        <div className="column-selector-Summary" key={index*10-11}>
                                                                            <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                            <span className="contentSummary">{item.content}</span>    
                                                                        </div>
                                                                    )
                                                                
                                                            
                                                            
                                                        })}
                                                    </div>
        
                                                </div>
                                            )
                                        }
                                        else{
                                            return <></>
                                        }
                            
                                    
                                    })}
                        </div>
                        <div className="gridContainerSummary">
                                    {Object.entries(data).map(([columnId, column], index) =>{
                                        if(column.name === "Group E" || column.name === "Group F" || column.name === "Group G" || column.name === "Group H"){
                                            return(
                                                <div
                                                className="mainItemSummary"
                                                key={columnId}
                                                >
                                                    <h3>{column.name}</h3>
                                                    <div className="column-wrapper">
                                                        {column.items.sort((a,b) => a.position - b.position).map((item, index) => {
                                                        
                                                            
                                                                    return( 
                                                                        <div className="column-selector-Summary" key={index*10-10}>
                                                                            <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                            <span className="contentSummary">{item.content}</span>    
                                                                        </div>
                                                                    )
                                                                
                                                            
                                                            
                                                        })}
                                                    </div>
        
                                                </div>
                                            )
                                        }
                                        else{
                                            return <></>
                                        }
                            
                                    
                                    })}
                        </div>
                        <div className="roundContainer">
                                <div className="grid2ContainerSummary">
                                        <div className="main2ItemSummary">
                                            {round164 && Object.keys(round164).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}
                                                    >
                                                        
                                                        <div>
                                                            {round164[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary" key={index*10-9}>  
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>  
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="main2ItemSummary">
                                            {round82 && Object.keys(round82).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}

                                                    >
                                                        <div>
                                                            {round82[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary " key={index*10-8}>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>   
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="main2ItemSummary">
                                            {round41 && Object.keys(round41).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}
                                                    >
                                                        
                                                        <div>
                                                            {round41[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary" key={index*10-6}>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                          
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="main2ItemSummary" style={{height:"500px"}}>
                                            {roundf1 && Object.keys(roundf1).map((columnId, index) =>{
                                                if(roundf1[columnId].name === "World Cup Winner"){
                                                    return(
                                                        <div
                                                        key={index}
                                                        className={"box "+columnId}
                                                        
                                                        >
                                                            
                                                            <div>
                                                                {roundf1[columnId].items.map((item, index) => {
                                                                    return(
                                                                        <div className="column-selector-Summary" style={{flexDirection:"column"}} key={index*10-5}>
                                                                            <img src={worldCup} alt="worldCup" className="world-img-Summary"></img>
                                                                            <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>  
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
        
                                                        </div>
                                                    )
                                                }else{
                                                    return(
                                                        <div
                                                        key={columnId}
                                                        className={"box "+columnId}
                                                        >
                                                            
                                                            <div>
                                                                {roundf1[columnId].items.map((item, index) => {
                                                                    return(
                                                                        <div className="column-selector-Summary" key={index*10-4}>
                                                                            <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>    
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
        
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                        <div className="main2ItemSummary">
                                            {round42 && Object.keys(round42).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}
                                                    >
                                                        
                                                        <div>
                                                            {round42[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary" key={index*10-3}>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>    
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="main2ItemSummary">
                                            {round84 && Object.keys(round84).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}
                                                    >
                                                        
                                                        <div>
                                                            {round84[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary" key={index*10-2}>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>  
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="main2ItemSummary">
                                            {round168 && Object.keys(round168).map((columnId, index) =>{
                                                return(
                                                    <div
                                                    key={index}
                                                    className={"box "+columnId}
                                                    >
                                                        
                                                        <div>
                                                            {round168[columnId].items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary" key={index*10-1}>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>   
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>

                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

     
                        </div>

                    </div>
                </div>
               
                <button className="container-btn-Summary" onClick={onDownload}>Download Your Prediction</button>
            </div>
        </>
        
    )
}
const mapStateToProps = state => {
    return {
        data: state.data,
        data2: state.data2,
        data3: state.data3,
        data4: state.data4,
        data5: state.data5,
        data6: state.data6,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        // onFinal: (d) => dispatch(final(d))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Summary)
