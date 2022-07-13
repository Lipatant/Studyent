import React, { Component } from 'react';

const textZero = "-";

class Counter extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter, -1)}
                    className="btn btn-secondary btn-sm">
                    -
                    </button>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                    </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter, 1)}
                    className="btn btn-secondary btn-sm">
                    +
                    </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2">
                    Delete
                    </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge bg-";
        if (this.props.counter.value < 0)
            classes += "danger";
        else
            classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? textZero : value;
    }
}

export default Counter;
