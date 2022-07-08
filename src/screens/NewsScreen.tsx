import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import FeedList from '../components/FeedList';
import Header from '../components/Header';
import Fonts from '../constants/Fonts';
import { Text } from '../components/Themed';
import { ScreenStyles } from '../styles/AppStyles';
import { formatTweetDate } from '../utils/TweetUtils';

type NewsState = {
  date:string,
}

export default class News extends React.Component<{}, NewsState> {
  constructor(props:any){
    super(props)
    this.state = {
      date: new Date().toLocaleDateString(),
    }
    
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this)
  }

  onViewableItemsChanged = ({viewableItems, changed}:any): void => {
    if(viewableItems[0] && viewableItems[0].item.created_at){
      this.setState({ date: formatTweetDate(viewableItems[0].item.created_at)})
    }
  };

  render() {
    return (
      <SafeAreaView testID="News" style={{ alignItems: 'center', flex: 1, overflow: 'hidden' }}>
        <Header screenTitle="News" />
        <View style={[ScreenStyles.containerCard, {alignItems: 'flex-end'}]}>
          <Text style={[Fonts.h3, { paddingBottom: 8}]} key={this.state.date}>{this.state.date}</Text>
        </View>
        <FeedList onViewableItemsChanged={this.onViewableItemsChanged} />
      </SafeAreaView>
    );
  }
}