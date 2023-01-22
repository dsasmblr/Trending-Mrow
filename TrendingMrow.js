// ==UserScript==
// @name         "Trending Mrow" on Twitter
// @author       Stephen Chapman - Twitter: @Chapman | GitHub: dsasmblr
// @version      0.1
// @description  See what's Trending Mrow instead of Trending Now!
// @match        *://*.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const setMrow = () => {
        const trendingNow = document.querySelector('[aria-label="Timeline: Trending now"]');

        if (trendingNow) {
          trendingNow.parentElement.innerHTML = `
            <h2 style="
              color: white;
              font: 20px -apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif;
              font-weight: 800;
              padding-left: 16px;
            ">
              Trending mrow
            </h2>
            <div style="
              align-items: center;
              display: flex;
              height: 205px;
              justify-content: center;
            ">
              <a href="https://twitter.com/Chapman/status/1617296455584346113" style="padding-right: 15px;" target="_blank">
                <img src="https://pbs.twimg.com/media/FnHGpl6XoAEMn5M.png" style="max-width: 100%;" />
              </a>
            </div>
          `;
        }
    }

    const t = document.body;
    const c = { childList: true, subtree: true };

    const cb = (mutList, obs) => {
        mutList.forEach((mut) => {
            setMrow();
        });
    };

    const obs = new MutationObserver(cb);

    obs.observe(t, c);
})();
