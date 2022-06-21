import React,{useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import '../css/groupStage.css'
import  data  from '../data/columns';
import fifa from "../img/fifa-qatar-2022-logo.png";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import {saveGrops, save16} from '../actions'
import round16 from '../data/round16'





const WorldMap = ({onSaveGroups, onSave16}) => {

    const [DataColumns, setColumns] = useState(data)
    let navigate = useNavigate();

    const onDragEnd = (result) => {
        if (!result.destination) return;
    
        const { source, destination } = result;
    
        if( source.droppableId !== destination.droppableId) return;
    
        const column = DataColumns[source.droppableId];
        const copiedItems = [...column.items];
        const src = source.index
        const des = destination.index
      
    
        const [removed] = copiedItems.splice(src, 1);
        copiedItems.splice(des, 0, removed);
        copiedItems[0].position  = 1;
        copiedItems[1].position  = 2;
        copiedItems[2].position  = 3;
        copiedItems[3].position  = 4;
       
        setColumns(
            {
                ...DataColumns,
                [source.droppableId]: {
                ...column,
                items: copiedItems
                }
            }
        );
      };

      const onConfirmSelection = () => {
          let data = []
          Object.entries(DataColumns).forEach(([_, column]) => {
            data.push(column.items[0])
            data.push(column.items[1])
          })
          const round16data = round16(
            data[0],data[1],
            data[2],data[3],
            data[4],data[5],
            data[6],data[7],
            data[8],data[9],
            data[10],data[11],
            data[12],data[13],
            data[14],data[15],
        )
          onSaveGroups(DataColumns)
          onSave16(round16data)
          navigate("/round16")
      }
    
   
    return (
            <div className="mainContainer">
                    <div className="container-info">
                        <img src={fifa} alt="fifa world cup logo" className="world-cup-logo"></img>
                        <div className="container-info-heading">
                            <h1>WORLD CUP QATAR 2022</h1>
                            <h2>World Cup Groups</h2>
                        </div>
                    </div>
                    
                    <div className="gridContainer">
                        <DragDropContext
                        onDragEnd={result => onDragEnd(result)}
                        
                        >
                        {DataColumns && Object.entries(DataColumns).map(([columnId, column], index) => {
                            return (
                            <div
                                className="mainItem"
                                key={columnId}
                            >
                                <h3>{column.name}</h3>
                                <div>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                    return (
                                        <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            padding: 4,
                                            width: 250,
                                            minHeight: 200
                                        }}
                                        >
                                        {column.items.map((item, index) => {
                                            return (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                            >
                                                {(provided, snapshot) => {
                                                return (
                                                    <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style
                                                    }}
                                                    className="column-selector"
                                                    >

                                                    <span className="position">{item.position}</span>  
                                                    <img src={item.imgUrl} alt={item.content} className="flag-img"></img>
                                                    <span className="content">{item.content}</span>    
                                                   
                                                     
                                                    </div>
                                                );
                                                }}
                                            </Draggable>
                                            );
                                        })}
                                        {provided.placeholder}
                                        </div>
                                    );
                                    }}
                                </Droppable>
                                </div>
                            </div>
                            );
                        })}
                        </DragDropContext>
                    </div>
                    <button className="container-btn" onClick={onConfirmSelection}>Go To Round 16</button>
                </div>
        )
    

}

const mapStateToProps = state => {
    return {
        data: state.data
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSaveGroups: (groupData) => dispatch(saveGrops(groupData)),
        onSave16: (groupData) => dispatch(save16(groupData))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(WorldMap);