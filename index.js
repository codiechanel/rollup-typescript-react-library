'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var reactBootstrap = require('react-bootstrap');
var styled = _interopDefault(require('@emotion/styled'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button1 = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 32px;\n  background-color: hotpink;\n  font-size: 24px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"], ["\n  padding: 32px;\n  background-color: hotpink;\n  font-size: 24px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"])));
function Cool(_a) {
    var text = _a.text;
    return (React.createElement("div", null,
        "Hello hi ",
        text,
        React.createElement(Button1, null, "hey man jejh"),
        React.createElement(reactBootstrap.Button, null, "super")));
}
var templateObject_1;
// export type Props = { text: string }
// export default class ExampleComponent extends React.Component<Props> {
//   render() {
//     const { text } = this.props
//     return <div style={{ color: 'red' }}>Hello {text}</div>
//   }
// }

exports.default = Cool;
//# sourceMappingURL=index.js.map
