export const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      send_to: 'AW-11136123469/7d9iCPLp-ZgYEM2Ej74p',
      event_callback: callback,
    });
    return false;
  };
  