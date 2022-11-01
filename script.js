fetch('https://openapi.programming-hero.com/api/news/category/01')
// fetch('https://openapi.programming-hero.com/api/course/curriculum')
  .then(response => response.json())
  .then(data => displayNews(data))

//   fetch newsCategories

fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(json => displayNewsCategories(json))

    // Display News Categories Function
    function displayNewsCategories(newsCategories){
        const allCategories = newsCategories.data.news_category;
        const categories = document.querySelector('.news-categories-nav');
        categories.innerHTML = `${allCategories.map(function(category){
            return `<li class="nav-item" onclick=displayCategory(${category.category_id})>
                        <a class="nav-link" href="#">${category.category_name}</a>
                    </li>`
        }).join("")}`

    }

    function displayCategory(id){
        const url = `https://openapi.programming-hero.com/api/news/category/0${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=> displayNews(data))
        const newsContainer = document.querySelector('.news-area>.container')
        newsContainer.innerHTML = "";
    }

// Display News Function
  function displayNews(newsData){
    const allNews = newsData.data;
    // console.log(allNews);
    const newsContainer = document.querySelector('.news-area>.container');
    newsContainer.innerHTML =  `${allNews.map(function(singleNews){
      return `<div class="row">
      <div class="col-12">
          <div class="single-news">
              <div class="row">
                  <div class="col-lg-3">
                      <div class="news-thumb">
                          <a href="#"><img src="${singleNews.thumbnail_url}" alt=""></a>
                      </div>
                  </div>
                  <div class="col-lg-9">
                      <div class="news-content">
                           <h2>${singleNews.title}</h2>
                           <p>${singleNews.details.substring(0, 500) + "..."}</p>
                      </div>
                      <div class="news-meta">
                          <div class="row align-items-center">
                              <div class="col-md-4">
                                  <div class="author-details d-flex align-items-center">
                                      <div class="author-img mr-3">
                                        <img src="${singleNews.author.img}" alt="">
                                      </div>
                                      <div class="author-designation">
                                        <h4>${singleNews.author.name}</h4>
                                        <span>${singleNews.author.published_date}</span>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-3">
                                  <div class="news-views">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.8717 11.745C22.9896 9.46324 21.4582 7.48996 19.4668 6.06906C17.4754 4.64817 15.1113 3.84193 12.6667 3.75C10.2221 3.84193 7.85798 4.64817 5.86659 6.06906C3.8752 7.48996 2.34381 9.46324 1.46169 11.745C1.40211 11.9098 1.40211 12.0902 1.46169 12.255C2.34381 14.5368 3.8752 16.51 5.86659 17.9309C7.85798 19.3518 10.2221 20.1581 12.6667 20.25C15.1113 20.1581 17.4754 19.3518 19.4668 17.9309C21.4582 16.51 22.9896 14.5368 23.8717 12.255C23.9313 12.0902 23.9313 11.9098 23.8717 11.745ZM12.6667 18.75C8.69169 18.75 4.49169 15.8025 2.96919 12C4.49169 8.1975 8.69169 5.25 12.6667 5.25C16.6417 5.25 20.8417 8.1975 22.3642 12C20.8417 15.8025 16.6417 18.75 12.6667 18.75Z" fill="#515151"/>
                                        <path d="M12.6667 7.5C11.7767 7.5 10.9066 7.76392 10.1666 8.25839C9.4266 8.75285 8.84982 9.45566 8.50923 10.2779C8.16864 11.1002 8.07952 12.005 8.25315 12.8779C8.42679 13.7508 8.85537 14.5526 9.48471 15.182C10.114 15.8113 10.9159 16.2399 11.7888 16.4135C12.6617 16.5872 13.5665 16.4981 14.3888 16.1575C15.211 15.8169 15.9138 15.2401 16.4083 14.5001C16.9028 13.76 17.1667 12.89 17.1667 12C17.1667 10.8065 16.6926 9.66193 15.8487 8.81802C15.0048 7.97411 13.8602 7.5 12.6667 7.5ZM12.6667 15C12.0733 15 11.4933 14.8241 11 14.4944C10.5066 14.1648 10.1221 13.6962 9.89505 13.148C9.66799 12.5999 9.60858 11.9967 9.72433 11.4147C9.84009 10.8328 10.1258 10.2982 10.5454 9.87868C10.9649 9.45912 11.4995 9.1734 12.0814 9.05764C12.6634 8.94189 13.2666 9.0013 13.8147 9.22836C14.3629 9.45542 14.8315 9.83994 15.1611 10.3333C15.4907 10.8266 15.6667 11.4067 15.6667 12C15.6667 12.7956 15.3506 13.5587 14.788 14.1213C14.2254 14.6839 13.4623 15 12.6667 15Z" fill="#515151"/>
                                        </svg>
                                      <span>${singleNews.total_view}</span>
                                  </div>
                              </div>
                              <div class="col-md-3">
                                  <div class="news-review">
                                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21.617 8.27578L15.6662 7.41094L13.006 2.01797C12.9334 1.87031 12.8139 1.75078 12.6662 1.67813C12.2959 1.49531 11.8459 1.64766 11.6607 2.01797L9.00057 7.41094L3.04979 8.27578C2.88573 8.29922 2.73573 8.37656 2.62089 8.49375C2.48205 8.63645 2.40554 8.82844 2.40818 9.02752C2.41081 9.2266 2.49238 9.41649 2.63495 9.55547L6.94042 13.7531L5.92323 19.6805C5.89938 19.8184 5.91464 19.9602 5.96727 20.0898C6.01991 20.2195 6.10783 20.3318 6.22105 20.414C6.33427 20.4962 6.46826 20.5451 6.60784 20.5551C6.74742 20.565 6.88699 20.5356 7.01073 20.4703L12.3334 17.6719L17.656 20.4703C17.8014 20.5477 17.9701 20.5734 18.1318 20.5453C18.5396 20.475 18.8139 20.0883 18.7435 19.6805L17.7264 13.7531L22.0318 9.55547C22.149 9.44063 22.2264 9.29063 22.2498 9.12656C22.3131 8.71641 22.0271 8.33672 21.617 8.27578ZM15.9146 13.1625L16.7607 18.0914L12.3334 15.7664L7.90604 18.0938L8.75214 13.1648L5.17089 9.67266L10.1209 8.95313L12.3334 4.46953L14.5459 8.95313L19.4959 9.67266L15.9146 13.1625Z" fill="#515151"/>
                                  </svg>

                                  </div>
                              </div>
                              <div class="col-md-2">
                                  <div class="read-more text-right">
                                      <a href="#">
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.10352e-05 9C6.10352e-05 8.66848 0.131757 8.35054 0.366178 8.11612C0.600598 7.8817 0.91854 7.75 1.25006 7.75H15.7326L10.3651 2.385C10.1303 2.15028 9.99848 1.83194 9.99848 1.5C9.99848 1.16806 10.1303 0.849717 10.3651 0.615C10.5998 0.380283 10.9181 0.248421 11.2501 0.248421C11.582 0.248421 11.9003 0.380283 12.1351 0.615L19.6351 8.115C19.7515 8.23111 19.8438 8.36905 19.9068 8.52092C19.9699 8.67278 20.0023 8.83558 20.0023 9C20.0023 9.16442 19.9699 9.32722 19.9068 9.47908C19.8438 9.63095 19.7515 9.76889 19.6351 9.885L12.1351 17.385C11.9003 17.6197 11.582 17.7516 11.2501 17.7516C10.9181 17.7516 10.5998 17.6197 10.3651 17.385C10.1303 17.1503 9.99848 16.8319 9.99848 16.5C9.99848 16.1681 10.1303 15.8497 10.3651 15.615L15.7326 10.25H1.25006C0.91854 10.25 0.600598 10.1183 0.366178 9.88388C0.131757 9.64946 6.10352e-05 9.33152 6.10352e-05 9Z" fill="#5D5FEF"/>
                                        </svg>                                      
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          
          </div>
      </div>
  </div>`
    })}`;
  } 

  //News Excerpt

   /*  const newsDetails = document.querySelector('.news-content p')
    if (newsDetails.length > 10) {
        newsDetails.innerHTML = newsDetails.substring(0,30) + "...";
    } */
/*   function fetchData (){
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(newses => displayOutput(newses))
}
function displayOutput(newses){
    const allNews = newses.data;
    allNews.map(news => {
        console.log(news.title);
    })
}
fetchData(); */
