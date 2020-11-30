import React from 'react'

export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {skills: []};
    }

    componentDidMount() {
        this.SkillsList();
    }

    async SkillsList() {
        const res = await fetch('http://localhost:8080/skills')
        const json = await res.json()
        this.setState({skills: json.results})
    }

    render() {  
        { this.state.skills }
        const skills = this.state.skills.map((item, i) => (
            <div key={item.name}>
                <h1>{ item.name }</h1>
                <a href={"https://www.dnd5eapi.co" + item.url}>{ item.url }</a>
            </div>
        ));
        
        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{ skills }</div>
            </div>
        )
    }
}
