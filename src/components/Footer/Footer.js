import React from 'react';

export class Footer extends React.Component{
  render(){
    return (
      <footer className="App-footer">
        <p>Made by <a href="https://twitter.com/Taskinoz" target="_blank" rel="noopener noreferrer">Taskinoz</a> and <a href="https://twitter.com/Clubwhom" target="_blank" rel="noopener noreferrer">Clubwho</a></p>
        <p id="trademarks">©2019 Valve Corporation. Steam and the Steam logo are trademarks
          and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.<br/>
          ©2019, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo are trademarks
          or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere.<br/>
          ©2019 Microsoft Corporation. Xbox and the Xbox "Sphere" Design are trademarks and/or registered
          trademarks of Microsoft Corporation in the U.S. and/or other countries.<br/>
          Other brands or product names are the trademarks of their respective owners.
        </p>
      </footer>
    );
  }
};
