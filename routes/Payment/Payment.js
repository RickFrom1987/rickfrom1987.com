import React, { PropTypes } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import View from 'react-flexbox';
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
    console.log("token", token);
    axios.get('https://gbejaxzbq9.execute-api.us-east-1.amazonaws.com/prod/pay')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    fetch('https://gbejaxzbq9.execute-api.us-east-1.amazonaws.com/prod/pay', {
      mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify(token),
    }).then((resp) => {
      console.log("resp", resp, resp.body);
    });
  }

  render = () => {
    const loc =  history.getCurrentLocation();
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
    return (
      <HeaderLayout centered>
        <StripeCheckout
          name="RickFrom1987"
          description="Pro Subscription ($100 per month)"
          label="Subscribe"
          panelLabel="Subscribe"
          amount={10000}
          token={this.onToken}
          stripeKey={key}
          allowRememberMe={false}
          desktopShowModal/>
      </HeaderLayout>
    );
  }

}

export default PaymentPage;