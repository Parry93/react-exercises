import React from "react";

class UncontrolledLogin extends React.Component{
    handleFormSubmit = (event) => {
		event.preventDefault();

		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;
		const remember = event.target.elements.remember.checked;

		console.log({
			username,
			password,
			remember
		});
	};




    render(){
        return(
            <>
            <h2>uncontrolled login</h2>
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="checkbox" name="remember" />
                <button type="submit">login</button>
                <button type="reset">reset</button>
            </form>
            </>
        )



    }
}
export default UncontrolledLogin 

