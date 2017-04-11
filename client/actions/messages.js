export const getMessages = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/messages',
      type: 'GET'
    }).done( messages => {
      dispatch({ type: 'MESSAGES', messages })
    })
  }
}
