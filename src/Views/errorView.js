import View from './View.js'

class ErrorView extends View {
    _parentEl = document.querySelector('.error')

    errorDisplay() {
        this._parentEl.classList.toggle('error-change');

        setTimeout(() => {
            this._parentEl.classList.toggle('error-hidden')
        }, 4 * 1000);
}
}

export default new ErrorView()