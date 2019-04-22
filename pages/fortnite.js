import React from 'react';
import { withRouter } from 'next/router';

const Fortnite = props => <div>Fortnite page {props.router.query.theme}</div>;

export default withRouter(Fortnite);
