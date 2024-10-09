import { useState } from 'react'

    
export default function TextField(){

    return(
        <>
            <h1>Quiz</h1>

            <div className="Question one">
            <label>
                <h2>Question 1:</h2>
                <p>What is the meaning of life?</p>
                <input type="radio" id="41" name="question_1" value="41"/>
                <label>41</label><br></br>
                <input type="radio" id="42" name="question_1" value="42"/>
                <label>42</label><br></br>
                <input type="radio" id="43" name="question_1" value="43"/>
                <label>43</label><br></br>
                <input type="radio" id="none" name="question_1" value="none"/>
                <label>None</label><br></br>
            </label>
            </div>
        </>
    )
}