import React from 'react'
import "./skills.css"

function SegundoComponente() {
  return (
    <>
     <article> 
        <h1 className='titulo'>Skills</h1>  

        <section className="progress-circle-container ">
          <div className="skills">
            <p className="subtitulo">Html</p>
            <div className="progress-circle progress-90"><span>90</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Css</p>
            <div className="progress-circle progress-85"><span>85</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Java</p>
            <div className="progress-circle progress-50"><span>50</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">JavaScript</p>
            <div className="progress-circle progress-60"><span>60</span></div>  
          </div>
        </section>  
        <section>
          <div className="skills">
            <p className="subtitulo">MySql</p>
            <div className="progress-circle progress-45"><span>45</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Node JS</p>
            <div className="progress-circle progress-40"><span>40</span></div>  
          </div>
          <div className="skills">
            <p className="subtitulo">Bootstrap</p>
            <div className="progress-circle progress-60"><span>60</span></div>  
          </div> 
          <div className="skills">
            <p className="subtitulo">React</p>
            <div className="progress-circle progress-50"><span>50</span></div>  
          </div> 
        </section>
      </article>
    </>
  )
}

export default SegundoComponente