
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      forms: [
        <Form1 />,
        <Form2 />,
        <Form3 />
      ],
      currentform: 0
    }
  }

  nextForm(){
    this.setState({
      currentform: this.state.currentform + 1
    })
  }


  render() {
    return (
      <div>

        {this.state.forms[this.state.currentform]}
        <button onClick = {this.nextForm.bind(this)}>Next</button>
      </div>
    )
  }

}
var Form1 = () =>(
  <div>
    <fieldset>
      <legend>Account</legend>
      <form action="/account" method="post">
        <input type="text" name="name" placeholder="name" /><br/>
        <input type="email" name="email" placeholder="email"/><br/>
        <input type="password" name="password" placeholder="password" /><br/>
      </form>
    </fieldset>
  </div>
)

var Form2 = () => (
  <div>
    <fieldset>
      <legend>Ship Address</legend>
      <form action="/address" method="post">
        <input type="text" name="line1" placeholder="line1"/><br/>
        <input type="text" name="line2" placeholder="line2"/><br/>
        <input type="text" name="city" placeholder="city"/><br/>
        <input type="text" name="state" placeholder="state"/><br/>
        <input type="number" name="zipCode" placeholder="zipCode"/><br/>
      </form>
    </fieldset>
    </div>

)

var Form3 = () => (
  <div>
    <fieldset>
      <legend>Payment</legend>
      <form action="/payment" method="post">
        <input type="text" name="creditCard" /><br/>
        <input type="date" name="expiryDate" /><br/>
        <input type="text" name="cvv" /><br/>
        <input type="text" name="billingZipCode" /><br/>
      </form>
    </fieldset>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
