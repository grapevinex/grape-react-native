import * as React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Fonts from '../constants/Fonts';
import { Divider, Spinner, Text, Button } from 'native-base';
import { formatTweetText, formatTweetTime } from '../utils/TweetUtils';
import { ScreenStyles } from '../styles/AppStyles';
import LiveFeed from './LiveFeed';

type FeedListState = {
  tweets: Array<Object>,
  isLoading: boolean,
  limit: number,
  skip: number,
}

type FeedListProps = {
  onViewableItemsChanged: ({ viewableItems, changed }: any) => void;
}

class FeedList extends React.Component<FeedListProps, FeedListState> {
  flatListRef: any;
  constructor(props: any) {
    super(props)
    this.state = {
      tweets: [],
      isLoading: true,
      limit: 40,
      skip: 1,
    }
    this.flatListRef = React.createRef();
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    this.getTweets();
    this.setState((state) => ({
      skip: state.skip + state.limit,
    }))
  }

  getTweets() {
    this.setState({ isLoading: true })
    fetch(`https://api.gabba.io/tweets-next?limit=${this.state.limit}&skip=${this.state.skip}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (this.state.tweets.length === 0) {
          this.setState({ tweets: data.tweets })
          this.setState({ isLoading: false })
          console.log('init');
          return
        }
        this.setState((state) => ({ tweets: [...state.tweets, ...data.tweets] }))
        this.setState({ isLoading: false })
        return

      })
  }

  nextPage() {
    this.setState((state) => ({
      skip: state.skip + state.limit,
    }))
    this.getTweets();
  }

  previousPage() {
    if (this.state.skip > 0) {
      this.setState((state) => ({
        skip: state.skip - state.limit,
      }))
      this.getTweets();
    }
  }

  renderData = (tweet: any) => {
    let tweetText = ''
    if (tweet.item.truncated === true) {
      tweetText = formatTweetText(tweet.item.extended_tweet.full_text)
    }
    if (tweet.item.truncated === false) {
      tweetText = formatTweetText(tweet.item.text)
    }
    return (
      <View style={[ScreenStyles.containerCard, {borderColor: '#DDDDDD', borderBottomWidth: 1}]} data-date={formatTweetTime(tweet.item.created_at)}>
        <Text style={[{ textAlign: 'right' }, Fonts.label]}>{formatTweetTime(tweet.item.created_at)}</Text>
        <Text style={[{ textAlign: 'left', padding: 16 }, Fonts.p]}>{tweetText}</Text>
      </View>
    );
  };

  renderSpinner = () => {
    return <Spinner color='grey.500' size='lg' />;
  };

  tweetExtractorKey = (tweet: Object, index: number) => {
    return index.toString();
  };

  scrollToTop() {
    this.flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
  }

  render() {
    return (
      <View
        style={{ flex: 1 }}
      >
        <FlatList
          onViewableItemsChanged={this.props.onViewableItemsChanged}
          ListHeaderComponent={<LiveFeed />}
          showsVerticalScrollIndicator={false}
          style={{ maxWidth: '100%' }}
          data={this.state.tweets && this.state.tweets.map((tweet: any) => tweet)}
          keyExtractor={this.tweetExtractorKey}
          renderItem={this.renderData}
          onEndReached={() => this.nextPage()}
          onEndReachedThreshold={0}
          ListFooterComponent={this.state.isLoading ? this.renderSpinner : null}
          ref={this.flatListRef}
          scrollsToTop
        />
        <Button style={{ backgroundColor:'#666666', position: 'absolute', bottom: 32, alignSelf: 'center', padding: 16, borderRadius: 100}} onPress={() => this.scrollToTop()}>
          Back To Top
        </Button>
      </View>
    );
  }
}


export default FeedList;