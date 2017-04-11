export const getSnowReports = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/reports',
      type: 'GET'
    }).done( reports => {
      dispatch({ type: 'SHOW_SNOW_REPORTS', reports  })
    }).fail( data => {
      console.log(data)
    });
  }
}
