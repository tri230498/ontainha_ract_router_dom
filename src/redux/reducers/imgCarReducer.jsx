
const stateDefault = "./img/products/red-car.jpg"

export const imgCarReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHANGE_COLOR_CAR": {
            state = action.imgCar
            return state // trả về state mới
        }

        
        default: return state
    }
  }