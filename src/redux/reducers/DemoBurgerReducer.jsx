const stateDefault = {
  burger: [
    { name: "salad", quantity: 3 },
    { name: "cheese", quantity: 5 },
    { name: "beef", quantity: 4 },
  ],
  menu: {
    salad: 10,
    cheese: 20,
    beef: 30
  }
};

export const demoBurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY" : {
        // B1: lấy dữ liệu ra từ action
        let {name, quantity} = action.payload
        // B2: clone arr hoặc object ra và state
        let burgerUpdate = [...state.burger];
        let item = burgerUpdate.find(bg => bg.name === name);
        if(item) {
            item.quantity += quantity;
            if(item.quantity < 1) {
                // Xử lý xóa 
            alert('Tối thiểu là 1');
            item.quantity = 1
            
                
            }
        }
        //B3: Cập nhật lại state
        state.burger = burgerUpdate
        return {...state}
    }
    






    default:
      return state;
  }
};
