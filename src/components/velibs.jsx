import React, { Component } from 'react';

class Velibs extends Component {
    state = {
        loading: true,
        data: null,
    };

    async componentDidMount() {
        const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&refine.stationcode=42022";
        const response = await fetch(url);
        const data = await response.json();

        console.log(data.records[0].fields);
        this.setState({loading: false, data: data.records[0].fields});
    }

    DisplayData = () => {
        const available = this.state.data.numbikesavailable;
        const capacicy = this.state.data.capacity;
        const code = this.state.data.stationcode;
        const name = this.state.data.name;

        return (
            <div>
                <div className="row">
                    Disponibles :
                    <b>{available}/{capacicy}</b>
                </div>
                <div className="row">
                    {name} (n°{code})
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.data ?
                    <>Loading...</>
                :
                    this.DisplayData()
                }
            </div>
        );
    }
}

export default Velibs;
