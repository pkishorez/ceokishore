import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
	children: string
};
interface IState {};

class H1 extends React.Component<IProps, IState> {
	render() {
		return <div>
			<h1>{this.props.children}</h1>
		</div>;
	}
}

export default H1;