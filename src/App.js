
import React, {Fragment} from 'react'
const styleMenu= {
  backgroundColor: '#0B30A8',
  color:'white',
  fontFamily:'verdana',
  listStyle: 'none',
  float: 'left',
  margin: "20p 1000px 20px 50px",
  padding: 10
};


const App = () => {
  return(
    <React.Fragment>
      <ul>
        <li style = {styleMenu}>Inicio</li>
        <li style = {styleMenu}>Servicios</li>
        <li style = {styleMenu}>Quienes Somos</li>
        <li style = {styleMenu}>Ayuda</li>
      </ul>
    </React.Fragment>
  ) 
  

};

export default App;
