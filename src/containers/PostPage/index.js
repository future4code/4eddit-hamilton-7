import React from 'react'
import { connect } from "react-redux"

class PostPage extends React.Component {
    constructor(props){
    super(props)
    
    this.state = {

        title:'',
        text: ''

    }
    }

componentDidMount = () => {

const token = window.localStorage.getItem('token')    
    if(token === null) {
    this.props.goToLogin()
    }      
}
render(){
    return (
        <PostWrapper onSubmit={handleonSubmitPost}>
            <TextField
                onChange = {handle}

            
            />

        </PostWrapper>
    )
}

const mapDispatchToProps = () => {
    return {
        goToLogin: () => dispatch(routes.login)
    }
};
export default connect(null, mapDispatchToProps)(PostPage)