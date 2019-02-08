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
                <p 
                    onMouseOver={this.handleOver} 
                    style={this.state.styles} 
                    onMouseOut={this.handleOut}
                    onDoubleClick={() => this.props.handleDClick(this.props.item.id)}
                >
                    <input type="checkbox"
                        checked={this.props.item.completed}
                        onChange={() => this.props.handleChange(this.props.item.id)} />
                    {this.props.item.text}
                </p>
            </div>    
        )
    }
}

export default ToDoItem