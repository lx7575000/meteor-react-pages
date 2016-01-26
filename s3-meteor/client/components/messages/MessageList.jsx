MessageList = React.createClass({
	render(){
		let styles= {
			circle:{
				margin: '0 auto',
				paddingTop: '100px',
				display: 'block'
			}
		};
		const allMessages = _.map(this.props.messages, (message, key) => {
			return (
				<Message 
					owner={message.owner}
					avatar={message.avatar}
					createdAt={message.createAt}
					content={message.content}
					key={key}
				/>
			);
		});
		return(
			<div id='message-list'>
				<div>
					{allMessages}
				</div>
			</div>
		);		
	}
});