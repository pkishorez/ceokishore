import * as React from 'react';
import * as ReactDOM from 'react-dom';
import H1Component from './components/H1';

export let Component = (props: any)=>{
	return <div>
		<h1>Hello Component</h1>
	</div>
};

export let H1 = H1Component;