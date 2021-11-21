import React, { Component } from 'react';
import { allProjects, detailProject } from "./data";

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
    state = {
        projects: [],
        detailProject: detailProject    
    }
    componentDidMount() {
        this.setProjects();
        
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
                    handleDetail: this.handleDetail
                }}
            >
                {this.props.children}
            </ProjectContext.Provider>
        )
    }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer }