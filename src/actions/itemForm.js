// **Action Creators**
export const updateItemFormData = itemFormData => {
  return {
    type: 'UPDATED_DATA',
    itemFormData
  }
}

export const resetItemForm = () => {
  return {
    type: 'RESET_ITEM_FORM'
  }
}
