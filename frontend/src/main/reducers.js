import { combineReducers } from "redux";
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
// alias formReducer
import { reducer as formReducer } from 'redux-form'; 
import { reducer as toastReducer } from 'react-redux-toastr'; 
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastReducer,
    auth: AuthReducer
})

export default rootReducer