import React, { useState }  from 'react';
import GridLayout from "react-grid-layout";
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

class NestedClass extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <GridLayout className="layout" cols={3} rowHeight={30} width={1200} >
        <div style={{border: '1px solid red' }} key="a" data-grid={{ x: 0, y: 0, w: 2, h: 1, static: true }}>
          Wendi Gunawan Yusuf (Root - Parameter Static = True)
        </div>
		
        <div style={{border: '1px solid red' }} key="b" data-grid={{ x: 0, y: 1, w: 2, h: 1 }}>
          Petit Rinetyo
        </div>

		
        <div style={{border: '1px solid red' }} key="c" data-grid={{ x: 0, y: 2, w: 2, h: 1 }}>
          Netzerospace
        </div>

		<div style={{border: '1px solid red' }} key="d" data-grid={{ x: 0, y: 2, w: 2, h: 1 }}>
          Ainur Rofiq
        </div>


      </GridLayout>
    );
  }
}


const instance = new NestedClass(); // Greeting {}

export default function Nested() {
  return instance;
}