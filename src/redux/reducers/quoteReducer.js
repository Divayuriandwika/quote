const itemsReducer = (state = [], action) => {
    switch (action.type){
        case "GET_ITEM" :
            console.log(action.payload);
            state= [...action.payload.data];
            return state;
       case "POST_ITEM" :
           console.log(action.payload);
           
           state = [...state, action.payload.data]
            return state;
        case "EDIT_ITEM" :
            console.log(action.payload);
            
            state = [...state, action.payload.data]
            return state;
        case "DELETE_ITEM" :
            const index = state.findIndex(res=> res.id === action.payload.data.id)

            if(index !== -1 ){
                state= [
                    ...state.slice(0,index),
                    ...state.slice(index+1),
                    ]
            }
            return state;
        default :
            return state
    }
}

export default itemsReducer;