// Grab Search Bar

import loupe from 'url:../../icon white/loupe.png'
import View from './View.js';
import timeView from './timeView.js';

class SearchView extends View { 
    _parentEl = document.querySelector('.header')
    _btn = this._parentEl.querySelector('.principal-search-btn');

    btnSearch() {
        const btn = this._btn;
        btn.addEventListener('click', this.render.bind(this))
        btn.addEventListener('click', function() {
          timeView.callDate()
        })
    }

    _generateMarkup() {
        return `
         <form class="search" action="search" id="searchForm">
          <input type="search" placeholder="Search..." class="input-search"/>
          <button class="btn-input" type="button">
            <img src="${loupe}" alt="" class="btn-search btn-input" />
          </button>
        </form>
        <div class="date-time">
          <h1 class="time">6:12 PM</h1>
          <h3 class="date">Tuesday - 7/13/2022</h3>
        </div>
        `
    }
}

export default new SearchView();