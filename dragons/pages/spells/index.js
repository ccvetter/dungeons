import React from 'react'

export default class Spells extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spells: []};
    }

    componentDidMount() {
        this.SpellsList();
    }

    async SpellsList() {
        const res = await fetch('http://localhost:8080/spells')
        const json = await res.json()
        this.setState({spells: json.results})
    }

    render() {  
        const spells = this.state.spells.map((item, i) => (
            <div key={item.name}>
                <h1>{ item.name }</h1>
                <span>{ item.url }</span>
            </div>
        ));
        
        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ spells }</div>
            </div>
        )
    }
}
