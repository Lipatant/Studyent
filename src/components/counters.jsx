import React, { Component } from 'react';
import Counter from './counter';

const defaultSize = 4;
const defaultValue = 0;
const textReset = "Reset";
const textNewCounter = "Add";

class Counters extends Component {
    state = {
        availableId: 0,
        initialized: false,
        counters: [],
    };

    newCounter = (counterId) => {
        return ({id: counterId, value: defaultValue});
    }

    handleIncrement = (counter, value) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index].value += value;
        this.setState({counters: counters});
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);

        this.setState({counters: counters});
    }

    handleNewCounter = () => {
        const index = this.state.availableId;
        const counters = [...this.state.counters, this.newCounter(index)];

        this.setState({counters: counters, availableId: index + 1});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({counters: counters});
    };

    initialize = () => {
        for (var i = 0; i < defaultSize; i++)
            this.handleNewCounter();
        this.setState({initialized: true});
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    {textReset}
                    </button>
                <button
                    onClick={this.handleNewCounter}
                    className="btn btn-success btn-sm m-2">
                    {textNewCounter}
                    </button>
                {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counter={counter}>
                    </Counter>)
                }
            </div>
        );
    }
}
 
export default Counters;
