import { component$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "@fontsource/inter";
import "@fontsource/inter/700.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <title>Argon Dashboard 2 by Creative Tim</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link href="/assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossOrigin="anonymous"
        ></script>
        <link href="/assets/css/nucleo-svg.css" rel="stylesheet" />
        <link
          id="pagestyle"
          href="/assets/css/argon-dashboard.css?v=2.0.4"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body class="g-sidenav-show  bg-gray-100" lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
