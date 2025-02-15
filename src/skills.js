import boot from './image/bootstrap.jpeg'
import code from './image/codeforces.png'
import css from './image/css.jpeg'
import git from './image/github.png'
import html from './image/html.png'
import js from './image/js.png'
import react from './image/react.png'
import tail from './image/tailwind.png'

const Skills=()=>{
    const data=[{id:'1', img:boot , tilte:'bootstrap'},
        {id:'2', img:code , tilte:'codeforces'},
        {id:'3', img:css , tilte:'css'},
        {id:'4', img:git , tilte:'github'},
        {id:'5', img:html , tilte:'html'},
        {id:'6', img:js , tilte:'javascript'},
        {id:'7', img:react , tilte:'react'},
        {id:'8', img:tail , tilte:'tailwind css'},
     ]

return(
<> 
<div className="skills">
    <div className="title">
        <h5>what skills I have</h5>
        <h3>My Experience</h3>
    </div>
    <div className="content">
    <div className="row">
        {
            data.map((item)=>
<div className="col-md-3 mb-3" key={item.id}>
<div className="card">
    <img src={item.img} alt=""/>
    <div className="body">
        <h5>{item.tilte}</h5>
    </div>
</div>
    
</div>


            )
        }
</div>
    </div>
</div>
</>

);



}
export default Skills