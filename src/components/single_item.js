import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class SingleItem extends Component {
    componentDidMount() {
        // console.log('item id:', this.props.match.params.itemId);
        //console log before making the request.. always!
        this.props.getSingleItem(this.props.match.params.itemId);
    }

    render() {
        console.log('Single item:', this.props.item); //item from line 29
        const { item } = this.props;
        return (
            <div>
                <h1 className="center">To Do Item</h1>
                <h3>Title: {item.title}</h3>
                <h4>Details: {item.details}</h4>
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
    getSingleItem: getSingleItem
})(SingleItem);
