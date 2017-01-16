var EventApplication = React.createClass ({
  render: function() {
  return(
    <div className="container">
      <div className="jumbotron">
        <h1>ReactJS Calendar</h1>
        <p>attempted by Charlie Emple</p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <EventTable />
        </div>
      </div>
    </div>
  )
 }
});
