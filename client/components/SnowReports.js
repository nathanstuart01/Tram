import React from 'react';
import { getSnowReports } from '../actions/reports'
import { connect } from 'react-redux';
import Ski_Utah_Logo from '../images/Ski_Utah_Logo.jpg'
 

class SnowReports extends React.Component {


  componentDidMount() {
      this.props.dispatch(getSnowReports())
  }

  render() {
    let reports = this.props.reports.map( report => {
      return(
        <div key={report.resort_id} className='z-depth-3 center snow_report_div'>
          <img src={report.service_icon_svg_url} alt='Ski Area Logo' width='200px' alt='Ski Area Logo'/>
          <h4><b>{report.name}</b></h4><hr />
          <p><b className='new_snow'>New Snow Past 24 Hours:{report.new_snow_24}</b></p>
          <p><b className='new_snow'>New Snow Past 48 Hours:{report.new_snow_48}</b></p>
          <p><b>Snow Base:{report.snow_base}</b></p>
          <p><b>Conditions:{report.conditions}</b></p>
          <p><b>{report.website_url}</b></p>
        </div> 
      )
    });
    if(reports.length !== 0) {
      return(
        <div className='body_width'>
          <div className='ski_utah_logo'>
            <h4>Ski Reports Brought To You By SkiUtah</h4> 
            <img src={Ski_Utah_Logo} alt='Ski Utah Logo' width='200px'/>
            <h5>For A More Detailed Snow Report, Visit <a href='http://www.skiutah.com/snowreport'>http://www.skiutah.com/snowreport</a></h5>
          </div>
          <div>
          {reports}
          </div>
        </div>
      )
    } else {
        return (
          <h5>No Available Snow Reports</h5>
        )
      }
    }
  }


const mapStateToProps = (state) => {
  return { reports: state.reports }
}

export default connect(mapStateToProps)(SnowReports);
