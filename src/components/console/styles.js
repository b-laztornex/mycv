import styled from 'styled-components';
const Wrapper = styled.div`
  padding: 4em;
  font-size: 14px;
  background: black;
  min-height: 100vh;
`;
const Terminal = styled.ul`
  color: white;
  padding-left: 0;
  text-align: left;
  list-style-type: none;
`;
const Title = styled.h4`
  color: white;
  text-align: justify;
`;
const Marker = styled.span`
  color: LimeGreen;
  display: inline-block;
  margin-right: 15px;  
`;
const Code = styled.span`
  color: white;
  text-align: left;
  font-weight: 100;
  &:focus {
    outline: none;
  }
`;
const Information = styled.p`
  color: white;
  text-align: left;
  font-weight: 100;
`;
const SubTitle = styled.h6`
  color: DeepSkyBlue;
  padding: 10px;
  text-align: right;
  border-top: 1px dashed DeepSkyBlue;
  border-bottom: 1px dashed DeepSkyBlue;
  text-transform: uppercase;
`;
const UnicodeImage = styled.div`
 width: 549px;
 height: 400px;
 color: LimeGreen;
 background-color: rgba(255, 255, 255, 0.1);
 padding: 20px;
 text-align: center;
`;
export { Wrapper, Terminal, Title, Marker, Code, Information, SubTitle, UnicodeImage };