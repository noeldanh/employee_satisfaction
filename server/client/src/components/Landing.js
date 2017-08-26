import React from 'react';

const Landing = () => {
  let bg = 'https://unsplash.com/?photo=CwkiN6_qpDI';
  let styles = {
    textAlign: 'center',
    margin: '100px',
    backgroundImage: 'url(https://unsplash.com/?photo=CwkiN6_qpDI)'
  };

  // let paragraph = {
  //   padding: '50px',
  //   textAlign: 'center'
  // };
  return (
    <div className="">
      <div className="" style={styles}>
        <h1>Employee Satisfaction Survey</h1>
        <p>
          <i>
            An simple application designed to collect feedback from your users.
          </i>
        </p>

        <div className="row" style={{ margin: '50px' }}>
          <div className="col s4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">flash_on</i>
              </h2>
              <h5 className="center">Speeds up development</h5>

              <p className="light">
                Get fast responses by sending customized email invitations for
                your survey and track who has responded.
              </p>
            </div>
          </div>

          <div className="col s4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">group</i>
              </h2>
              <h5 className="center">User Experience Focused</h5>

              <p className="light">
                Focused to simplify the process of sending out surveys to users
                and responding
              </p>
            </div>
          </div>

          <div className="col s4">
            <div className="icon-block">
              <h2 className="center light-blue-text">
                <i className="material-icons">settings</i>
              </h2>
              <h5 className="center">Easy to work with application</h5>

              <p className="light">
                Create an account and start sending emails to your users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
