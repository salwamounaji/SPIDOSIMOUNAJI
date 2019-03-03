const h = window.App.h;

class SpiHome {
    render() {
        return (h("div", { class: "spi-home" },
            h("div", { class: "container is-large has-text-centered" },
                h("h1", { class: "title is-bold" }, "Bienvenue sur l'interface du SPI !"),
                h("h2", { class: "subtitle" }, "Veuillez utiliser le Menu ci-dessus pour continuer."))));
    }
    static get is() { return "spi-home"; }
    static get style() { return "\@-webkit-keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n\@keyframes spinAround {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n.is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.title:not(:last-child),\n.subtitle:not(:last-child) {\n  margin-bottom: 1.5rem; }\n\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */\nhtml,\nbody,\np,\nol,\nul,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigure,\nfieldset,\nlegend,\ntextarea,\npre,\niframe,\nhr,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal; }\n\nul {\n  list-style: none; }\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0; }\n\nhtml {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  -webkit-box-sizing: inherit;\n  box-sizing: inherit; }\n\nimg,\nembed,\niframe,\nobject,\nvideo {\n  height: auto;\n  max-width: 100%; }\n\naudio {\n  max-width: 100%; }\n\niframe {\n  border: 0; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0;\n  text-align: left; }\n\nhtml {\n  background-color: white;\n  font-size: 16px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n  -webkit-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  text-size-adjust: 100%; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace; }\n\nbody {\n  color: #4a4a4a;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5; }\n\na {\n  color: #3273dc;\n  cursor: pointer;\n  text-decoration: none; }\n  a strong {\n    color: currentColor; }\n  a:hover {\n    color: #363636; }\n\ncode {\n  background-color: whitesmoke;\n  color: #ff3860;\n  font-size: 0.875em;\n  font-weight: normal;\n  padding: 0.25em 0.5em 0.25em; }\n\nhr {\n  background-color: whitesmoke;\n  border: none;\n  display: block;\n  height: 2px;\n  margin: 1.5rem 0; }\n\nimg {\n  height: auto;\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: 0.875em; }\n\nspan {\n  font-style: inherit;\n  font-weight: inherit; }\n\nstrong {\n  color: #363636;\n  font-weight: 700; }\n\nfieldset {\n  border: none; }\n\npre {\n  -webkit-overflow-scrolling: touch;\n  background-color: whitesmoke;\n  color: #4a4a4a;\n  font-size: 0.875em;\n  overflow-x: auto;\n  padding: 1.25rem 1.5rem;\n  white-space: pre;\n  word-wrap: normal; }\n  pre code {\n    background-color: transparent;\n    color: currentColor;\n    font-size: 1em;\n    padding: 0; }\n\ntable td,\ntable th {\n  text-align: left;\n  vertical-align: top; }\n\ntable th {\n  color: #363636; }\n\n.is-clearfix::after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.is-pulled-left {\n  float: left !important; }\n\n.is-pulled-right {\n  float: right !important; }\n\n.is-clipped {\n  overflow: hidden !important; }\n\n.is-size-1 {\n  font-size: 3rem !important; }\n\n.is-size-2 {\n  font-size: 2.5rem !important; }\n\n.is-size-3 {\n  font-size: 2rem !important; }\n\n.is-size-4 {\n  font-size: 1.5rem !important; }\n\n.is-size-5 {\n  font-size: 1.25rem !important; }\n\n.is-size-6 {\n  font-size: 1rem !important; }\n\n.is-size-7 {\n  font-size: 0.75rem !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-size-1-mobile {\n    font-size: 3rem !important; }\n  .is-size-2-mobile {\n    font-size: 2.5rem !important; }\n  .is-size-3-mobile {\n    font-size: 2rem !important; }\n  .is-size-4-mobile {\n    font-size: 1.5rem !important; }\n  .is-size-5-mobile {\n    font-size: 1.25rem !important; }\n  .is-size-6-mobile {\n    font-size: 1rem !important; }\n  .is-size-7-mobile {\n    font-size: 0.75rem !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-size-1-tablet {\n    font-size: 3rem !important; }\n  .is-size-2-tablet {\n    font-size: 2.5rem !important; }\n  .is-size-3-tablet {\n    font-size: 2rem !important; }\n  .is-size-4-tablet {\n    font-size: 1.5rem !important; }\n  .is-size-5-tablet {\n    font-size: 1.25rem !important; }\n  .is-size-6-tablet {\n    font-size: 1rem !important; }\n  .is-size-7-tablet {\n    font-size: 0.75rem !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-size-1-touch {\n    font-size: 3rem !important; }\n  .is-size-2-touch {\n    font-size: 2.5rem !important; }\n  .is-size-3-touch {\n    font-size: 2rem !important; }\n  .is-size-4-touch {\n    font-size: 1.5rem !important; }\n  .is-size-5-touch {\n    font-size: 1.25rem !important; }\n  .is-size-6-touch {\n    font-size: 1rem !important; }\n  .is-size-7-touch {\n    font-size: 0.75rem !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-size-1-desktop {\n    font-size: 3rem !important; }\n  .is-size-2-desktop {\n    font-size: 2.5rem !important; }\n  .is-size-3-desktop {\n    font-size: 2rem !important; }\n  .is-size-4-desktop {\n    font-size: 1.5rem !important; }\n  .is-size-5-desktop {\n    font-size: 1.25rem !important; }\n  .is-size-6-desktop {\n    font-size: 1rem !important; }\n  .is-size-7-desktop {\n    font-size: 0.75rem !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-size-1-widescreen {\n    font-size: 3rem !important; }\n  .is-size-2-widescreen {\n    font-size: 2.5rem !important; }\n  .is-size-3-widescreen {\n    font-size: 2rem !important; }\n  .is-size-4-widescreen {\n    font-size: 1.5rem !important; }\n  .is-size-5-widescreen {\n    font-size: 1.25rem !important; }\n  .is-size-6-widescreen {\n    font-size: 1rem !important; }\n  .is-size-7-widescreen {\n    font-size: 0.75rem !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-size-1-fullhd {\n    font-size: 3rem !important; }\n  .is-size-2-fullhd {\n    font-size: 2.5rem !important; }\n  .is-size-3-fullhd {\n    font-size: 2rem !important; }\n  .is-size-4-fullhd {\n    font-size: 1.5rem !important; }\n  .is-size-5-fullhd {\n    font-size: 1.25rem !important; }\n  .is-size-6-fullhd {\n    font-size: 1rem !important; }\n  .is-size-7-fullhd {\n    font-size: 0.75rem !important; } }\n\n.has-text-centered {\n  text-align: center !important; }\n\n.has-text-justified {\n  text-align: justify !important; }\n\n.has-text-left {\n  text-align: left !important; }\n\n.has-text-right {\n  text-align: right !important; }\n\n\@media screen and (max-width: 768px) {\n  .has-text-centered-mobile {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .has-text-centered-tablet {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-centered-tablet-only {\n    text-align: center !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .has-text-centered-touch {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .has-text-centered-desktop {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-centered-desktop-only {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .has-text-centered-widescreen {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-centered-widescreen-only {\n    text-align: center !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .has-text-centered-fullhd {\n    text-align: center !important; } }\n\n\@media screen and (max-width: 768px) {\n  .has-text-justified-mobile {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .has-text-justified-tablet {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-justified-tablet-only {\n    text-align: justify !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .has-text-justified-touch {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .has-text-justified-desktop {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-justified-desktop-only {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .has-text-justified-widescreen {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-justified-widescreen-only {\n    text-align: justify !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .has-text-justified-fullhd {\n    text-align: justify !important; } }\n\n\@media screen and (max-width: 768px) {\n  .has-text-left-mobile {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .has-text-left-tablet {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-left-tablet-only {\n    text-align: left !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .has-text-left-touch {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .has-text-left-desktop {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-left-desktop-only {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .has-text-left-widescreen {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-left-widescreen-only {\n    text-align: left !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .has-text-left-fullhd {\n    text-align: left !important; } }\n\n\@media screen and (max-width: 768px) {\n  .has-text-right-mobile {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .has-text-right-tablet {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .has-text-right-tablet-only {\n    text-align: right !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .has-text-right-touch {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .has-text-right-desktop {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .has-text-right-desktop-only {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .has-text-right-widescreen {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .has-text-right-widescreen-only {\n    text-align: right !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .has-text-right-fullhd {\n    text-align: right !important; } }\n\n.is-capitalized {\n  text-transform: capitalize !important; }\n\n.is-lowercase {\n  text-transform: lowercase !important; }\n\n.is-uppercase {\n  text-transform: uppercase !important; }\n\n.is-italic {\n  font-style: italic !important; }\n\n.has-text-white {\n  color: white !important; }\n\na.has-text-white:hover, a.has-text-white:focus {\n  color: #e6e6e6 !important; }\n\n.has-background-white {\n  background-color: white !important; }\n\n.has-text-black {\n  color: #0a0a0a !important; }\n\na.has-text-black:hover, a.has-text-black:focus {\n  color: black !important; }\n\n.has-background-black {\n  background-color: #0a0a0a !important; }\n\n.has-text-light {\n  color: whitesmoke !important; }\n\na.has-text-light:hover, a.has-text-light:focus {\n  color: #dbdbdb !important; }\n\n.has-background-light {\n  background-color: whitesmoke !important; }\n\n.has-text-dark {\n  color: #363636 !important; }\n\na.has-text-dark:hover, a.has-text-dark:focus {\n  color: #1c1c1c !important; }\n\n.has-background-dark {\n  background-color: #363636 !important; }\n\n.has-text-primary {\n  color: #00d1b2 !important; }\n\na.has-text-primary:hover, a.has-text-primary:focus {\n  color: #009e86 !important; }\n\n.has-background-primary {\n  background-color: #00d1b2 !important; }\n\n.has-text-link {\n  color: #3273dc !important; }\n\na.has-text-link:hover, a.has-text-link:focus {\n  color: #205bbc !important; }\n\n.has-background-link {\n  background-color: #3273dc !important; }\n\n.has-text-info {\n  color: #209cee !important; }\n\na.has-text-info:hover, a.has-text-info:focus {\n  color: #0f81cc !important; }\n\n.has-background-info {\n  background-color: #209cee !important; }\n\n.has-text-success {\n  color: #23d160 !important; }\n\na.has-text-success:hover, a.has-text-success:focus {\n  color: #1ca64c !important; }\n\n.has-background-success {\n  background-color: #23d160 !important; }\n\n.has-text-warning {\n  color: #ffdd57 !important; }\n\na.has-text-warning:hover, a.has-text-warning:focus {\n  color: #ffd324 !important; }\n\n.has-background-warning {\n  background-color: #ffdd57 !important; }\n\n.has-text-danger {\n  color: #ff3860 !important; }\n\na.has-text-danger:hover, a.has-text-danger:focus {\n  color: #ff0537 !important; }\n\n.has-background-danger {\n  background-color: #ff3860 !important; }\n\n.has-text-black-bis {\n  color: #121212 !important; }\n\n.has-background-black-bis {\n  background-color: #121212 !important; }\n\n.has-text-black-ter {\n  color: #242424 !important; }\n\n.has-background-black-ter {\n  background-color: #242424 !important; }\n\n.has-text-grey-darker {\n  color: #363636 !important; }\n\n.has-background-grey-darker {\n  background-color: #363636 !important; }\n\n.has-text-grey-dark {\n  color: #4a4a4a !important; }\n\n.has-background-grey-dark {\n  background-color: #4a4a4a !important; }\n\n.has-text-grey {\n  color: #7a7a7a !important; }\n\n.has-background-grey {\n  background-color: #7a7a7a !important; }\n\n.has-text-grey-light {\n  color: #b5b5b5 !important; }\n\n.has-background-grey-light {\n  background-color: #b5b5b5 !important; }\n\n.has-text-grey-lighter {\n  color: #dbdbdb !important; }\n\n.has-background-grey-lighter {\n  background-color: #dbdbdb !important; }\n\n.has-text-white-ter {\n  color: whitesmoke !important; }\n\n.has-background-white-ter {\n  background-color: whitesmoke !important; }\n\n.has-text-white-bis {\n  color: #fafafa !important; }\n\n.has-background-white-bis {\n  background-color: #fafafa !important; }\n\n.has-text-weight-light {\n  font-weight: 300 !important; }\n\n.has-text-weight-normal {\n  font-weight: 400 !important; }\n\n.has-text-weight-semibold {\n  font-weight: 600 !important; }\n\n.has-text-weight-bold {\n  font-weight: 700 !important; }\n\n.is-family-primary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-secondary {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-sans-serif {\n  font-family: BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif !important; }\n\n.is-family-monospace {\n  font-family: monospace !important; }\n\n.is-family-code {\n  font-family: monospace !important; }\n\n.is-block {\n  display: block !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-block-mobile {\n    display: block !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-block-tablet {\n    display: block !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-block-tablet-only {\n    display: block !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-block-touch {\n    display: block !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-block-desktop {\n    display: block !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-block-desktop-only {\n    display: block !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-block-widescreen {\n    display: block !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-block-widescreen-only {\n    display: block !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-block-fullhd {\n    display: block !important; } }\n\n.is-flex {\n  display: -ms-flexbox !important;\n  display: flex !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-flex-mobile {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-flex-tablet {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-flex-tablet-only {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-flex-touch {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-flex-desktop {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-flex-desktop-only {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-flex-widescreen {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-flex-widescreen-only {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-flex-fullhd {\n    display: -ms-flexbox !important;\n    display: flex !important; } }\n\n.is-inline {\n  display: inline !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-inline-mobile {\n    display: inline !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-inline-tablet {\n    display: inline !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-tablet-only {\n    display: inline !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-inline-touch {\n    display: inline !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-inline-desktop {\n    display: inline !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-desktop-only {\n    display: inline !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-inline-widescreen {\n    display: inline !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-widescreen-only {\n    display: inline !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-inline-fullhd {\n    display: inline !important; } }\n\n.is-inline-block {\n  display: inline-block !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-inline-block-mobile {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-inline-block-tablet {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-block-tablet-only {\n    display: inline-block !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-inline-block-touch {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-inline-block-desktop {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-block-desktop-only {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-inline-block-widescreen {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-block-widescreen-only {\n    display: inline-block !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-inline-block-fullhd {\n    display: inline-block !important; } }\n\n.is-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-inline-flex-mobile {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-inline-flex-tablet {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-inline-flex-tablet-only {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-inline-flex-touch {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-inline-flex-desktop {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-inline-flex-desktop-only {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-inline-flex-widescreen {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-inline-flex-widescreen-only {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-inline-flex-fullhd {\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n\n.is-hidden {\n  display: none !important; }\n\n.is-sr-only {\n  border: none !important;\n  clip: rect(0, 0, 0, 0) !important;\n  height: 0.01em !important;\n  overflow: hidden !important;\n  padding: 0 !important;\n  position: absolute !important;\n  white-space: nowrap !important;\n  width: 0.01em !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-hidden-tablet-only {\n    display: none !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-hidden-touch {\n    display: none !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-hidden-desktop-only {\n    display: none !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-hidden-widescreen {\n    display: none !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-hidden-widescreen-only {\n    display: none !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-hidden-fullhd {\n    display: none !important; } }\n\n.is-invisible {\n  visibility: hidden !important; }\n\n\@media screen and (max-width: 768px) {\n  .is-invisible-mobile {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 769px), print {\n  .is-invisible-tablet {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 769px) and (max-width: 1087px) {\n  .is-invisible-tablet-only {\n    visibility: hidden !important; } }\n\n\@media screen and (max-width: 1087px) {\n  .is-invisible-touch {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 1088px) {\n  .is-invisible-desktop {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 1088px) and (max-width: 1279px) {\n  .is-invisible-desktop-only {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 1280px) {\n  .is-invisible-widescreen {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 1280px) and (max-width: 1471px) {\n  .is-invisible-widescreen-only {\n    visibility: hidden !important; } }\n\n\@media screen and (min-width: 1472px) {\n  .is-invisible-fullhd {\n    visibility: hidden !important; } }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-paddingless {\n  padding: 0 !important; }\n\n.is-radiusless {\n  border-radius: 0 !important; }\n\n.is-shadowless {\n  -webkit-box-shadow: none !important;\n  box-shadow: none !important; }\n\n.container {\n  margin: 0 auto;\n  position: relative; }\n  \@media screen and (min-width: 1088px) {\n    .container {\n      max-width: 960px;\n      width: 960px; }\n      .container.is-fluid {\n        margin-left: 64px;\n        margin-right: 64px;\n        max-width: none;\n        width: auto; } }\n  \@media screen and (max-width: 1279px) {\n    .container.is-widescreen {\n      max-width: 1152px;\n      width: auto; } }\n  \@media screen and (max-width: 1471px) {\n    .container.is-fullhd {\n      max-width: 1344px;\n      width: auto; } }\n  \@media screen and (min-width: 1280px) {\n    .container {\n      max-width: 1152px;\n      width: 1152px; } }\n  \@media screen and (min-width: 1472px) {\n    .container {\n      max-width: 1344px;\n      width: 1344px; } }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n  .title em,\n  .title span,\n  .subtitle em,\n  .subtitle span {\n    font-weight: inherit; }\n  .title sub,\n  .subtitle sub {\n    font-size: 0.75em; }\n  .title sup,\n  .subtitle sup {\n    font-size: 0.75em; }\n  .title .tag,\n  .subtitle .tag {\n    vertical-align: middle; }\n\n.title {\n  color: #363636;\n  font-size: 2rem;\n  font-weight: 600;\n  line-height: 1.125; }\n  .title strong {\n    color: inherit;\n    font-weight: inherit; }\n  .title + .highlight {\n    margin-top: -0.75rem; }\n  .title:not(.is-spaced) + .subtitle {\n    margin-top: -1.25rem; }\n  .title.is-1 {\n    font-size: 3rem; }\n  .title.is-2 {\n    font-size: 2.5rem; }\n  .title.is-3 {\n    font-size: 2rem; }\n  .title.is-4 {\n    font-size: 1.5rem; }\n  .title.is-5 {\n    font-size: 1.25rem; }\n  .title.is-6 {\n    font-size: 1rem; }\n  .title.is-7 {\n    font-size: 0.75rem; }\n\n.subtitle {\n  color: #4a4a4a;\n  font-size: 1.25rem;\n  font-weight: 400;\n  line-height: 1.25; }\n  .subtitle strong {\n    color: #363636;\n    font-weight: 600; }\n  .subtitle:not(.is-spaced) + .title {\n    margin-top: -1.25rem; }\n  .subtitle.is-1 {\n    font-size: 3rem; }\n  .subtitle.is-2 {\n    font-size: 2.5rem; }\n  .subtitle.is-3 {\n    font-size: 2rem; }\n  .subtitle.is-4 {\n    font-size: 1.5rem; }\n  .subtitle.is-5 {\n    font-size: 1.25rem; }\n  .subtitle.is-6 {\n    font-size: 1rem; }\n  .subtitle.is-7 {\n    font-size: 0.75rem; }\n\n.spi-home .container {\n  margin: 41vh; }\n\nbody {\n  background-image: url(../../assets/university.jpg);\n  background-position: center;\n  background-size: cover; }"; }
}

export { SpiHome };