import * as React from 'react'
import styled from'styled-components'
const Container = styled.div`
margin-bottom: 7rem;
display: flex;
padding: 3rem;
background: orange;
border-radius: 30px;
height: 45rem;
text-align: right;

form{
  width: 30rem;
}
input{
  width: 10rem;
  height: 1.7rem;
  border-radius: 15px;


  
}

select{
  width: 10rem;
  height: 1.7rem;
  border-radius: 15px;
}
.other{
  width: 25%
}
.otherIn{
  width: 18rem;
 height: 3rem;
}
`

const SelectForm = () => {
    return(     
        <>  
        <Container>
    <form action="https://getform.io/f/db517dd9-a2fd-4808-a101-767864f0dc1e" method="POST" style={{display: "flex" ,flexDirection: "column" ,  height:"10rem"}}>
<label>Name:
<input type="text" name="name" />
</label>
<label>Email:
<input type="email" name="email"/>
</label>
<label>Phone Number:
<input type="text" name="phoneNumber"/>
</label>
<label>Prefered Method of Contact:
<input type="text" name="contact"/>
</label>
<div class="drop-down">
            <label for="rodType">Rod Type: </label>
            <select id="rodType" name="rodType" required="required">
              <option>Spinng Rod</option>
              <option>Trolling Rod</option>
              <option>Casting Rod</option>
              <option>Surf Rod</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="rodPower">Rod Type: </label>
            <select id="rodPower" name="rodPower" required="required">
              <option>Ultra Light</option>
              <option>Light</option>
              <option>Medium Light</option>
              <option>Medium</option>
              <option>Medium Heavy</option>
              <option>Heavy</option>
              <option>Extra Heavy</option>
            </select>
          </div>
<label>Rod Color:
<input type="text" name="rodColor"/>
</label>
<label>Rod Length:
<input type="text" name="rodLength"/>
</label>
<div class="drop-down">
            <label for="guideColor">Guide Color: </label>
            <select id="guideColor" name="guideColor" required="required">
              <option>Black</option>
              <option>Chrome</option>
              <option>Gold</option>
              <option>Colored</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="guideStyle">Guide Style: </label>
            <select id="guideStyle" name="guideStyle" required="required">
              <option>Standard</option>
              <option>Roller</option>
              <option>Airwave</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="reelSeat">Reel Seat Style: </label>
            <select id="reelSeat" name="reelSeat" required="required">
              <option>Aluminium</option>
              <option>Standard</option>
              <option>Uni Butt</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripMaterial">Grip Material: </label>
            <select id="gripMaterial" name="gripMaterial" required="required">
              <option>Eva/Foam</option>
              <option>Cork</option>
              <option>Winn Grip</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripStyle">Grip Style: </label>
            <select id="gripStyle" name="gripStyle" required="required">
              <option>Split Grip</option>
              <option>Full Grip</option>
              <option>Uni Butt</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripCustom">Custom Grip Design: </label>
            <select id="gripCustom" name="gripCustom" required="required">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="customDetails">Custom Details: </label>
            <select id="customDetails" name="customDetails" required="required">
              <option>Decorative Weave</option>
              <option>Weave Art</option>
              <option>Decorative Acents</option>
              <option>Other</option>
              <option>none</option>
            </select>
          </div>
<label className="other">if you selected "other", please include breif description of your idea!
<input className="otherIn" type="text" name="otherDetails"/>
</label>
<br/>
<button type="submit">Send</button>
</form>
</Container> 
        </>    
    )
}


export default SelectForm;