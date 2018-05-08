const initialState = {
  name: '',
  info: '',
  img_url: '',
  formErrors: {name: '', info: ''},
  nameValid: false,
  infoValid: false,
  formValid: false,
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
    return action.itemFormData;

    case 'RESET_ITEM_FORM':
    return initialState;

    default:
    return state;
  }
}
