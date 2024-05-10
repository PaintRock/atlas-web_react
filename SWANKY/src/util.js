import moment from 'moment';

export function add(a, b) {
    return a + b;
}

export function getToday() {
    return moment().format("dddd");
}