// Grab Search Bar

import loupe from 'url:../../icon white/loupe.png'
import View from './View.js'

class SearchView extends View { 
    _parentEl = document.querySelector('.header')
    _result;
    _countSearch = 0;
    _btn = this._parentEl.querySelector('.principal-search-btn');

    _searchCount() {
      this._countSearch++
    }

    btnSearch() {
        const btn = this._btn;
        btn.addEventListener('click', this.render.bind(this))
        btn.addEventListener('click', this._searchCount.bind(this))
    }

    settingMessage() {
      this._result = input.value;
      console.log(this._result)
    }

    getInput() {
      const btn = this._btn;
      const parent = this._parentEl;
      let search;
      let input;
      let message;

      btn.addEventListener('click', function() {
        input = parent.querySelector('.input-search')
        search = parent.querySelector('.btn-input');

        search.addEventListener('click', function() {
          this._result = message;
          message = input.value;
          return message;
        })
        return search, input;
      })      

      return message;
    }

    test() {
      // setTimeout(() => {
      //   const title = this.getInput();
      //   console.log(title)
      // }, 6000);
    }

    _generateMarkup() {
        return `
         <form class="search">
          <input type="text" placeholder="Search..." class="input-search"/>
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