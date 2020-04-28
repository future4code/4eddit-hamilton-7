import React from 'react'
import { connect } from "react-redux"
import { push, replace, goBack } from "connected-react-router";

const formCreatePost = [
    {
        name: "title",
        type: "text",
        label:"Título",
        required: false
    },
    {
        name:"text",
        type:"text",
        label:"Text",
        required: false
    }
]

class PostPage extends React.Component {
    constructor(props){
    super(props)
    
    this.state = {
        post: {

        title:'',
        text: ''
        }
    }
    }

componentDidMount = () => {

const token = window.localStorage.getItem('token')    
    if(token === null) {
    this.props.goToLogin()
    }      
}
handleOnchagePost = event => {
    const { name, value } = event.target.value
    this.setState({post:{...this.state.post, [name]:value}})
}
handleonSubmitPost = event => {
    event.preventDefault
    this.props.postAction(this.state.title, this.state.token, this.state.text)
}
render(){
    return (
     <PostWrapper onSubmit={handleonSubmitPost}>
            {formCreatePost.map(post => {
                return (
                    <div key={post.id}>
                       

                    </div>
                )
            })
        

     </PostWrapper>
        )
    }
}
const mapDispatchToProps = () => {
    return {
        goToLogin: () => dispatch(replace(routes.root)
    }
};
export default connect(null, mapDispatchToProps)(PostPage)