import React from "react";
import './skills.scss'

class Skills extends React.Component {
   
    state = { 
        tags: [
            'HTML', 'CSS', 'Bootstrap', 'SASS', 'PHP', 'Laravel', 'SQL', 'JavaScript', 'Typescript',  'React', 'AJAX', 'SVG', 'animation', 'webdev', 'Git', 'NPM', 'Redux'
        ]
    }
            
    render() { 
        return ( 
            <div className="skills__section" id="skills">
            <h1 className="skills_title">Skills</h1>
            <div className="skills">
            
            {this.state.tags.map( tag => (
                <div className="skills__box">{tag}</div>
            ))}
            </div>
    </div>
         );
    }
}
 
export default Skills;





    
