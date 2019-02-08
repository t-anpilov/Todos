import React, {Component} from 'react';

class Form extends Component {
    render() {
        if(this.props.isLoading === true) {
            return (<div className="list_form">...Loading...</div>)
        } else {
            return (
                <div className="list_form">
                    <button className="A_but">
                        Add
                    </button>
                    <button className="B_but">
                        Delete
                    </button>
                    <button className="C_but">
                        Sort
                    </button>
                </div>    
            )
        }
    }
}    

export default Form