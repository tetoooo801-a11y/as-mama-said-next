import { Montserrat, Manrope, Cairo, Kanit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata = {
  title: "As Mama Said — Mama said it. We made it.",
  description: "Well said, well made — a creative studio out of Cairo and Dubai.",
};

const extensionScrubber = `
(function() {
  if (typeof window === 'undefined') return;

  function isExtAttr(n) {
    return typeof n === 'string' && (
      n.indexOf('bis_') === 0 ||
      n.indexOf('__processed_') === 0 ||
      n === 'bis_skin_checked' ||
      n === 'bis_register'
    );
  }

  function isExtError(err, optUrl) {
    if (!err && !optUrl) return false;
    var str = String((err && (err.message || err.stack || err)) || '') + ' ' + String(optUrl || '');
    return (
      str.indexOf('chrome-extension://') !== -1 ||
      str.indexOf('moz-extension://') !== -1 ||
      str.indexOf('safari-extension://') !== -1 ||
      str.indexOf('eppiocemhmnlbhjplcgkofciiegomcon') !== -1 ||
      str.indexOf('M_ID') !== -1 ||
      str.indexOf('bis_skin_checked') !== -1 ||
      str.indexOf('bis_register') !== -1 ||
      str.indexOf('__processed_') !== -1
    );
  }

  // Intercept window.onerror to suppress extension errors
  var origOnError = window.onerror;
  window.onerror = function(msg, url, line, col, err) {
    if (isExtError(err, url) || isExtError(msg, url)) {
      return true;
    }
    if (origOnError) return origOnError.apply(this, arguments);
  };

  // Intercept window.reportError (used by React 19 / Next.js)
  if (typeof window.reportError === 'function') {
    var origReport = window.reportError;
    window.reportError = function(err) {
      if (isExtError(err)) return;
      return origReport.apply(this, arguments);
    };
  }

  // Intercept console.error to filter out extension hydration mismatch
  var origConsoleError = console.error;
  console.error = function() {
    var args = Array.prototype.slice.call(arguments);
    var str = args.map(function(a) {
      return (typeof a === 'object' && a !== null) ? (a.message || a.stack || '') : String(a);
    }).join(' ');
    if (isExtError(str)) {
      return;
    }
    origConsoleError.apply(console, args);
  };

  // Prevent error event listeners from seeing extension errors
  window.addEventListener('error', function(e) {
    if (isExtError(e.error, e.filename) || (e.message && isExtError(e.message, e.filename))) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  window.addEventListener('unhandledrejection', function(e) {
    if (isExtError(e.reason)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  // Scrub DOM nodes
  function scrubEl(el) {
    if (!el || !el.attributes) return;
    for (var i = el.attributes.length - 1; i >= 0; i--) {
      var name = el.attributes[i].name;
      if (isExtAttr(name)) {
        el.removeAttribute(name);
      }
    }
  }

  function scrubTree(root) {
    if (!root) return;
    scrubEl(root);
    if (root.querySelectorAll) {
      var all = root.querySelectorAll('*');
      for (var i = 0; i < all.length; i++) {
        scrubEl(all[i]);
      }
    }
  }

  scrubTree(document.documentElement);

  if (typeof MutationObserver !== 'undefined') {
    var obs = new MutationObserver(function(mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'attributes') {
          if (isExtAttr(m.attributeName)) {
            m.target.removeAttribute(m.attributeName);
          }
        } else if (m.type === 'childList') {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node.nodeType === 1) scrubTree(node);
          }
        }
      }
    });

    obs.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true
    });

    document.addEventListener('DOMContentLoaded', function() {
      scrubTree(document.documentElement);
    }, { capture: true });

    window.addEventListener('load', function() {
      scrubTree(document.documentElement);
    }, { capture: true });
  }

  try {
    var origSet = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, val) {
      if (isExtAttr(name)) return;
      return origSet.apply(this, arguments);
    };
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${manrope.variable} ${cairo.variable} ${kanit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="ext-scrubber"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: extensionScrubber,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
