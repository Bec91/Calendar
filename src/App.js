import './App.scss';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react';
import './Calendar.scss'


function App() {

  const [ date, setDate ] = useState(new Date());


  return (
    <div className="App">
      <h1 className='calendar__text'>Calendar</h1>
      <div className='calendar__container'>
        <Calendar onChange={setDate} value={date} />
      </div>

      <p className='calendar__text'>
        <span className='calendar__text--bold'>
          Selected Date:
        </span>
        {''}
        {date.toDateString()}
      </p>

    </div>
  );
}

export default App;
