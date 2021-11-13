import { createSlice } from "@reduxjs/toolkit";

export const MemorySlice=createSlice({
    name:"memory",
    initialState:{
        items:[],
        ısOpen:[],
        randomItems:[],
        gamerPoints1:0,
        gamerPoints2:0,
        counter:0,
    },
    reducers:{
        addItems:(state,action)=> {
            const randomArray=[];

          while(randomArray.length<31) {
            let randomNumber=Math.floor(Math.random()*31);
            let bool=randomArray.includes(randomNumber);
            if(bool===false){
                randomArray.push(randomNumber);

                action.payload.map(data=> {
                    if(data.id===randomNumber){
                        state.items.push(data);
                    }
                    return null
                })
            }         
          }
          state.randomItems=randomArray;           
        },
        changeOpen:(state,action)=> {
            let id=action.payload;
            state.items.find(item=>{
                if(item.id===id) {
                    item.open=true

                    if(state.ısOpen.length===0){
                        state.ısOpen.push(item);
                    }
                    else {
                        state.ısOpen.map(data=>{
                            if(data.id!==id){
                                state.ısOpen.push(item)
                            }
                            return null;
                        })
                    }                
                }
                return null
            })          
        },
        ısDoubleCard:(state)=> {       
                state.counter+=1;    
                if(state.ısOpen[0].name===state.ısOpen[1].name) {
                    if(state.counter%2===1){
                        state.gamerPoints1+=1;
                    }
                    else if(state.counter%2===0){
                        state.gamerPoints2+=1;
                    }
                    state.items.find(data=>{
                        if(data.name===state.ısOpen[0].name){
                            data.open=true;
                        }
                        return null 
                    })
                }
                else {
                    state.items.map(data=> {
                        if(data.id===state.ısOpen[0].id ){
                            data.open=false
                        }
                        if(data.id===state.ısOpen[1].id){                 
                            data.open=false             
                        }
                       return null
                    })
                }
                if(state.ısOpen.length>2){
                    console.log("2 den büyük");
                }
              state.ısOpen.splice(0,state.ısOpen.length);
           
        },
    }
})

export default MemorySlice.reducer;
export const {addItems,changeOpen,ısDoubleCard}=MemorySlice.actions;