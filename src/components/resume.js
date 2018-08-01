import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
      <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://media.licdn.com/dms/image/C5103AQEK1UstHXqvkQ/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=fhSRVrjMRx5NWCBgAcdGj0BgPJk8Ik_wKlJsNEHx0DI"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em', textAlign: 'center'}}>John Mendoza </h2>
            <h4 style={{color: 'black', textAlign: 'center'}}>Full Stack Developer</h4>
            <hr style={{borderTop: 'black', width: '50%', textAlign: 'right'}}/>
            <p style={{color: 'black', textAlign: 'center'}}>Passsionate about utuilizing new technology to improve efficency.</p>
            <hr style={{borderTop: 'black', textAlign: 'center', width: '50%'}}/>
            <h5 style={{color: 'black', textAlign: 'center'}}>Phone</h5>
            <p style={{color: 'black', textAlign: 'center'}}>(985) 590-2063</p>
            <h5 style={{color: 'black', textAlign: 'center'}}>Email</h5>
            <p style={{color: 'black', textAlign: 'center'}}>jlmendoza.consulting@gmail.com</p>
            <h5 style={{color: 'black', textAlign: 'center'}}>Web</h5>
            <p style={{color: 'black', textAlign: 'center'}}>shiptrust.io</p>


          
         
            <hr style={{borderTop: 'black', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
             

            <Education 
              startYear={2018}
              endYear={2018}
              schoolName="B9 Labs"
              schoolDescription="Certified Ethereum Developer"
               />


            <Education
              startYear={2009}
              endYear={2011}
              schoolName="Georgia Southern University"
              schoolDescription="B.S Information Technology"
               />

               <Education
                 startYear={2007}
                 endYear={2008}
                 schoolName="Naval Aviation Technicial Training Center"
                 schoolDescription="Aviation Electronics Technician Intermediate level"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2014}
              jobName="Senior Surveyor"
              jobDescription="Providing marine assurance and risk management to DP vessel owner and operators. A short list of services rendered includes:
              -Performing 5 year and annual trials for DP vessels. 
              -FMEA analysis and GAP assessment to ensure that vessel configuration is accurate and complies with appropriate Class Society regulations as well as IMCA and MTS Society guidelines.
              - Performing CMID's to IMCA standards and thoroughly documenting all relevant discrepancies that could adversely impact vessel operations"
              />

              <Experience
                startYear={2014}
                endYear={2013}
                jobName="Dynamic Positioning Consultant"
                jobDescription="Analyse documentation provided and author FMEA and FMECA documentation for DP systems, jacking systems, and other mission critical systems. 
                Author trials procedures to prove the analysis done in the FMEA and FMECA. Attend vessels for surveys of DP related equipment and to witness proving trials. Preform suitability surveys for various offshore vessels including construction, drill ships, and pipe lay vessels."
                />

                <Experience
                startYear={2013}
                endYear={2011}
                jobName="DP Engineer"
                jobDescription="-Field Engineer provided technical service support for vessels and offshore oil rigs in the Gulf of Mexico.
                -Wide variety of service support both onshore and offshore(instrumentation, automation, and navigation troubleshooting.), radar, and LAN/WAN network setup.
                -Interfaced directly with customers and their liaisons (superintendents, port engineers etc.,) producing cost effective solutions and the most favorable outcome for the company."
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Solidity"
                progress={85}
                />
                <Skills
                  skill="React"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={80}
                    />
                    <Skills
                      skill="mongodb"
                      progress={75}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
