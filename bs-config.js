const fs = require('fs');

const beep = f => console.log(f) || f;


function generateRedirectsArrayFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n').map(line => line.trim());

    const redirects = [];
    let section = '';

    lines.forEach(line => {
        if (line.startsWith('#')) {
            section = line.replace('#', '').trim();
        } else if (line !== '') {
            const parts = line.split(' ');
            const redirect = {
                from: parts[0],
                to: parts[1],
                status: parseInt(parts[2], 10)
            };

            if (section !== '') {
                redirect.section = section;
            }

            redirects.push(redirect);
        }
    });

    return redirects;
}

function applyRedirect(redirect, url) {
    const { from, to, status } = redirect;
    // Handle wildcard splat
    const wildcardIndex = from.indexOf('*');
    if (wildcardIndex !== -1) {
        const beforeWildcard = from.slice(0, wildcardIndex);
        const afterWildcard = from.slice(wildcardIndex + 1);
        if (url.startsWith(beforeWildcard) && url.endsWith(afterWildcard)) {
            const splatValue = url.substring(beforeWildcard.length, url.length - afterWildcard.length);
            const redirectedUrl = to.replace(':splat', splatValue);
            return { redirectedUrl, status };
        }
    }
    
    // Exact match
    if (url === from) {
        return { redirectedUrl: to, status };
    }
    
    // No redirect applied
    return { redirectedUrl: url, status: 200 };
}
function applyRedirectsMiddleware(req, res, next) {
    // Load redirects from file
    const redirects = generateRedirectsArrayFromFile("./public/_redirects");
    // Apply each redirect
    for (let i = 0; i < redirects.length; i++) {
        const { redirectedUrl, status } = applyRedirect(redirects[i], req.url);
        if (status !== 200) {
            res.redirect(status, redirectedUrl);
            return;
        }
        else if (redirectedUrl != req.url) {
            res.url = redirectedUrl;
        }
    }
    // If no redirect was applied, continue to the next middleware
    next();
}

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 8082
    },
    "files": false,
    "watchEvents": [
        "change"
    ],
    "watch": false,
    "ignore": [],
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": false,
    "proxy": {
        target:'localhost:8081',
        middleware: [applyRedirectsMiddleware]
    },
    "port": 8080,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "location": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": [],
    "open": "local",
    "browser": "default",
    "cors": false,
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "scrollRestoreTechnique": "window.name",
    "scrollElements": [],
    "scrollElementMapping": [],
    "reloadDelay": 0,
    "reloadDebounce": 500,
    "reloadThrottle": 0,
    "plugins": [],
    "injectChanges": true,
    "startPath": null,
    "minify": true,
    "host": null,
    "localOnly": false,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "socketIoOptions": {
            "log": false
        },
        "socketIoClientConfig": {
            "reconnectionAttempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    },
    "injectNotification": false
};