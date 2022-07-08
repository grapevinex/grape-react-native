import * as React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Fonts from '../constants/Fonts';
import { Container, Link, Text } from 'native-base';
import ThemeToggle from '../components/ThemeToggle';

type DashboardState = {
  date:string,
}

export default class Account extends React.Component<{ navigation: any }, DashboardState> {
  constructor(props:any){
    super(props)
  }

  render() {
    return (
      <SafeAreaView testID="Account" style={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
        <Header screenTitle="Account" />
        <Container width={'100%'} maxWidth={'100%'} style={{flex: 1, maxWidth: 1100 }}>
          <TouchableOpacity style={[{ padding: 16,  }]} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={[{ textAlign: 'left' }, Fonts.p]}>Start Free Trial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ padding: 16,  }]} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={[{ textAlign: 'left'}, Fonts.p]}>Login</Text>
          </TouchableOpacity>
          <Text style={[{ textAlign: 'left', padding: 16,  }, Fonts.p]}>Share Gabba</Text>
          <ThemeToggle/>
        </Container>
      </SafeAreaView>
    );
  }
}