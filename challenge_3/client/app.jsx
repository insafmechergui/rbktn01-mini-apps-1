

class App extends React.Component {
  constructor(props){
    super(props);
  //   this.state = {
  //        }
  //   this.setState({

  //   })

  // }
  // nextForm() {
  //   this.setState = {

  //   }
  }

  render() {
    return (
      form1()
      )
  }
}
var form1 = () =>(
  <div>
    <fieldset>
      <legend>Account</legend>
      <form id="form1" >
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email"/>
        <input type="password" name="password" placeholder="password" />
        <a href="#form2">NEXT</a>
        <button onClick={this.nextForm}>Next</button>
      </form>
    </fieldset>
  </div>
)

var form2 = () => (
  <div>
    <fieldset>
      <legend>Ship Address</legend>
      <form id="form2">
        <input type="text" name="line1" placeholder="line1"/>
        <input type="text" name="line2" placeholder="line2"/>
        <input type="text" name="city" placeholder="city"/>
        <input type="text" name="state" placeholder="state"/>
        <input type="number" name="zipCode" placeholder="zipCode"/>
        <a href="#form3">NEXT</a>
      </form>
    </fieldset>
    </div>

)

var form3 = () => (
  <div>
    <fieldset>
      <legend>Payment</legend>
      <form id="form3">
        <input type="text" name="creditCard" />
        <input type="date" name="expiryDate" />
        <input type="text" name="cvv" />
        <input type="text" name="billingZipCode" />
      </form>
    </fieldset>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
