// This is for the bg data
import { createApi } from "unsplash-js";
import BgView from "./Views/bgView.js";
import DownloadView from "./Views/downloadView.js";

export const state2 = {
  bg: {},
  author: {},
  download: {},
};

const unsplash = createApi({
  accessKey: "a8hbd0MFXTjYEx9S1NJh9-VbieT2T70qH7-rwjbN4CQ",
});

export const getPhoto = async function (search) {
  try {
    unsplash.search
      .getPhotos({
        query: `${search}`,
        orderBy: "relevant",
      })
      .then((result) => {
        if (result.errors) {
          console.log(`maricon se daño`);
        } else {
          const feed = result.response;
          const { total, results } = feed;

          // download event
          unsplash.photos.trackDownload({
            downloadLocation: results[0].links.download_location,
          }).then(result => {
            state2.download = result.response.url;
            console.log(state2.download)
          });

          // bg
          state2.bg = result.response.results[0];
          state2.author = state2.bg.user;

          console.log(state2.bg);

          // calling the functions
          BgView.changeBg();

            // render
          DownloadView.render()
          BgView.render();
        }
      });
  } catch (err) {
    console.error(err);
  }
};
