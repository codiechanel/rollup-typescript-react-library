import * as React from 'react'

// export { default as Greatness } from "./Greatness";
// export { default as Best } from "./Best";

// export default function Cool() {
//   return <div>Hello hi</div>;
// }

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props

    return <div style={{ color: 'red' }}>Hello {text}</div>
  }
}
