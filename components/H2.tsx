import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IProps {
	children: string
};
interface IState {};

class H2 extends React.Component<IProps, IState> {
	render() {
		return <div>
			<h2>{this.props.children}</h2>
		</div>;
	}
}

export default H2;