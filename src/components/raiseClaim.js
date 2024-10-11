import React, { Component } from 'react'
import FormCards from './form_cards'

class RaiseClaim extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
               <h3>Choose your reason to decide the form:</h3>
                <FormCards/>
                    {/* <form>
                        <ul>
                            <input type="radio" id="html" name="fav_language" value="HTML"></input>
                            <label for="html">HTML</label>
                        </ul>
                         <ul>
                            <input type="radio" id="css" name="fav_language" value="CSS"></input>
                            <label for="css">CSS</label>
                        </ul>
                         <ul>
                            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
                            <label for="javascript">JavaScript</label>
                        </ul>
                       
                    </form>  */}
 
            </div>
        )
    }
}

export default RaiseClaim;