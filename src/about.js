
import ab from './image/WhatsApp Image 2025-05-03 at 17.48.31_5db07d9b.jpg'
const About=()=>{

return(
<>
<div class="about">
        <h3>About Me</h3>
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src={ab} alt="About Image" class="img-fluid rounded"/>
            </div>
            <div class="col-md-8">
                <div class="para">
                <p>My name is Omnia Abdelnasser Mohamed.</p>
                <p>I am 20 years old and from Qena Governorate.</p>
                <p>I study at the Faculty of Computers and Information,<br/> South Valley University.</p>
                <p>I am in my second year.</p>
                <p>I’m currently learning HTML, CSS, JavaScript, Bootstrap, Git & GitHub, React JS.
                </p>
                </div>
            </div>
        </div>
</div>


</>

);

}
export default About