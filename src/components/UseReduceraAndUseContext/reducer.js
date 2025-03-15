function AppReducer (state, action) {
    switch(action.type){
        case 'Design' :{
            return {
                ...state, 
                theme: {...state.theme, ...action.payload}
            }
        }

        case 'card' :{
            return{
                ...state,
                card: {...state.card, ...action.payload}
            }
        }
    }
}

export default AppReducer