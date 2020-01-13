import React from 'react';
import {YellowBox} from 'react-native';

// YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

// import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return <Routes />;
}
