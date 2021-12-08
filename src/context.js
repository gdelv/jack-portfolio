import React, { Component } from 'react';
import { Primary, PrimaryDark, Secondary, SecondaryDark } from './colors';
import { allProjects, detailProject } from "./data";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        detailProject: detailProject,
        mode: 'light' //will toggle light/dark   
    }
    componentDidMount() {
        this.setProjects();
    }
    toggleDarkMode() {
        return this.state.mode === 'light' ? this.setState({mode: 'dark'}) : this.setState({mode: 'light'})
    }
    lightColor(){
        let color = Secondary
        // if (this.state.mode === 'light') {
        //     color = Primary
        // } else color = PrimaryDark
        return color
    }

    darkColor(){
        let color = Secondary
        // if (this.state.mode === 'light') {
        //     color = Secondary
        // } else color = SecondaryDark
        return color
    }
    setProjects = () => {
        let tempProjects = [];
        allProjects.forEach(project => {
            const singleProject = {...project};
            tempProjects = [...tempProjects, singleProject]
        })
        this.setState(() => {
            return { projects: tempProjects }
        })
    }

    getProject = (name) => {
        const project = this.state.projects.find(project => project.name === name);
        return project;
    }

    handleDetail = (name) => {
        const project = this.getProject(name);
        // console.log(project);
        
        this.setState(() => {
            return {detailProject: project}
        })
    }
    render() {
        return (
            <ProjectContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    darkColor: this.darkColor,
                    lightColor: this.lightColor
                }}
            >
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer }