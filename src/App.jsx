import React from 'react';
import { connect } from 'react-redux';

import Loading from '@/components/Loading';
import Router from './routes/router';

const mapStateToProps = state => ({
  loading: state.status.loading
});

const App = connect(
  mapStateToProps,
  null
)(({ error, loading, refresh }) => (
  <>
    <div className="container-fluid">
      <Router />
    </div>
    <Loading show={loading} />
  </>
));

export default App;
