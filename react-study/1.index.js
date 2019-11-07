import React from 'react'
import ReactDOM from 'react-dom'

// const app=<h1>react hello react11</h1>;

// const creatApp = (props)=>{
// 	return (
// 		<div>
// 			<h1>react hello {props.name}</h1>
// 			<p>{props.name}</p>
// 		</div>
// 	)
// }

// const app=creatApp({
// 	name: 'react hello'
// })

const App=(props)=>{
	return (
		<div>
			<h1 title={props.name}>react hello {props.name}</h1>
			<p>{props.name}</p>
		</div>
	)
}

ReactDOM.render(

	<App name="react 123" />,

	document.getElementById('root')

);

