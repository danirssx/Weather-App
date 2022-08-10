import View from "./View.js";

import buenos from  "url:../../cities/thom-milkovic-skUTVJi8-jc-unsplash.jpg";
import seattle from  "url:../../cities/mwangi-gatheca-qlKaN7eqay8-unsplash.jpg";
import bogota from  "url:../../cities/alejandro-alfaro-m-cmo76qKvNaU-unsplash.jpg";

class BgView extends View {
    _parentEl = document.querySelector('.container')

    clImage() {
        console.log(seattle)
    }

    changeBg() {
        Object.assign(this._parentEl.style, {
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url("${seattle}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
        })
    }
} 

export default new BgView();