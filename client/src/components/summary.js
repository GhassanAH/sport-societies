import React,{useEffect, useState, useRef} from 'react'
import { connect } from 'react-redux'
import '../css/summary.css'
import fifa from "../img/fifa-qatar-2022-logo.png";
import * as htmlToImage from 'html-to-image';
import worldCup from "../img/worldCup2.jpeg"
import { useNavigate } from "react-router-dom";




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
        setRound164([
            data2["Game 1 16"],
            data2["Game 3 16"],
            data2["Game 5 16"],
            data2["Game 7 16"],
    
        ])
        setRound82([
          data3["Game 2 8"],  
          data3["Game 1 8"], 
        ])
        setRound84([
            data3["Game 4 8"], 
         
            data3["Game 3 8"],  
        ])
        setRound41([
            data4["Game 1 4"]
        ])
        setRound42([
            data4["Game 2 4"]
        ])
        setRoundf1([
            data6["Game 1 1"],
            data5["Game 1 2"]
            
        ])
        setRound168([
            data2["Game 2 16"],
            data2["Game 4 16"], 
            data2["Game 6 16"],
            data2["Game 8 16"], 
        ])


    },[])

    const onDownload = () => {
        const container = ref.current;
        htmlToImage.toPng(container, { quality: 0.95 })
                   .then(function (dataUrl) {
                        var link = document.createElement('a');
                        link.download = 'YourWorldCupPrediction.png';
                        link.href = dataUrl;
                        link.click();
                        navigate("/",{ replace: true })
                    });
      
        
    }
    return (
        <div className="mainContainerSummary">
            <div ref={ref} className="main-wrapper">
                <div className="container-info-Summary">
                    <img src={fifa} alt="fifa world cup logo" className="world-cup-logo-Summary"></img>
                    <div className="container-info-heading-Summary">
                        <h1>WORLD CUP QATAR 2022</h1>
                        <h2>World Cup Summary</h2>
                        
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
                                                <div>
                                                    {column.items.sort((a,b) => a.position - b.position).map((item, index) => {
                                                       
                                                           
                                                                return( 
                                                                    <div className="column-selector-Summary">
                                                                        <span className="positionSummary">{item.position}</span>  
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
                                        return
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
                                                <div>
                                                    {column.items.sort((a,b) => a.position - b.position).map((item, index) => {
                                                       
                                                           
                                                                return( 
                                                                    <div className="column-selector-Summary">
                                                                        <span className="positionSummary">{item.position}</span>  
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
                                        return
                                    }
                        
                                   
                                })}
                       </div>
                       <div className="roundContainer">
                            <div className="grid2ContainerSummary">
                                    <div className="main2ItemSummary">
                                        {round164 && Object.entries(round164).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>Round of 16 {column.name}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <span className="positionSummary">{item.position}</span>  
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="main2ItemSummary">
                                        {round82 && Object.entries(round82).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>{column.name.replace("Game", "Quarterfinal")}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="main2ItemSummary">
                                        {round41 && Object.entries(round41).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>{column.name.replace("Game","Semifinal")}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="main2ItemSummary">
                                        {roundf1 && Object.entries(roundf1).map(([columnId, column], index) =>{
                                            if(column.name === "World Cup Winner"){
                                                return(
                                                    <div
                                                    key={columnId}
                                                    className="box"
                                                    style={{width:"auto"}}
                                                    >
                                                        <h3>{column.name}</h3>
                                                        <div>
                                                            {column.items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary">
                                                                        <img src={worldCup} alt="worldCup" className="world-img-Summary"></img>
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                        <span className="contentSummary">{item.content}</span>    
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
                                                    className="box"
                                                    >
                                                        <h3>{column.name}</h3>
                                                        <div>
                                                            {column.items.map((item, index) => {
                                                                return(
                                                                    <div className="column-selector-Summary">
                                                                        <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                        <span className="contentSummary">{item.content}</span>    
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
                                        {round42 && Object.entries(round42).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>{column.name.replace("Game","Semifinal")}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="main2ItemSummary">
                                        {round84 && Object.entries(round84).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>{column.name.replace("Game", "Quarterfinal")}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
                                                                </div>
                                                            )
                                                        })}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="main2ItemSummary">
                                        {round168 && Object.entries(round168).map(([columnId, column], index) =>{
                                            return(
                                                <div
                                                key={columnId}
                                                className="box"
                                                >
                                                    <h3>Round of 16 {column.name}</h3>
                                                    <div>
                                                        {column.items.map((item, index) => {
                                                            return(
                                                                <div className="column-selector-Summary">
                                                                    <span className="positionSummary">{item.position}</span>
                                                                    <img src={item.imgUrl} alt={item.content} className="flag-img-Summary"></img>
                                                                    <span className="contentSummary">{item.content}</span>    
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
