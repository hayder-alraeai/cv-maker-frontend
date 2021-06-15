
const GeneralReducer = (state, action) => {
    switch(action.type){
        case 'isMenuBarsOpen':
            return {isMenuBarsOpen: !state.isMenuBarsOpen}
        case 'active':
            return {active: action.payload}
        default:
            return state
    }
}
export default GeneralReducer;