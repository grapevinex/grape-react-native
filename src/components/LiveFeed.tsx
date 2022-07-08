import * as React from 'react';
import { View } from 'react-native';
import Fonts from '../constants/Fonts';
import { Text } from 'native-base';
import { formatTweetDate, formatTweetTime, formatTweetText } from '../utils/TweetUtils';
import { ScreenStyles } from '../styles/AppStyles';

type LiveFeedState = {
    isLoading: boolean,
    liveTweets: Array<any>,
    liveLimit: number,
    liveSkip: number,
}

class LiveFeed extends React.Component<{}, LiveFeedState> {

    constructor(props: any) {
        super(props)
        this.state = {
            isLoading: true,
            liveTweets: [],
            liveLimit: 1,
            liveSkip: 0,
        }
    }

    componentDidMount() {
        this.getLiveTweets();
        const intervalId = setInterval(() => {
            this.getLiveTweets();
        }, 2000)
        return () => clearInterval(intervalId);
    }

    getLiveTweets() {
        this.setState({ isLoading: true })
        fetch(`https://api.gabba.io/tweets-next?limit=1&skip=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
        })
            .then((res) => res.json())
            .then((data: any) => {
                if (this.state.liveTweets.length === 0) {
                    this.setState({ liveTweets: data.tweets })
                    this.setState({ isLoading: false })
                }
                try {
                    this.addToLiveList(data);
                } catch (error) {
                    throw error;
                }

            })
    }

    private addToLiveList(data: any) {
        const lastId = this.state.liveTweets[0]._id && this.state.liveTweets[0]._id;
        if (this.state.liveTweets.length >= 1 && lastId !== undefined) {
            if (lastId !== data.tweets[data.tweets.length - 1]._id) {
                this.setState((state) => ({
                    liveTweets: [...data.tweets, ...state.liveTweets]
                }));
                this.setState({ isLoading: false });
            }
        }
    }

    render() {
        const { liveTweets } = this.state;
        return (
            <>
                {liveTweets && liveTweets.map(
                    (tweet: any, i: number) => {
                        let background = {};
                        let backgroundHr = {borderColor: '#DDDDDD', borderBottomWidth: 1};
                        let fontColor = {}
                        if (i === 0) {
                            fontColor = {color:'white', fontWeight: 'bold'}
                            background = { backgroundColor: '#130202' }
                            backgroundHr = { borderColor: '#ED203D', borderBottomWidth: 2 }
                        }

                        return (
                            <View key={i} style={[background,ScreenStyles.containerCard, backgroundHr]} data-date={formatTweetDate(tweet.created_at)}>
                                <Text style={[{ textAlign: 'right' }, Fonts.label, fontColor]}>{formatTweetTime(tweet.created_at)}</Text>
                                <Text key={`${i}p`} style={[{ textAlign: 'left', padding: 16,  }, Fonts.p, fontColor]}>{
                                    tweet.extended_tweet
                                        ? formatTweetText(tweet.extended_tweet.full_text)
                                        : formatTweetText(tweet.text)
                                }</Text>
                            </View>
                        )
                    })
                }
            </>
        );
    }
}


export default LiveFeed;