import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class About extends Component {
  render() {
    return(
  <div style={{ display: 'center', margin: 'auto'}}>
        <Grid className="about-me">
          <Cell col={12}>
            <img
              src="https://avatars3.githubusercontent.com/u/35405844?s=400&u=44f887bdc1cf231125e2a0146a4719483d246d89&v=4"
              alt="avatar"
              className="avatar-img"
              />
            <div className="banner-text">
              <h1>About Me</h1>
              <p>I am into new technology that can be used to improve human efficency and reduce error.</p>
               <p> I have a strong background in auditing and industrial systems which I am using to leverage that experience
                to overall improve mission critical system performance. I enjoy almost anything that involves the outdoors and adrenaline.
              </p>

            <hr/>

<p> Solidity | JavaScript | React | React Native | NodeJS | AWS | MongoDB</p>

<div className="social-links">

{/* LinkedIn */}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/* Github */}
<a href="https://github.com/Dozacode" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-github-square" aria-hidden="true" />
</a>

</div>
  </div>
</Cell>
</Grid>
</div>
)
}
}


export default About
