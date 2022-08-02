import View from './View.js'
import { state } from '../data.js'

class NamesView extends View {
    _parentEl = document.querySelector('.text-city');

    _generateMarkup() {
        return `
            <h1 class="city">${state.location.city}</h1>
            <h3 class="country">${state.location.country}</h3>
        `
    }
}

export default new NamesView();