import React from 'react';



class List extends React.Component {

  render(){
    return (
      <div class='menu' >
          <div class='menu-items' >      
              <div className='browse-catigoreis' >
                <a href='#' class='browse-button'>Browse Catigoreis</a>
                <span class="material-symbols-outlined arrow">expand_more</span>
              </div>           
            <div class="menu-picks">
                <a href='#'  class='other-button'>What's New</a>
                <a href='#'  class='other-button'>Trending</a>
                <a href='#'  class='other-button'>For You</a>
                <a href='#'  class='other-button'>Shop Products</a>
            </div>
          </div>
          <div class='search-bar'>
            <span class="material-symbols-outlined">search</span>            
            <input type="search" class='search' placeholder='Search GrabOne' />
          </div>
        </div>
    );
  }
  }
  
  
  export default List ;
  