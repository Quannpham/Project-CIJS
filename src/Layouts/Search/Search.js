import React from 'react'
import "./Search.css"

const Search = () => {
  return (
        <section className='HomePageSearch'>
            <div className='SearchLeft'>
                <img className="images1Search" src="https://s.pinimg.com/webapp/center-77497603.png" alt="" />
                <img className="images2images1Search" src="https://s.pinimg.com/webapp/right-88044782.png" alt="" />
                <img className="images3images1Search" src="https://s.pinimg.com/webapp/topRight-d0230035.png" alt="" />
                <img className="images4images1Search" src="https://s.pinimg.com/webapp/left-511a9304.png" alt="" />
                <div className="search">
                <h4 className="easy chicken dinner"> easy chicken dinner 
                    <i className="fa-solid fa-magnifying-glass" />
                </h4> 
                </div>  
            </div>    
            <div className="SearchRight">
                <h1 className="content1"> Search for an idea </h1>
                <h4 className="content2"> What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find. </h4>
                <h4 className="exploreSearch"> Explore</h4>
            </div>
        </section>
  )
}

export default Search
