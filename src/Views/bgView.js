import View from "./View.js";
import { state2 } from "../data2.js";

import buenos from  "url:../../cities/thom-milkovic-skUTVJi8-jc-unsplash.jpg";
import seattle from  "url:../../cities/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg";
import bogota from  "url:../../cities/alejandro-alfaro-m-cmo76qKvNaU-unsplash.jpg";

class BgView extends View {
    _parentEl = document.querySelector('.user')
    _styleEl = document.querySelector('.container')

    clImage() {
        console.log(seattle)
    }

    setImage(url) {
        const newImage = `${url}`
        return newImage;
    }

    changeBg() {
        Object.assign(this._styleEl.style, {
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("${state2.bg.urls.full}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
        })
    }

    _generateMarkup() {
        return `
            <h3 class="user-font">
                Photo by
                <a href="${state2.author.links.html}" target="_blank"
                  >${state2.author.name}</a
                >
                on
                <a href="https://unsplash.com/es" target="_blank">Unsplash</a>
            </h3>
        `
    }
} 

export default new BgView();