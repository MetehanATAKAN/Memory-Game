import React,{useEffect} from 'react'
import "../App.css"
import {useSelector,useDispatch} from "react-redux" ;
import {changeOpen,ısDoubleCard,addItems} from "../redux/slice/MemorySlice";

function Cards() {

    const state = useSelector(state => state.memory.items);
    const ısOpen = useSelector(state => state.memory.ısOpen);
    
    const dispatch = useDispatch();

    
    useEffect(() => {
       fetch("http://localhost:3004/items")
       .then(response=>response.json())
       .then(data=>dispatch(addItems(data)))
    }, [dispatch]) 

    
    const changeClass=(id)=> {
    dispatch(changeOpen(id));
        if(ısOpen.length===1) {
            setTimeout(() => {
                dispatch(ısDoubleCard())
            }, 3000); 
        } 
    }
        
    return (
        <>
        {
            state.map(data=>
               
                    <div id="box" onClick={ısOpen.length<2 ?()=>changeClass(data.id):null}  key={data.id} className={data.open===false ?"box-main" :"box-main2"}>   
                            <div className="front"></div>
                            <div className="back"><div className="back-image">{<img src={data.image} alt="" />}</div></div>   
                    </div>      
                
            )
        }
        </>     
    )
}

export default Cards
