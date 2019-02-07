import React, {Component} from 'react';



class ToDoItem extends Component {
    constructor(props){
        super(props)
        this.state = { 
            styles: {backgroundColor: '#FFF8DC'}
        }
        this.handleOver = this.handleOver.bind(this);
        this.handleOut = this.handleOut.bind(this);
    }

    handleOver() {
        this.setState({styles: {backgroundColor: '#BC8F8F'}});
    }
    handleOut() {
        this.setState({styles: {backgroundColor: '#FFF8DC'}});
    }

    render() {
        return (
            <div className="list_row">
                <p onMouseOver={this.handleOver} style={this.state.styles} onMouseOut={this.handleOut}>
                    <input type="checkbox" checked={this.props.item.completed} />
                    {this.props.item.text}
                </p>
            </div>    
        )
    }
}

export default ToDoItem