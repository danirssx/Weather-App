// Here we will put all the principal renders for the Views

export default class View {
    
    render() {
        const markup = this._generateMarkup();
        this._clear()
        this._parentEl.insertAdjacentHTML('afterbegin', markup)
    }

    _clear() {
        this._parentEl.innerHTML = '';
    }
} 