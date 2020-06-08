    export default function reducer(state, action) {
    console.log(action, state)
    switch(action.type){
      case  'SET_COUNTRY_LIST': {
        return {...state, countryList: action.payload }
      }
      case 'SET_COUNTRY_LIST_BY_NAME': {
        let list
        if (state.countryListByRegion.length > 0) {
          list = state.countryListByRegion
        } else {
          list = state.countryList
        }
  
        const countryListByName = list.filter(country => {
          return country.name.toLowerCase().includes(action.payload.name.toLowerCase()) 
        })
        return {
          ...state,
          countryListByName
        }
      
      }
      case  'SET_COUNTRY_REGION': {
      const countryListByRegion = state.countryList.filter(country => {
        return country.region.toLowerCase() === action.payload.region.toLowerCase() 
      })
        return {
          ...state,
          countryListByRegion
        }
      }
      default: {
        return state
      }
    }
    // return state;
  
  }
  
