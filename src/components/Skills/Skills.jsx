import React from "react";
import './skills.css'

class Skills extends React.Component {
   
    state = { 
        tags: [
            'HTML', 'CSS', 'Boostrap', 'SASS', 'PHP', 'SQL', 'JavaScript', 'Typescript',  'React', 'SVG', 'animation', 'webdev', 'Git', 'NPM', 'Redux'
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





    
