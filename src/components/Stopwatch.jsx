import React,{ useEffect, useState } from 'react'

const Stopwatch = () => {
    const [second,setSecond] = useState(0)
  const [minute,setMinute] = useState(0)
  const [hour,setHour] = useState(0)
  const [active,setActive] = useState(false)
  const [intervals,setIntervals] = useState([])
  useEffect(()=>{
    let interval;
    if(active){
      interval = setInterval(()=>{
        if(second > 59){
          if(minute >= 59){
            setMinute(0)
            setSecond(0)
            setHour(hour + 1)
          }else {
            setSecond(0)
            setMinute(minute + 1)
          }
        }else {
          setSecond(second + 1)
        }
      },10)
    }
    return ()=>clearInterval(interval)
  },[active,second,hour,minute])
  const start_stop =()=>{
    setActive(!active)
  }
  const reset =()=>{
    setActive(false)
    setSecond(0)
    setMinute(0)
    setHour(0)
  }
  const save_intervals =()=>{
    if(second){
      intervals.push(`${hour}:${minute}:${second}`)
      setIntervals([...intervals])
    }
  }
  return (
    <div className='container'>
      <div className="row mt-4">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className='text-center'>Stopwatch</h1>
            </div>
            <div className="card-body">
              <h1 className='text-center'>{hour}:{minute}:{second}</h1>
            </div>
            <div className="card-footer d-flex justify-content-center gap-3">
              <button className={active ? 'btn btn-danger': 'btn btn-success'} onClick={start_stop}>
                {active ? 'stop': 'start'}
              </button>
              <button className='btn btn-info' onClick={reset}>reset</button>
              <button className='btn btn-primary' onClick={save_intervals}>intervals</button>
            </div>
          </div>
          {
            intervals.map((item,index)=>{
              return <p key={index}>{item}</p>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
