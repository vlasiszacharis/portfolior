import './Card.css'

function Card({logo,heading,text}) {
  return (
    <div className="Card__Section">
     <div className="Card_Logo">
       {logo}
     </div>
     <div className="Card__Heading">
        {heading}
     </div>
     <div className="Card__Text">
        {text}
     </div>
    </div>
  )
}

export default Card