import * as React from 'react'
import { Button } from 'react-bootstrap'

// export { default as Greatness } from "./Greatness";
// export { default as Best } from "./Best";
import styled from '@emotion/styled'

const Button1 = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

type Props = { text: string }
export default function Cool({ text }: Props) {
  return (
    <div>
      Hello hi {text}
      <Button1>hey man jejh</Button1>
      <Button>super</Button>
    </div>
  )
}

// export type Props = { text: string }

// export default class ExampleComponent extends React.Component<Props> {
//   render() {
//     const { text } = this.props

//     return <div style={{ color: 'red' }}>Hello {text}</div>
//   }
// }
