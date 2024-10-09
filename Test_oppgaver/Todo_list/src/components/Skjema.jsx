

export default function Skjema() {


    return(
        <>
        <h1>Form</h1>

        <div>
            <label>
                <h2>Name</h2>
                <p>Enter your firstname and lastname</p>
                Firstname: <input type="text" />
                Lastname: <input type="text" />
            </label>
        </div>
        <div>
            <label>
                <h2>Age</h2>
                <p>Enter your age:</p>
                <input type="number"/>
            </label>
        </div>
        <div>
            <label>
                <h2>School</h2>
                <p>Select your school</p>
                <select>
                    <option value="Empty"></option>
                    <option value="Drømtorp">Drømtorp VGS</option>
                    <option value="Ski">Ski VGS</option>
                    <option value="Ås">Ås VGS</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                <h2>Course</h2>
                <p>Enter your Course</p>
                <input type="radio" id="IT" name="Course" value="IT"/>
                <label>IT</label><br></br>
                <input type="radio" id="MP" name="Course" value="MP"/>
                <label>MP</label><br></br>
            </label>
        </div>
        <div>
            <label>
                <h2>Hobbies</h2>
                <p>Write down some of your hobbies</p>
                <textarea></textarea>
            </label>
        </div>
        <div>
            <label>
                <h2>Hobbies 2</h2>
                <p>Check this box if you don't have Hobbies</p>
                Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={false} />
            </label>
        </div>
        <div>
            <label>
                <h2>Class</h2>
                <p>Select your favorite class</p>
                <select>
                    <option value="Empty"></option>
                    <option value="Utvikling">Utvikling</option>
                    <option value="Drift">Drift</option>
                    <option value="Bruker">Brukersstøtte</option>
                </select>
            </label>
        </div>
        <div>
            <label>
                <h2>Fun Fact</h2>
                <p>Write down some of your favorite fun facts</p>
                <textarea></textarea>
            </label>
        </div>
        <div>
            <label>
                <h2>More info</h2>
                <p>Do you like school?</p>
                <input type="radio" id="Yes" name="Course" value="Yes"/>
                <label>Yes</label><br></br>
                <input type="radio" id="No" name="Course" value="No"/>
                <label>No</label><br></br>
                <input type="radio" id="Eh" name="Course" value="Eh"/>
                <label>Eh</label><br></br>
            </label>
        </div>
        <div>
            <label>
                <h2>Color</h2>
                <p>Choose a color</p>
                <input type="color" />
            </label>
        </div>
        <div>
            <label>
                <h2>Time</h2>
                <p>Choose your favorite time</p>
                <input type="datetime-local" />
            </label>
        </div>
        <div>
            <label>
                <h2>Submit</h2>
                <p>Submit the form</p>
                <input type="submit" />
            </label>
        </div>

        


        <main>
        </main>
        </>
    )
}