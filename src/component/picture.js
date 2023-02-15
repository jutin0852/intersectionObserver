import { forwardRef, useEffect, useRef, useState } from "react"


const Picture = forwardRef(({img,backgroundColor,id},ref) => {
    const myref = useRef(null);
    const [color , setColor ] = useState('white')
  
  

  useEffect(() => {
    const myCurrent = myref.current;
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if(entry.isIntersecting){
          setColor(backgroundColor);
          myref.current.parentElement.style.backgroundColor = color;
      }
      
    },{
      root:null,
      rootMargin:'0px',
      threshold:0.3
   });
    if(myref.current) {observer.observe(myref.current)}
    return () => {
        if(myCurrent) {observer.unobserve(myCurrent)}

    }
    
  },[myref,backgroundColor,color])

    return(
    <div  ref={myref}  className="middle" >
        <img ref={ref} src={img} alt={img} />
        <h3>issue #{id}</h3>
        <h3>BUY HERE</h3>

</div>
)
})
export default Picture