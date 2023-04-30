var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
function Bag(_a) {
    var children = _a.children;
    return (_jsx("div", __assign({ style: { backgroundColor: 'yellow', padding: '8px' } }, { children: _jsx("div", __assign({ style: { backgroundColor: 'yellowgreen' } }, { children: children })) })));
}
export default Bag;
