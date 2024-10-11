import React, { PureComponent } from 'react'

class Form19 extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                {/* <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                label="Name as per PAN"
                variant="filled"
                required
                value={namePan}
                onChange={e => setnamePan(e.target.value)}
              />
              <TextField
                label= "PAN No."
                variant="filled"
                required
                value={panNo}
                onChange={e => setpanNo(e.target.value)}
              />
          </form> */}
                <form >
                    <ul>
                        <label for="fname">Purpose:</label>
                        <input type="text" id="fname" name="fname" value="John"></input>
                    </ul>
                    
                    <ul>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe"></input>
                    </ul>
                    <ul>
                        <input type="submit" value="Submit"></input>
                    </ul>
                    
                    </form> 
            </div>
        )
    }
}

export default Form19;