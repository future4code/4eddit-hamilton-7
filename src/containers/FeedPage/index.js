import React from 'react'
import { connect } from "react-redux"


class FeedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

}

export default connect(mapStateToProps, mapDisptchToProps)(FeedPage)