
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import Auth from '../../components/Auth/Auth';

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (login, password) => dispatch(actions.auth(login, password,))
    };
};

export default connect(null, mapDispatchToProps)(Auth);