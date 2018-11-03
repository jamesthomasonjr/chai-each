// Type definitions for chai-each
// Project: https://github.com/jamesthomasonjr/chai-each
// Definitions by: James Thomason, Jr <https://github.com/jamesthomasonjr>

/// <reference types="chai" />

declare module "chai-each" {
    function chaiEach(chai: any, utils: any): void;

    namespace chaiEach { }
    export = chaiEach;
}

declare namespace Chai {
    interface Assertion {
        each: Assertion;
    }
}

