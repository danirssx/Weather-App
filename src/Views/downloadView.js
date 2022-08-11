import View from './View.js';
import { state2 } from '../data2.js'

import downloadIcon from "url:../../icon white/download.png"

class DownloadView extends View {
    _parentEl = document.querySelector('.final')

    _generateMarkup() {
        return `
        <h1 class="hidden-credit">a</h1>
            <div class="credit-font">
              <h3 class="credits">
                made by
                <a href="https://www.behance.net/danielross8" target="_blank"
                  >@danirssx</a
                >
              </h3>
            </div>
            <a
              href="${state2.download}" class="download-icon" target="_blank"><img
                src="${downloadIcon}"
                alt="Download image"
                class="download-icon"
              />
            </a>
        `
    }
}

export default new DownloadView();