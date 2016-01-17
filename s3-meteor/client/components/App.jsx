const {Link } = ReactRouter;
/*
	React 中获得动态获取Meteor数据，需要使用minxins来获取
	mixins: [ReactMeteorData],
	getMeteorData(){
		return {
			想要获取的数据例如
			currentUser: Meteor.user()
		}
	}
	在React当中通过this.data.currentUser形式获得
	具体介绍页面 ： http://react-in-meteor.readthedocs.org/en/latest/meteor-data/

*/


App = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		return {
			currentUser: Meteor.user()
		}
	},
	render(){
		return (
			<div className='app-wrap'>
				<NavBar currentUser={this.data.currentUser} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
});