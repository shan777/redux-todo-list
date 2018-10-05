import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem, clearSingleItem, toggleComplete } from '../actions';
 //importing action creators

class SingleItem extends Component {
    componentDidMount() {
        // console.log('item id:', this.props.match.params.itemId);
        //console log before making the request.. always!
        this.props.getSingleItem(this.props.match.params.itemId);
    }

    componentWillUnmount() {
        this.props.clearSingleItem();  //reset the component back
    }

    render() {
        console.log('Single item:', this.props.item); //item from line 29
        const { item, toggleComplete, match: { params } } = this.props;
        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
                <h4 className={`${item.complete ? 'green-text' : 'red-text'} darken-2`}>
                    {item.complete ? 'Item has been completed' : 'Item NOT complete'}
                </h4> 
                <button onClick={() => toggleComplete(params.itemId)} className={`btn ${item.complete ? 'red':'green'}`}>
                    {item.complete ? 'Remove Complete' : 'Do not forget this!'}
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log('state:', state);

    return {
        item: state.list.single
    };
}

export default connect(mapStateToProps, {
    getSingleItem: getSingleItem,
    clearSingleItem: clearSingleItem,
    toggleComplete: toggleComplete
})(SingleItem);
