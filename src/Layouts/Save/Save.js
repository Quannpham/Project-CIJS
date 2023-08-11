import React from 'react'
import './Save.css';
const Save = () => {
  return (
        <section className='HomePageSave'>
                  <div className="SaveLeft">
                      <h1 className="content1-save"> Save ideas you like </h1>
                      <h4 className="content2-save"> Collect your favorites so you can get back to them later. </h4>
                      <h4 className="explore-save"> Explore </h4>
                  </div>
                  <div className="SaveRight">
                        <div className="HomeImg1">
                            <h3 className="home-page-img1"> Fern future home vibes </h3>
                            <img className="ImgSaveHome1" src="https://s.pinimg.com/webapp/future-home-vibes-55a673b9.png" alt="" />
                            <img className="ImgSaveHome2" src="https://s.pinimg.com/webapp/future-home1-f4037b6b.png"  alt='avt'/>
                            <img className="ImgSaveHome3" src="https://s.pinimg.com/webapp/future-home2-c70a8738.png" alt='avt'/>
                            <img className="ImgSaveHome4" src="https://s.pinimg.com/webapp/future-home3-ac09e50f.png" alt='avt' />
                        </div>
                        <div className="HomeImg2">
                          <img className="ImgSaveHome5" src="https://s.pinimg.com/webapp/scandinavian-bedroom-917ad89c.png" alt="" />
                          <img className="ImgSaveHome6" src="https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png" alt="" />
                          <img className="ImgSaveHome7" src="https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png" alt="" />
                          <img className="ImgSaveHome8" src="https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png" alt="" />
                        </div>
                          
                  </div>
        </section>
  )
}

export default Save
