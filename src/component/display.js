import { useRef } from "react"
import Picture from "./picture";

export function Display(){
   
    const issue1ref = useRef(null);
    const issue2ref = useRef(null);
    const issue3ref = useRef(null);
    const issue4ref = useRef(null);
    const issue5ref = useRef(null);
    const issue6ref = useRef(null);
   
  const handleissue1 = () => {
    issue1ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
        
      });
    
    

  }
  const handleissue2 = () => {
    issue2ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }
  
  const handleissue3 = () => {
    issue3ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }
  const handleissue4 = () => {
    issue4ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }
  const handleissue5 = () => {
    issue5ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }
  const handleissue6 = () => {
    issue6ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  }
 
  
    return(
        <div >
 
        <div  className="full" >
            <div className="start">
                <h1>BACKSTAGE TALKS</h1>
                <h2>info@backstagetalks.com</h2>   
            </div>
            <Picture backgroundColor='white' ref={issue6ref} img='/images/backstagetalks_cover_issue_6.png' id={6}/>
            <Picture backgroundColor='#00c1b5' ref={issue5ref} img='/images/backstagetalks_cover_issue_5.png' id={5}/>
            <Picture backgroundColor='#ff651a' ref={issue4ref} img='/images/backstagetalks_cover_issue_4.png' id={4}/>
            <Picture backgroundColor='#ffbe00' ref={issue3ref} img='/images/backstagetalks_cover_issue_3.png' id={3}/>
            <Picture backgroundColor='#1d3fbb' ref={issue2ref}  img='/images/backstagetalks_cover2017.png' id={2}/>
            <Picture backgroundColor='#e30512' ref={issue1ref} img='/images/backstagetalks_cover2016_n.png' id={1}/>
            
            <div className="end">
                <p>Backstage Talks is a magazine of casual, 
                but in depth dialogues on design and business. 
                Our decisions shape and influence this complex world—to
                have a chance to make the right ones, we need to talk.
                </p>
                <ul>
                    <li onClick={handleissue6}>issue 6</li>
                    <li onClick={handleissue5}>issue 5</li>
                    <li onClick={handleissue4}>issue 4 </li>
                    <li onClick={handleissue3}>issue 3</li>
                    <li onClick={handleissue2}>issue 2</li>
                    <li onClick={handleissue1}>issue 1</li>
                </ul>
            </div>
            
        </div>
        </div>
    )
}