import './App.css'
import { useState, type ChangeEvent, type FC } from 'react'
import Title from './components/atoms/Title'
import SubTitle from './components/atoms/SubTitle'
import GraphRadioButtons from './components/molecules/GraphRadioButton'

const App: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // FIXME: ここなぜエラーを吐く？
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  
  return (
    <div className="App">
      <Title text='こんにちは' />
      <SubTitle text='ごきげんよう' />
      <GraphRadioButtons options={['総人口', '生産年齢人口', '老齢人口', 'その他']}
              selectedOption={selectedOption}
              onChange={handleOptionChange} />
    </div>
  );
}


export default App
