const constGlobalRequire = require('const-global-require');
let letGlobalRequire = require('let-global-require');
var varGlobalRequire = require('var-global-require');
require('static-require');
const constWrappedRequire = noop(require('const-wrapped-require'));
let letWrappedRequire = noop(require('let-wrapped-require'));
const constWrappedRequireWithArgs = noop(require('const-wrapped-require'), 'data');
let { destructured, destructuredBeforeRename: destructuredAfterRename } = noop(require('let-global-require-destructured-object'));
const [ destructuredItem ] = require('const-global-destructured-array');

const obj = {
    letGlobalRequire: () => {
        const nonglobalRequire = require('nonglobal-require');

        constGlobalRequire.prop = 5;
        fns[constGlobalRequire]()
        letGlobalRequire = {};
        try {
            obj.constGlobalRequire = varGlobalRequire;
        } catch (letGlobalRequire) { }
        destructured();
        destructuredAfterRename();

        closure2(letWrappedRequire => {
            closure1(() => {
                letWrappedRequire()
            })
        })
    },
    varGlobalRequire() {
        function varGlobalRequire() {
            const varGlobalRequire = {
                foo: '13'
            }
            const x = varGlobalRequire
        }
        const x = varGlobalRequire
        class constGlobalRequire {
            letGlobalRequire() {}
        }
    }
}
