const html = ({ token, dateString, type }) => `
  <html ng-app="surveyApp" class="no-js ng-scope" lang="en" xmlns:ng="http://angularjs.org"
    xmlns="http://www.w3.org/1999/xhtml">
  <link type="text/css" id="dark-mode" rel="stylesheet" href="">
  <style type="text/css" id="dark-mode-custom-style"></style>
  <!--<![endif]-->

  <head>
    <style type="text/css">
      @charset "UTF-8";

      [ng\:cloak],
      [ng-cloak],
      [data-ng-cloak],
      [x-ng-cloak],
      .ng-cloak,
      .x-ng-cloak,
      .ng-hide {
        display: none !important;
      }

      ng\:form {
        display: block;
      }

      .ng-animate-block-transitions {
        transition: 0s all !important;
        -webkit-transition: 0s all !important;
      }

      .ng-hide-add-active,
      .ng-hide-remove {
        display: block !important;
      }
    </style>

    <style>
      .ng-hide {
        display: none !important;
      }
    </style>

    <link id="favicon" rel="icon" type="image/png" href="../image/favicon.png">

    <title>Ankieta McDonald's</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta name="robots" content="noindex,nofollow">

    <link href="https://www.inmoment.com/websurvey/css/third-party.min.css" rel="stylesheet" type="text/css">

    <link id="dynamic_css" rel="stylesheet" type="text/css" href="https://www.inmoment.com/websurvey/2/retrieveCss.css?themeId=7128&amp;s;=inmoment_395_7128_15">

    <style>
      @media print {
        body {
          background: none;
        }

        #customHeader,
        #nav,
        #footer,
        .prompt_identifier_printButton,
        .prompt_identifier_couponEmailButton {
          display: none;
        }

        #promptArea {
          padding: 0;
        }
      }
    </style>

    <script>
      function myFunction() {
        window.print();
      }
    </script>
  </head>

  <body class="i_17 page_-287800 page_identifier_printCouponPage rand_7 lcl_pl">
    <div id="customHeader" ng-bind-html="customHtml.header|unsafe" class="ng-binding">
      <div class="logoContainer">
        <div class="promptArea">
          <img
            src="https://www.inmoment.com/websurvey/servlet/BlobServlet?sid=24710042-3de0-4f7d-af1e-ec69e5424544&amp;v=0&amp;type=0&amp;tag=McDPolandLogo">
        </div>
      </div>
    </div>

    <div class="bodyContainer">
      <form
        name="promptForm"
        novalidate=""
        id="promptForm"
        class="ng-pristine ng-valid"
      >
        <div class="ng-scope">
          <div class="ng-scope ng-isolate-scope">
            <div class="noLogoPadding ng-scope"></div>
          </div>
          <div id="promptArea" class="promptArea ng-scope">
            <div
              class="promptContainer prompt_identifier_couponDateCode"
              id="prompt_377300"
            >
              <div on="prompt.type">
                <div class="ng-scope">
                  <div class="ng-isolate-scope">
                    <div
                      class="prompt clearfix genericPrompt ng-pristine ng-valid"
                      id="prompt_377300"
                    >
                      <div class="ng-isolate-scope">
                        <div
                          id="promptText_377300"
                          class="ng-scope promptText__header"
                        >
                          <div class="content">
                            <span class="ng-isolate-scope">
                              <span class="text">
                                <span class="ng-binding">
                                  <div class="couponDateCode_container">
                                    <div class="couponDateCode_column date">
                                      <!-- <strong>DATA WYDANIA:</strong> 08/07/2019 -->
                                      <strong>DATA WYDANIA:</strong> ${dateString}
                                    </div>
                                    <div class="couponDateCode_column code">
                                      <!-- <strong>UNIKALNY KOD:</strong> j-19-le-3 -->
                                      <strong>UNIKALNY KOD:</strong> ${token}
                                    </div>
                                  </div>
                                </span>
                                <span class="reqMarker ng-hide">*</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="outputValueText ng-binding">
                        j-19-le-3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="promptContainer prompt_identifier_chosenCoupon"
              id="prompt_372210"
            >
              <div>
                <div class="ng-scope">
                  <div class="ng-isolate-scope">
                    <div
                      class="prompt clearfix genericPrompt ng-pristine ng-valid"
                      id="prompt_372210"
                    >
                      <div class="ng-isolate-scope">
                        <div
                          id="promptText_372210"
                          class="ng-scope promptText__header"
                        >
                          <div class="content">
                            <span class="ng-isolate-scope">
                              <span class="text">
                                <span class="ng-binding">
                                  <img
                                    src="${
                                      type === 'icecream'
                                      ? 'https://www.inmoment.com/websurvey/servlet/BlobServlet?sid=45720160-0529-43fa-9380-f67c3f09ea72&v=0&type=0&tag=couponIceCream'
                                      :
                                        type === 'hamburger'
                                          ? 'https://www.inmoment.com/websurvey/servlet/BlobServlet?sid=ec784c28-b2e1-0c31-b856-87d4c6f5b548&v=0&type=0&tag=couponHamburger'
                                          : ''
                                    }"
                                    style="width: 100%; max-width: 580px;"
                                  />
                                </span>
                                <span class="reqMarker ng-hide">*</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="outputValueText ng-binding ng-hide"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="promptContainer prompt_identifier_null"
              id="prompt_373514"
            >
              <div>
                <div class="ng-scope">
                  <div class="ng-isolate-scope">
                    <div
                      class="prompt clearfix genericPrompt ng-pristine ng-valid"
                      id="prompt_373514"
                    >
                      <div class="ng-isolate-scope">
                        <div
                          id="promptText_373514"
                          class="ng-scope promptText__header"
                        >
                          <div class="content">
                            <span class="ng-isolate-scope">
                              <span class="text">
                                <span class="ng-binding">
                                  <div style="font-size: 0.7em; font-weight: normal; line-height: 1.23em;">Kupon ten
                                    upoważnia do jednokrotnego odbioru produktu gratis przy kolejnym dowolnym zakupie z
                                    oferty klasycznej. Kupon ważny jest przez 7 dni od czasu jego wygenerowania i może być
                                    zrealizowany w dowolnej restauracji McDonald’s w Polsce z wyłączeniem restauracji
                                    znajdujących się na terenie Portu Lotniczego im. Fryderyka Chopina w Warszawie oraz
                                    Portu Lotniczego im. Lecha Wałęsy w Gdańsku. Szczegółowy regulamin ankiety „Opinia
                                    Gości” znajduje się na stronie<a href="http://www.mcdonalds.pl">www.mcdonalds.pl</a> w
                                    sekcji <a href="https://mcdonalds.pl/o-mcdonalds/regulaminy">Regulaminy</a>
                                  </div>
                                </span>
                                <span class="reqMarker ng-hide">*</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="outputValueText ng-binding ng-hide"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="promptContainer prompt_identifier_couponSendOptions"
              id="prompt_373701"
            >
              <div>
                <div class="ng-scope">
                  <div class="ng-isolate-scope">
                    <div class="prompt YesNo noWebText" id="prompt_373701">
                      <div class="promptInput multipleChoiceInput">
                        <div class="yesNo ng-scope">
                          <div id="promptInput_373701" class="promptInput categorical" tabindex="1">
                            <label
                              class="n yesNoEl ng-binding chkd">
                              <button
                                onclick="myFunction()"
                              >
                                Drukuj /
                                <br />Zapisz jako PDF
                              </button>
                            </label>
                            <label class="y yesNoEl ng-binding">
                              Prześlij kupon
                              <div class="button_smallText">
                                (wysyłka w ciągu 24 godzin)
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id="nav">
          <div id="backImg"></div>
          <div id="nextImg"></div>
          <button
            id="prevPageLink"
            type="button"
            tabindex="6"
            class="ng-binding navButton"
          >
            <span class="arrow backArrow"></span>Cofnij
          </button>
          <button
            id="nextPageLink"
            type="button"
            tabindex="5"
            class="ng-binding navButton"
          >
            Dalej<span class="arrow nextArrow"></span>
          </button>
          <div
            class="progress ng-isolate-scope"
            id="progressBar"
            progressbar=""
            value="percentComplete"
          >
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="99.35823427392612"
              aria-valuemin="0"
              aria-valuemax="100"
              title="99%"
              ng-transclude=""
              style="width: 99.36%;"
            ></div>
          </div>
          <div id="clear"></div>
        </div>
        <div id="footerBar" class="separatorBar"></div>
      </form>
    </div>
  </body>

  </html>
`

const generateChar = () => String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26));
const mr = () => Math.floor(Math.random() * 10);
const gc = () => generateChar();
const t2d = s => String(s).padStart(2, '0');

module.exports = (req, res) => {
  const date = new Date(Date.now() - 1000 * 60 * 60 * 24);
  const dateString = `${t2d(date.getDate())}/${t2d(date.getMonth() + 1)}/${date.getFullYear()}`
  const token = `${gc()}-${mr()}${mr()}-${gc()}${gc()}-${mr()}`;

  res
    .status(200)
    .send(
      html({
        token,
        dateString,
        type: req.query.type
      })
    )
};
