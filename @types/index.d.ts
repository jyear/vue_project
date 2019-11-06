declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

declare module 'vue-codemirror';

interface Window {
    io: Function;
}
