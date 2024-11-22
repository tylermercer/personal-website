export default function cleanPageUrl() {
    const trackingPrefixes = [
        'utm_', 'itm_', 'int_', 'pk_', 'piwik_', 'mtm_', 'ga_', 'gclid', 'gclsrc',
        'fbclid', '_hs', 'mkt_', 'elq', 'mc_', 'oly_', 'vero_', 'rdt_', '__s', 
        'ncid', 'cmpid', 'mbid', 'hsCtaTracking', 'ref',
    ];

    const url = new URL(window.location.href);
    const params = url.searchParams;
    const oldParams = params.toString();

    for (const param of Array.from(params.keys())) {
        if (trackingPrefixes.some(prefix => param.startsWith(prefix))) {
            params.delete(param);
        }
    }

    if (params.toString() !== oldParams) {
        url.search = params.toString();
        history.replaceState(null, '', url.toString());
    }
}
