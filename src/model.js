import SearchView from "./Views/searchView";
import * as control from "./controller.js";
import timeView from "./Views/timeView.js";

export let message;
let log;

export const logInput = function () {
  try {
    if (message === undefined) return;
    return control.grabData(`${message}`);
  } catch (err) {
    console.error(`💥💥💥, ${err}`);
  }
};

// Grabbing Input Data

export const grabInput = function () {

  SearchView._parentEl.addEventListener("click", function (e) {
    input = e.target
      .closest(".input-search")
      ?.addEventListener("input", function () {
        const value = document.querySelector(".input-search").value;
        log = value;
        return log;
      });

    search = document.querySelector(".btn-input");

    if (e.target.classList.contains("btn-input")) {
      message = log;
      logInput();
    }

    return message;
  });
};
