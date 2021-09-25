import React, {Component} from 'react'

class Converter extends Component {
  state = {
    currencies: ['USD', 'AUD', 'SGD', 'PHP', 'EUR'],
    base: 'USD',
    amount: '',
    convertTo: 'EUR',
    result: '',
    date: '',
  }

  handleSelect = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleInput = e => {
    this.setState({amount: e.target.value})
  }

  render() {
    const {currencies, base, amount, convertTo, result, date} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card card-body">
              <h1>
                {amount} {base} is equivalent to
              </h1>
              <h1>
                {result}
                {convertTo}
              </h1>
              <p>As of {date}</p>
              <div className="row">
                <div className="col">
                  <form className="form-inline mb-4">
                    <input
                      value={amount}
                      className="form-control"
                      onChange={this.handleInput}
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                  <form className="form-inline mb-4">
                    <input className="form-control" />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Converter
