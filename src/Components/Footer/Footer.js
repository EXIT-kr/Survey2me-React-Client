// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <Grid columns='equal'>
          <Grid.Column computer={4}>
          </Grid.Column>
          <Grid.Column computer={2} mobile={16}>
            <img src="/img/footer-logo.png" width="120px"/>
          </Grid.Column>
          <Grid.Column computer={8} mobile={16}>
            <p>문의하기 | nayunhwan.dev@gmail.com</p>
            <p>Copyrights 2017 EXIT, All rights reserved.<br/>경기도 안산시 상록구 한양대학로 55 한양대학교 ERICA 창업보육센터</p>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Footer