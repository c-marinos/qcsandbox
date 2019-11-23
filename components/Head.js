import Head from "next/head";

export default ({ image }) => (
  <div>
    <Head>
      <title>QC Sandbox – Interactive Quantum Computing</title>
      <meta name="title" content="QC Sandbox – Interactive Quantum Computing" />
      <meta
        name="description"
        content="Helping hackers learn quantum languages, and become fluent in the quantum computing mathematical model, through interactive tutorials and quantum games."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https:/qcsandbox.com/" />
      <meta
        property="og:title"
        content="QC Sandbox – Interactive Quantum Computing"
      />
      <meta
        property="og:description"
        content="Helping hackers learn quantum languages, and become fluent in the quantum computing mathematical model, through interactive tutorials and quantum games."
      />
      <meta
        property="og:image"
        content={
          image
            ? image
            : "https://og-image.qcsandbox.com/Quantum%20Computing%20Sandbox.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fyiqq9wn916qar7i%2Flogo-white.svg%3Fraw%3D1"
        }
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https:/qcsandbox.com/" />
      <meta
        property="twitter:title"
        content="QC Sandbox – Interactive Quantum Computing"
      />
      <meta
        property="twitter:description"
        content="Helping hackers learn quantum languages, and become fluent in the quantum computing mathematical model, through interactive tutorials and quantum games."
      />
      <meta
        property="twitter:image"
        content={
          image
            ? image
            : "https://og-image.qcsandbox.com/Quantum%20Computing%20Sandbox.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fyiqq9wn916qar7i%2Flogo-white.svg%3Fraw%3D1"
        }
      />

      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/favicons/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/favicons/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/favicons/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/favicons/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/favicons/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/favicons/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/favicons/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/favicons/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicons/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />
    </Head>
    <style jsx global>{`
      body {
        background: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
        color: #000;
        margin: 0;
      }

      a {
        color: #666;
        text-decoration: none;
        user-select: none;
        font-size: 14px;
        cursor: pointer;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        padding: 0px 10px;
        transition: all 200ms ease 0s;
        font-weight: 600;
      }
      a:hover {
        color: #000;
      }

      h1 {
        color: inherit;
        line-height: 1.5;
        font-size: 3rem;
        letter-spacing: -0.066875rem;
        font-weight: 700;
      }

      h2 {
        color: inherit;
        line-height: 1.5;
        font-size: 2.25rem;
        letter-spacing: -0.049375rem;
        font-weight: 600;
      }

      h3 {
        color: inherit;
        line-height: 1.5;
        font-size: 1.5rem;
        letter-spacing: -0.029375rem;
        font-weight: 600;
      }

      h4 {
        color: inherit;
        line-height: 1.5;
        font-size: 1.25rem;
        letter-spacing: -0.020625rem;
        font-weight: 600;
      }

      h5 {
        color: inherit;
        line-height: 1.5;
        font-size: 1rem;
        letter-spacing: -0.01125rem;
        font-weight: 600;
      }

      h6 {
        color: inherit;
        line-height: 1.5;
        font-size: 0.875rem;
        letter-spacing: -0.005625rem;
        font-weight: 600;
      }

      p {
        color: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
      }

      pre {
        border: 1px solid #eaeaea;
        border-radius: 6px;
        padding: 1rem;
        margin: 2rem 0;
        white-space: pre;
        overflow: auto;
      }

      code {
        color: #f81ce5;
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono",
          "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New",
          monospace;
        font-size: 0.9rem;
        white-space: pre-wrap;
      }

      @media all and (min-width: 931px) {
        .bm-burger-button {
          display: none;
        }
      }
    `}</style>
  </div>
);
