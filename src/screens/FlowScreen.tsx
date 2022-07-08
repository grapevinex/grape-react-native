import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';

export default class Flow extends React.Component {
  constructor(props:any){
    super(props)
  }

  render() {
    return (
      <SafeAreaView testID="Flow" style={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
        <Header screenTitle="Flow" />
      </SafeAreaView>
    );
  }
}