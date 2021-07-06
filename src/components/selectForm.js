import * as React from 'react'
import styled from'styled-components'
const Container = styled.div`
@media only screen and (max-width: 600px){
margin: 1rem;
margin-bottom: 7rem;
form{
  width: auto !important;
}

p{
margin-bottom: 1rem !important;
}
.other{
  width: 100% !important;
  margin-bottom: -0.5rem !important;
}
button{
  margin-left: 20% !important;
}

}
display: flex;

padding: 3rem;
background: #FAF9F9;
border-radius: 30px;
height: auto;
text-align: right;
margin-top: 40px;
margin-bottom: 75px;
box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);


form{
  width: 40rem;
  display: flex;
  flex-direction: column;
 
}
input{
  width: 15rem;
  height: 2rem;
  border-radius: 15px;
  padding: 1rem;
  margin-top: -10px;
  margin-bottom: 10px;
  border: none;
  box-shadow: 2px 2px 15px white;
  filter: drop-shadow(1px 1px 1px black);
}
p{
  @media only screen and (max-width: 600px){
  margin-left: 0;
}
  /* margin-top: -1rem; */
  text-align: left;
 margin-left: -1rem;
 margin-bottom: -9.5px;
 width: 200px;
 font-size: 20px;


}
select{
  width: 15rem;
  height: 2rem;
  border-radius: 15px;
  margin-bottom: 15px;
  margin-top: -13px;
  border: none;
  box-shadow: 2px 2px 20px white;
  filter: drop-shadow(1px 1px 1px black);
}
.other{
  width: 40%;
  margin-bottom: -5rem;
  text-align: left;
}
.otherIn{
  margin-top: 1rem;
  width: 15rem;
 height: 6rem;


}

button{
  background: #DBBF96;
  height: 2.5rem;
  width: 9rem;
  margin-left: 33.5%;
  border-radius: 15px;
  cursor: pointer;

  &:hover{
    box-shadow: 1px 1px 10px #CDCCCC;
  filter: drop-shadow(0px 0px 0px #CDCCCC);
  transition: box-shadow 250ms ease-in 300ms ease-out;
  transform: scale(1.2);
  transition: scale 2s ease-in-out;
  }
}
`

const SelectForm = () => {
    return(     
        <>  
        <Container>
    <form action="https://getform.io/f/db517dd9-a2fd-4808-a101-767864f0dc1e" method="POST" >
<label><p>Name:</p>
<input type="text" name="name" />
</label>
<label><p>Email:</p>
<input type="email" name="email"/>
</label>
<label><p>Phone Number:</p>
<input type="phone" name="phone"/>
</label>

<div class="drop-down">
            <label for="Method"><p>Contact Method:</p> </label>
            <select id="Method" name="Method" required="required">
              <option>Phone</option>
              <option>Text</option>
              <option>Email</option>
            </select>
          </div>
<div class="drop-down">
            <label for="rodType"><p>Rod Type:</p>  </label>
            <select id="rodType" name="rodType" required="required">
              <option>Spinng Rod</option>
              <option>Trolling Rod</option>
              <option>Casting Rod</option>
              <option>Surf Rod</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="rodPower"><p>Rod Power:</p>  </label>
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
<label><p>Rod Color:</p> 
<input type="text" name="rodColor"/>
</label>
<label><p>Rod Length:</p> 
<input type="text" name="rodLength"/>
</label>
<div class="drop-down">
            <label for="guideColor"><p>Guide Color:</p>  </label>
            <select id="guideColor" name="guideColor" required="required">
              <option>Black</option>
              <option>Chrome</option>
              <option>Gold</option>
              <option>Colored</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="guideStyle"><p> Guide Style:</p>  </label>
            <select id="guideStyle" name="guideStyle" required="required">
              <option>Standard</option>
              <option>Roller</option>
              <option>Airwave</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="reelSeat"><p>Reel Seat Style:</p>  </label>
            <select id="reelSeat" name="reelSeat" required="required">
              <option>Aluminium</option>
              <option>Standard</option>
              <option>Uni Butt</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripMaterial"><p>Grip Material:</p>  </label>
            <select id="gripMaterial" name="gripMaterial" required="required">
              <option>Eva/Foam</option>
              <option>Cork</option>
              <option>Winn Grip</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripStyle"><p>Grip Style:</p>  </label>
            <select id="gripStyle" name="gripStyle" required="required">
              <option>Split Grip</option>
              <option>Full Grip</option>
              <option>Uni Butt</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="gripCustom"><p> Custom Grip Design:</p>  </label>
            <select id="gripCustom" name="gripCustom" required="required">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div class="drop-down">
            <label for="customDetails"><p>Custom Details:</p> </label>
            <select id="customDetails" name="customDetails" required="required">
              <option>Decorative Weave</option>
              <option>Weave Art</option>
              <option>Decorative Acents</option>
              <option>Other</option>
              <option>none</option>
            </select>
          </div>
<label ><p className="other">if you selected "other", please include breif description of your idea!</p>
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