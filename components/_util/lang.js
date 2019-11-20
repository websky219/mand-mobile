/* istanbul ignore file */
import { inBrowser } from './env';

export function noop() {}

/**
 * Include external script dynamically
 */
export function requireRemoteScript(src, callback) {
    const doc = document;
    const head = doc.head || doc.getElementsByTagName('head')[0];

    let node = doc.createElement('script');
    const supportOnload = 'onload' in node;
    const onload = function() {
        node = null;
        typeof callback === 'function' && callback();
    };

    if (supportOnload) {
        node.onload = onload;
    } else {
        node.onreadystatechange = function() {
            if (/loaded|complete/.test(node.readyState)) {
                onload();
            }
        };
    }

    node.async = true;
    node.crossOrigin = true;
    node.charset = 'utf-8';
    node.src = src;
    head.appendChild(node);
}

export function getDpr() {
    const getParam = (name, str) => {
        const reg = new RegExp(`(^|,)${name}=([^,]*)(,|$)`, 'i');
        const r = str.match(reg);
        if (r != null) {
            return r[2];
        }
        return null;
    };

    const viewPort = inBrowser ?
        document.querySelector('meta[name=viewport]') :
        null;

    if (!viewPort) {
        return 1;
    }

    const viewPortContent = viewPort.getAttribute('content');
    const initialScale = +(getParam('initial-scale', viewPortContent) || 1);
    const maximumScale = +(getParam('maximum-scale', viewPortContent) || 1);
    const minimumScale = +(getParam('minimum-scale', viewPortContent) || 1);

    return 1 / Math.min(initialScale, maximumScale, minimumScale);
}

/**
 * transform a Function to Blob Url
 */
export function functionToUrl(fn) {
    const blob = new Blob([`(${fn.toString()})(null)`], {
        type: 'application/javascript',
    });
    return URL.createObjectURL(blob);
}

/**
 * generate random id
 */
export function randomId(prefix = '', length = 8) {
    return process.env.NODE_ENV !== 'test' ?
        `${prefix}-${parseInt(Math.random() * Math.pow(10, length))}` :
        '';
}

/**
 * kebab-case -> camelCase
 */
export function transformCamelCase(str) {
    var re = /-(\w)/g;
    return str.replace(re, function($0, $1) {
        return $1.toUpperCase();
    });
}

/**
 * Creates a debounced function that delays invoking fn until after delay milliseconds
 */
export function debounce(fn = noop, delay = 300) {
    let timer = null;

    return function() {
        let context = this;
        const args = arguments;

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}

/**
 * Creates a throttled function that only invokes fn at most once per every interval milliseconds
 */
export function throttle(fn = noop, interval = 300) {
    let last = 0;

    return function() {
        let context = this;
        const now = Date.now();

        if (now - last > interval) {
            last = now;
            fn.apply(context, arguments);
        }
    };
}

export function strFormatToDate(formatStr, dateStr) {
    var year = 0;
    var start = -1;
    var len = dateStr.length;
    if ((start = formatStr.indexOf('yyyy')) > -1 && start < len) {
        year = dateStr.substr(start, 4);
    }
    var month = 0;
    if ((start = formatStr.indexOf('MM')) > -1 && start < len) {
        month = parseInt(dateStr.substr(start, 2)) - 1;
    }
    var day = 0;
    if ((start = formatStr.indexOf('dd')) > -1 && start < len) {
        day = parseInt(dateStr.substr(start, 2));
    }
    var hour = 0;
    if (
        ((start = formatStr.indexOf('HH')) > -1 ||
            (start = formatStr.indexOf('hh')) > 1) &&
        start < len
    ) {
        hour = parseInt(dateStr.substr(start, 2));
    }
    var minute = 0;
    if ((start = formatStr.indexOf('mm')) > -1 && start < len) {
        minute = dateStr.substr(start, 2);
    }
    var second = 0;
    if ((start = formatStr.indexOf('ss')) > -1 && start < len) {
        second = dateStr.substr(start, 2);
    }
    return new Date(year, month, day, hour, minute, second);
}

export function dateAdd(strInterval, num, date) {
    date = arguments[2] || new Date();
    switch (strInterval) {
        case 's':
            return new Date(date.getTime() + 1000 * num);
        case 'n':
            return new Date(date.getTime() + 60000 * num);
        case 'h':
            return new Date(date.getTime() + 3600000 * num);
        case 'd':
            return new Date(date.getTime() + 86400000 * num);
        case 'w':
            return new Date(date.getTime() + 86400000 * 7 * num);
        case 'm':
            return new Date(
                date.getFullYear(),
                date.getMonth() + num,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            );
        case 'y':
            return new Date(
                date.getFullYear() + num,
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            );
    }
}

export function dateToStr(formatStr, date) {
    formatStr = arguments[0] || 'yyyy-MM-dd HH:mm:ss';
    date = arguments[1] || new Date();
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(
        /yy|YY/,
        date.getYear() % 100 > 9 ?
        (date.getYear() % 100).toString() :
        '0' + (date.getYear() % 100)
    );
    str = str.replace(
        /MM/,
        date.getMonth() >= 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    );
    str = str.replace(/M/g, date.getMonth());
    str = str.replace(/w|W/g, Week[date.getDay()]);

    str = str.replace(
        /dd|DD/,
        date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate()
    );
    str = str.replace(/d|D/g, date.getDate());

    str = str.replace(
        /hh|HH/,
        date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours()
    );
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(
        /mm/,
        date.getMinutes() > 9 ?
        date.getMinutes().toString() :
        '0' + date.getMinutes()
    );
    str = str.replace(/m/g, date.getMinutes());

    str = str.replace(
        /ss|SS/,
        date.getSeconds() > 9 ?
        date.getSeconds().toString() :
        '0' + date.getSeconds()
    );
    str = str.replace(/s|S/g, date.getSeconds());
    return str;
}