import './Clock.css'
import { useEffect, useState } from 'react'

function generateOptions(min,lim){
    let temp = []
    for (let i = min; i < lim; i += 5) {
        if (temp.indexOf(i) == -1){
            temp.push(i)
        }
    }
    return temp
}


export default function Clock(){
    const [counterMin, setCounterMin] = useState(10)
    const [breakMin, setBreakMin] = useState(5)
    const [counterSec, setCounterSec] = useState(0)
    const [play, setPlay] = useState(false)
    const [laps, setLaps] = useState(0)
    const [isFocus, setIsFocus] = useState(true)

    useEffect(() => {
        if (!play) return;
        const timer = setInterval(() => {
            if (isFocus) {
                if (counterMin === 0 && counterSec === 0) {
                    setIsFocus(false)
                    setCounterMin(breakMin)
                    setCounterSec(0)
                } else if (counterSec === 0) {
                    setCounterMin(counterMin - 1)
                    setCounterSec(59)
                } else {
                    setCounterSec(counterSec - 1)
                }
            } else {
                if (counterMin === 0 && counterSec === 0) {
                    setIsFocus(true)
                    setPlay(false) 
                    setLaps(laps + 1)
                } else if (counterSec === 0) {
                    setCounterMin(counterMin - 1)
                    setCounterSec(59)
                } else {
                    setCounterSec(counterSec - 1)
                }
            }
        }, 10)
        return () => clearInterval(timer)
    }, [play, counterMin, counterSec, isFocus, breakMin, laps])

    return (
        <div className='clock'>
            <p className='laps'>{laps} Lap Done</p>
            <h1 className='clockHead'>
                {counterMin.toString().padStart(2, '0')}:{counterSec.toString().padStart(2, '0')}
            </h1>
            <div className='timer'>
                <div className="focus">
                    <h4 className='label'>Focus:</h4>
                    <select
                        className='custom-select'
                        name="focusmin"
                        id="focusmin"
                        value={isFocus ? counterMin : 10}
                        onChange={(e) => {
                            setCounterMin(Number(e.target.value))
                            setCounterSec(0)
                            setIsFocus(true)
                            setPlay(false) 
                        }}>
                        {generateOptions(10,61).map((min) => (
                            <option value={min} key={min}>{min}</option>
                        ))}
                    </select>
                </div>
                <div className="break">
                    <h4 className='label'>Break:</h4>
                    <select
                        className='custom-select'
                        name="breakmin"
                        id="breakmin"
                        value={breakMin}
                        onChange={(e) => {
                            setBreakMin(Number(e.target.value))
                            if (!isFocus) {
                                setCounterMin(Number(e.target.value))
                                setCounterSec(0)
                                setPlay(false) 
                            }
                        }}>
                        {generateOptions(5,31).map((min) => (
                            <option value={min} key={min}>{min}</option>
                        ))}
                    </select>
                </div>
            </div>
            <button className='timerButton' type="button" onClick={() => setPlay(!play)}>
                {!play ? "Start" : "Stop"}
            </button>
            <p>{isFocus ? "Focus Session" : "Break Session"}</p>
        </div>
    )
}