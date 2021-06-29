import * as React from 'react'
import styled from'styled-components'


const SelectForm = () => {
    return(     
        <>   
    <form action="https://getform.io/f/db517dd9-a2fd-4808-a101-767864f0dc1e" method="POST">
<label>Name:</label>
<input type="text" name="name" />
<label>Email:</label>
<input type="email" name="email"/>
<label>Phone Number:</label>
<input type="text" name="phoneNumber"/>
<label>Prefered Method of Contact:</label>
<input type="text" name="contact"/>
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
<label>Rod Color:</label>
<input type="text" name="rodColor"/>
<label>Rod Length:</label>
<input type="text" name="rodLength"/>
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
<label>if you selected "other", please include breif description of your idea! </label>
<input type="text" name="otherDetails"/>
<br/>
<button type="submit">Send</button>
</form>
        </>    
    )
}


export default SelectForm;