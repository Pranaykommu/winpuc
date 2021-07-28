
import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'changemode':
      return { ...state, mode: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return {...state, errorMessage: '', token: action.payload };
    case 'verify':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'profile':
      return { ...state, profile: action.payload };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  console.log('one');
 // const token = await AsyncStorage.getItem('token');
 // console.log('2');
 // if (token) {
 //   console.log('3');
 //   await dispatch({ type: 'signin', payload: token });
 //   console.log('4');
  /*  const response = await tracker.get('/profile');
    if (response.data.length>0) {
      console.log('response is: ', response.data);
      await dispatch({ type: 'profile', payload: response.data });
      SplashScreen.hide();
      navigate('Home')
    } else {
          Alert.alert(
            "Error Occurred",
            "no worries, try by closing the app and opening it again",
            [
                {
                text: "Ok", onPress: ()=> {
                  BackHandler.exitApp();
                },
                style: "cancel"
                },
            ],
            { cancelable: false }
            )
    }*/
     // SplashScreen.hide();
     // navigate('Home')
  //} else {
    //console.log('5');
   // SplashScreen.hide();
    //navigate('Register');
 // }
};


const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};


const signin = dispatch => async ({ username, password }) => {
  dispatch({ type: 'signin', payload: 'token' });
  /*try {
    const response = await tracker.post(`/login?username=${username}&password=${password}`);
    console.log(response.data);
   if (response){
      dispatch({ type: 'signin', payload: response.data.token });
   }
  } catch (err) {
      console.log('there is an error');
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong, try restarting the app'
    });
  }*/
};

const verify = dispatch => async ({ phone, otp }) => {
 // await AsyncStorage.setItem('token', 'token');
 // dispatch({ type: 'verify', payload: 'token' });
 // navigate('ResolveAuth');
    try {
      const response = await tracker.post('/verify', { phone, otp });
    //  await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'verify', payload: response.data.token });
      //navigate('ResolveAuth');
    } catch (err) {
        console.log('verification error')
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong, try restarting the app'
      });
    }
  };

const signout = dispatch => async () => {
 // await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
 // navigate('SignIn');
  };


  const changeToDarkMode = dispatch => async () => {
    dispatch({ type: 'changemode', payload: 'Dark Mode' })
  };

  const changeToLightMode = dispatch => async () => {
    dispatch({ type: 'changemode', payload: 'Light Mode' })
  };

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, verify, clearErrorMessage, tryLocalSignin, changeToDarkMode, changeToLightMode },
  { token: null, errorMessage: '', profile: null, mode: 'Dark Mode' }
);

