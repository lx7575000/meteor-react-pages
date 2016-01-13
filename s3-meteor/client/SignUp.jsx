const { TextField, RaisedButton, Paper} = mui;

SignUp = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	 getStyles() {
      return {
        textField: {
          display: 'block',
          width: '100%'
        },
        floatingLabel: {
          fontSize: '20px'
        },
        label: {
          fontWeight: '600',
          fontSize: '20px'
        },
        button: {
          height: '50px',
          width: '200px',
          marginTop: '50px',
          marginBottom: '15px'
        }
      };
    },
    _handleSubmit(e){
    	e.preventDefault();
    	let userName = this.refs.userName.getValue();
    	let password = this.refs.password.getValue();

    	Accounts.createUser({
    		username: userName,
    		password: password,
    	}, (error)=>{
    		if(error){
    			console.log(error);
    			alert(error);
    			return ;
    		}
    		this.context.router.push('/account');
    	});
    },
	render(){
		let styles = this.getStyles();
		return (
			<div className='signup'>
				<Paper zDepth={2} className='paper'>
					<form onSubmit={this._handleSubmit.bind(this)}>
						<TextField
							ref="userName"
							style={styles.textField}
							floatingLabelText="用户名"
							floatingLabelStyle={styles.floatingLabel}/>
						<TextField
							ref="password"
							style={styles.textField}
							floatingLabelText="密码"
							floatingLabelStyle={styles.floatingLabel}
							type='password'/>
						<RaisedButton 
							style={styles.button}
							labelStyle={styles.label}
							type='submit'
							label='注册'
							primary={true}/>
					</form>
				</Paper>
			</div>
		)
	}
});