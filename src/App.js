import './App.scss';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react';
import './Calendar.scss'


function App() {

  const [ date, setDate ] = useState(new Date());

  // DEFAULT VALUES
  // can be either one or two values in an array for a specific date range selection
  // const [ date, setDate ] = useState([
  //   new Date(2021, 6, 1),
  //   new Date(2021, 6, 10),
  // ]);

  // OnViewChange
  // Prop that accepts a function that is called when user navigates from one view to another using drill up bitton/clicking a tile
  // EX: ({action, activeStartDate, value, view}) => alert('new view is:', view);

  // OnClickDay
  // Prop that accepts function when user clicks a day
  // EX: (value, event) => alert('Clicked Day:', value)
  // SUPPORTS FOLLOWING
  // onClickDecade
  // onClickMonth
  // onClickYear
  // onClickWeekNumber

  // onChange
  // Prop only when user clicks an ite(day on month view, month on year, etc...)
  // EX: (value, event) => alert('New Date Is:', value)


  return (
    <div className="App">
      <h1 className='calendar__text'>Calendar</h1>
      <div className='calendar__container'>
        <Calendar 
          onChange={setDate} 
          value={date}

          // take the arrow labels and converts them into words....not my personal fav! 
          // Will have to adjust scss for those bad boys in order to make it cute...
          // nextLabel='month>>'
          // nextAriaLabel='Go to next month'
          // next2Label='year>>'
          // next2AriaLabel='got to next year'
          // prevLabel='<<month'
          // prevAriaLabel='go to prev month'
          // prev2Label='<<year'
          // prev2AriaLabel='go to prev year'
          
          // maxDate={new Date()}   //Wont allow a date past the current date
          // minDate={new Date(2022, 1, 1)}    //Wont allow a date before the date set
          // Can Adjust ranges to fit what you are wanting to do!!

          // DEFAULT VALUES See above for explanation
          // selectRange={true}
          // defaultView= 'decade'

          // Min and Max Details 
          // Range between month, year, decade or century
          // minDetail = 'year'
          // maxDetail = 'year'
        />
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
