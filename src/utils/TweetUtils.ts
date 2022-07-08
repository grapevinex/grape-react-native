export const formatTweetText = (string: string) => {
    return string.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/\*/g, '').toUpperCase()
}

export const formatTweetTime = (created_at: string) => {
    return new Date(created_at).toLocaleTimeString();
}

export const formatTweetDate = (created_at: string) => {
    return new Date(created_at).toLocaleDateString();
}

export const tweetExtractorKey = (tweet: Object, index: number) => {
    return index.toString();
};