const ATTR = {
  FACADE: 'data-youtube-facade',
  VIDEO_ID: 'data-youtube-id',
};

const SELECTOR = {
  FACADE: `[${ATTR.FACADE}]`,
  VIDEO_ID: `[${ATTR.VIDEO_ID}]`,
};

document.addEventListener('DOMContentLoaded', function() {
  // so much of this is stolen from Paul Irish, cheers legend!
  const $facade = document.querySelectorAll(SELECTOR.FACADE);
  let preconntected = false;

  if (!$facade.length) {
    return false;
  }

  // prefetch youtube api
  const warmConnections = () => {
    if (preconntected) {
      return;
    }

    addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
    // The botguard script is fetched off from google.com
    addPrefetch('preconnect', 'https://www.google.com');

    // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
    addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
    addPrefetch('preconnect', 'https://static.doubleclick.net');
  };

  const addPrefetch = (kind, url, as) => {
    const linkEl = document.createElement('link');
    linkEl.rel = kind;
    linkEl.href = url;
    if (as) {
      linkEl.as = as;
    }
    document.head.append(linkEl);
  };

  const initVideo = (facade, videoID) => {
    // create a youtube iframe
    const params = new URLSearchParams(facade.dataset.params || []);
    params.append('autoplay', '1');

    const iframeEl = document.createElement('iframe');
    iframeEl.width = '100%';
    iframeEl.height = '100%';
    // No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
    iframeEl.title = facade.playLabel;
    iframeEl.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframeEl.allowFullscreen = true;
    // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
    // https://stackoverflow.com/q/64959723/89484
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(
      videoID
    )}?${params.toString()}`;
    facade.append(iframeEl);

    facade.classList.add('activated');

    // Set focus for a11y
    facade.querySelector('iframe').focus();
  };

  $facade.forEach((facade) => {
    // get id
    const videoID = facade.dataset.youtubeId;
    // get play button

    // if no play button make one

    // on hover warm connections
    facade.addEventListener('pointerover', () => {
      warmConnections();
    });

    // on click show youtube thingy
    facade.addEventListener('click', () => {
      initVideo(facade, videoID);
    });

    // or if in a modal we wanna load it straight away
    // so allow this to be a method or something
  });
});
