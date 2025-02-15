import c1 from './image/code1.jpeg'
import c2 from './image/code2.jpeg'
import c3 from './image/code3.jpeg'
import c4 from './image/code4.jpeg'

const Portflio=()=>{
const data=[{ image:c1, name:'movies', descrip:'website with html,css,js',btn:'github',
     link:" :https://github.com/Rana-A-Badawy/tv" },
    { image:c2,name:'food menu', descrip:'website with react js',btn:'github', 
        link:'https://github.com/Omnia-Abdelnasser/Menu-food-with-react'  },
    { image:c3,name:'furnitures', descrip:'the first website with react',btn:'github',
        link:"https://github.com/Omnia-Abdelnasser/react1"   },
    {image:c4 ,name:'movies list', descrip:'website with react and api',btn:'github',
        link:'https://github.com/Omnia-Abdelnasser/movies-list-react'  },
]
   return(
<>

<div className='projects'>

    <div className="container">
  <h3 className="text-center my-4">My Projects</h3>
  <div className="row">
    {data.map((item, index) => (
      <div className="col-md-3 col-sm-6 mb-4" key={index}>
        <div className="card">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.descrip}</p>
            <a href={item.link}className='btn'>{item.btn}</a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>



</>
   ) ;
}
export default Portflio 