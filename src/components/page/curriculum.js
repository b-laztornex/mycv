import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {InformationBox, StyledLeftCol, StyledRightCol} from './styles'

export const Curriculum = React.forwardRef((props, ref) => {
  
  const skillList = props.info.skills.map((skill,i) =>
    <p>᳁ {skill}</p>
  );
  const experienceList = props.info.experience.map((exp,i) =>
    <div>
      <p>{exp.date} {exp.company_name} {exp.country} {exp.city} </p>
      <p>ଏ{exp.position}</p>
    </div>
  );
  return (
    <InformationBox ref={ref}>
      <Container>
        <Row>
          <StyledLeftCol xs={4}>
            <h4>Skills</h4>
            <hr/>
            <p>
              {skillList}
            </p>
          </StyledLeftCol>
          <Col xs={8}>
            <Container>
              <Row>
                <StyledRightCol xs={12}>
                <h4>Profile</h4>
                <hr/>
                <p>
                  {props.info.profile}
                </p>
                <h4>Experience</h4>
                <hr/>
                <p>
                  {experienceList}
                </p>
                </StyledRightCol>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </InformationBox>
  )
})