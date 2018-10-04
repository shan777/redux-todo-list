import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddItem extends Component {
    renderInput(props) {
        // console.log('Render input arguments:', arguments); //everything passed into the function..that's the arguments.. this is the keyword.. doesn't work inside fat arrow function tho..props param eh add hagi jun eh
        console.log('Render input arguments:', props); 

        return (
            <div className="row">
                <div className="s12">
                    <label>Label Here</label>
                    <input {...props.input} type="text"/>
                </div>
            </div>
        );
    }

    saveItem = (value) => {
        console.log( 'Form values: ', value);
    }

    render() {
        console.log('Add item props:', this.props);

        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput}/> 
                            <Field name="details" component={this.renderInput}/>
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn blue-grey darken-1">Add Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'add-item' //add-item can be anything.. no relationship to other add-item.. can even put 'bunny'
})(AddItem);