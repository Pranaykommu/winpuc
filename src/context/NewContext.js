
import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const data = [
  {
      "id": 18,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 19,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 20,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 21,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 22,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 23,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 24,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 25,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
  {
      "id": 26,
      "uname": "ik7777",
      "role": "DEALER",
      "loginType": 4,
      "companyName": "Khan industries",
      "contactPerson": "Imran Khan",
      "designation": "CEO",
      "address": "Mumbai",
      "gst": "GSTIN999999999",
      "email": "shaheen51393@gmail.com",
      "phoneNumber": "7894321041",
      "landlineNumber": null,
      "enabled": true,
      "token": null,
      "states": null,
      "rtoCodes": null,
      "editPermissionRequired": false
  },
]

const newReducer = (state, action) => {
    switch (action.type) {
      case 'allusers':
        return { ...state, users: action.payload };
        case 'allstates':
          return { ...state, states: action.payload };
          case 'allrtocodes':
            return { ...state, rtocodes: action.payload };
            case 'allproducts':
              return { ...state, products: action.payload };
              case 'allproductinvoices':
                return { ...state, invoices: action.payload };
                case 'allvehicles':
                  return { ...state, vehicles: action.payload };
                  case 'allfittingreports':
                    return { ...state, reports: action.payload };
                    case 'createusers':
                      return { ...state, users: action.payload };
                      case 'createstates':
                        return { ...state, states: action.payload };
                        case 'creatertocodes':
                          return { ...state, rtocodes: action.payload };
                          case 'createproducts':
                            return { ...state, products: action.payload };
                            case 'createproductinvoices':
                              return { ...state, invoices: action.payload };
                              case 'createvehicles':
                                return { ...state, vehicles: action.payload };
                                case 'createfittingreports':
                                  return { ...state, reports: action.payload };
   /*   case 'add_error':
        return { ...state, errorMessage: action.payload };
      case 'signin':
        return { errorMessage: '', users: action.payload };
      case 'verify':
        return { errorMessage: '', token: action.payload };
      case 'clear_error_message':
        return { ...state, errorMessage: '' };
      case 'signout':
        return { token: null, errorMessage: '' };*/
      default:
        return state;
    }
  };
  const fetchAllUsers = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allusers', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllStates = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allstates', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllRTOCodes = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allrtocodes', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllProducts = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allproducts', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllProductInvoices = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allproductinvoices', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllVehicles = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allvehicles', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const fetchAllFittingReports = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'allfittingreports', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }



  /////////////////////


  const createAllUsers = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createusers', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllStates = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createstates', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllRTOCodes = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'creatertocodes', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllProducts = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createproducts', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllProductInvoices = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createproductinvoices', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllVehicles = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createvehicles', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }
  const createAllFittingReports = dispatch => async ({ token })=> {
    try {
      //const response = await tracker.get('/', { token });
      if (/*response.data.length>0*/data.length>0) {
        //
        dispatch({ type: 'createfittingreports', payload: /*response.data*/data });
       // navigate('UserManagement', { users: /*response.data*/data });
      } else {
        //no users for this user
      }
    } catch (err){
      //
    }
  }



  export const { Provider, Context } = createDataContext(
    newReducer,
    { fetchAllUsers, fetchAllVehicles, fetchAllFittingReports, fetchAllProductInvoices, fetchAllProducts, fetchAllRTOCodes, fetchAllStates,
    createAllFittingReports, createAllVehicles, createAllUsers, createAllProductInvoices, createAllProducts, createAllRTOCodes, createAllStates,
    },
    { users: null, errorMessage: '', states: null,rtocodes: null, products: null, invoices: null, vehicles: null, reports: null,}
  );