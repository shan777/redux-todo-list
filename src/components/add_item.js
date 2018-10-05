import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addListItem } from '../actions';

class AddItem extends Component {
    renderInput({ input, label, meta: {touched, error } } ) {
        // console.log('Render input arguments:', arguments); //everything passed into the function..that's the arguments.. this is the keyword.. doesn't work inside fat arrow function tho..props param eh add hagi jun eh
        // console.log('Render input arguments:', props); 
        // const { input, label, meta: {touched, error } } = props; -----> yo guh dae sin line 5 ok to save some typing
        //before it was just           renderInput(props)

        return (
            <div className="row">
                <div className="s12">
                    <label>{label}</label>
                    <input {...input} type="text" autoComplete="off"/>
                    <p className="red-text text-darken-1">{touched && error}</p>
                </div>
            </div>
        );
    }

    saveItem = async (values) => { //send to server now
        // console.log( 'Form values: ', values);

        await this.props.addListItem(values);

        this.props.history.push('/'); //when item added, gets you back to home.. navigate back

    }

    render() {
        // console.log('Add item props:', this.props);

        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput} label="Title" babo="nuhkk"/> 
                            <Field name="details" component={this.renderInput} label="Details"/>
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

function validate(values) { //all of our form values object
    // ------------> here too.. {title, details} in place of values above instead of next line
    const { title, details } = values; // property name exactly as Field names
    const errors = {};

    if(!title) { //regex or any type of checking here!
        errors.title = 'Please give your item a title'; //can be array of errors too
    }

    if(!details) {
        errors.details = "please give your item some details";
    }

    return errors;
}

AddItem = reduxForm({
    form: 'add-item', //add-item can be anything.. no relationship to other add-item.. can even put 'bunny'
    validate: validate   //setting it to validate property in config object......... we can just write "validate" instead of "validate: validate"
})(AddItem);

export default connect(null, {
    addListItem: addListItem
})(AddItem);