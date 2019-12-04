import React from 'react';
import PropTypes from 'prop-types';
import isUserConnected from './isUserConnected';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUserConnected() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any
};

// To give an accurate explanation, let's break down the { component: Component, ...rest } expression into two separate operations:

// Operation 1: Find the component property defined on props (Note: lowercase component) and assign it to a new location in state we call Component (Note: capital Component).
// Operation 2: Then, take all remaining properties defined on the props object and collect them inside an argument called rest.

export default PrivateRoute;