import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
// import { supabaseAnonKey, supabaseUrl } from '../constants/index'

const supabaseUrl = 'https://wtyhcdwheczgggkyzadk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0eWhjZHdoZWN6Z2dna3l6YWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4NDc5MDgsImV4cCI6MjAzODQyMzkwOH0.OgzWo9EzmJE9Q-euzDOy2_8Kr6GKsEN6rD9z46YwMDY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        // storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh()
    } else {
        supabase.auth.stopAutoRefresh()
    }
})