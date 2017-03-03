import React, { PropTypes } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import View from 'react-flexbox';
import BrowserMock from '../../components/BrowserMock';
import axios from 'axios';

import history from '../../core/history';
import { title, desc } from './Payment.md';

import HeaderLayout from '../../components/Layout/HeaderLayout';
import * as Colors from '../../components/Constants/Colors';

const documentTitle = 'RickFrom1987';

const CONFIG = {
  key: {
    test: 'pk_test_AwZhy8uwOOHku8SWAYiaGH54',
    live: 'pk_live_wU9QymCYFQM8w2NKMeOIxB5R'
  }
};

class PaymentPage extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.onToken({ test: 'token' });
  }

  onToken = (token) => {
    axios.post('https://25cw6kon3l.execute-api.us-east-1.amazonaws.com/prod/payment')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render = () => {
    const loc = history.getCurrentLocation();
    let key;
    if (loc.query.test) {
      key = CONFIG.key.test;
      console.warn("Using test key:", key);
    } else {
      key = CONFIG.key.live;
    }
    const linkStyle = {
      fontSize: 24,
      padding: 12,
    };
    const sectionStyle = {
      color: 'white',
      height: 300,
      marginBottom: 12
    };
    return (
      <HeaderLayout centered>
        <div className="row">
          <div className="col-sm-12">
            <BrowserMock style={sectionStyle}>
              <h2>Individual</h2>
              <p>$100 / month</p>
              <StripeCheckout
                name="RickFrom1987"
                description="Individual ($100 per month)"
                label="Subscribe"
                panelLabel="Subscribe"
                amount={10000}
                token={this.onToken}
                stripeKey={key}
                allowRememberMe={false}
                style={{
                  position: 'relative',
                  zIndex: 1000,
                  marginTop: 12
                }}/>
            </BrowserMock>
          </div>
          <div className="col-sm-12">
            <BrowserMock style={sectionStyle}>
              <h2>Enterprise</h2>
              <p>$300 / month</p>
              <StripeCheckout
                name="RickFrom1987"
                description="Enterprise ($300 per month)"
                label="Subscribe"
                panelLabel="Subscribe"
                amount={30000}
                token={this.onToken}
                stripeKey={key}
                allowRememberMe={false}
                style={{
                  position: 'relative',
                  zIndex: 1000,
                  marginTop: 12
                }}/>
            </BrowserMock>
          </div>
        </div>
      </HeaderLayout>
    );
  }
}

export default PaymentPage;