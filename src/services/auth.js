import { AsyncStorage } from 'react-native'
import { AJAX } from './services';

export const CURRENT_USER_KEY = 'current-user';

export const onSignIn = (value) => AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(value))

export const onSignOut = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(CURRENT_USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err))
    })
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(CURRENT_USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(res);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err))
    })
}


export const signIn = (username, password, callback) => {
    return AJAX(
            'login', 
            'POST', 
            {
                'username': username,
                'password': password   
            },
            callback
        );
    }
