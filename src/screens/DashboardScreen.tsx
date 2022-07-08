import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';

export default class Dashboard extends React.Component {
  constructor(props:any){
    super(props)
  }

  render() {
    return (
      <SafeAreaView testID="MainFeed" style={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
        <Header screenTitle="Grape" />
      </SafeAreaView>
    );
  }
}