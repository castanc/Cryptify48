const supported = (() => {
    // When running in an SSR environment return `false`.
    if (typeof self === 'undefined') {
      return false;
    }
    // ToDo: Remove this check once Permissions Policy integration
    // has happened, tracked in
    // https://github.com/WICG/file-system-access/issues/245.
    if ('top' in self && self !== top) {
      try {
        // This will succeed on same-origin iframes,
        // but fail on cross-origin iframes.
        top.location + '';
      } catch {
        return false;
      }
    } else if ('showOpenFilePicker' in self) {
      return 'showOpenFilePicker';
    }
    return false;
  })();