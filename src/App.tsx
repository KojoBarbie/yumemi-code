import './App.css'
import { type ChangeEvent, type FC } from 'react'
import Title from './components/atoms/Title'
import SubTitle from './components/atoms/SubTitle'
import CheckBox from './components/atoms/CheckBox'

const App: FC = () => (
  <div className="App">
    <Title text='こんにちは' />
    <SubTitle text='ごきげんよう' />
    <CheckBox label='神奈川県' checked={false} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
      console.log("押した");
    } } />
  </div>
)

export default App
