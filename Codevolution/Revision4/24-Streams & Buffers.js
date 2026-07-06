// STREAMS
// A stream is a sequence of data that is being moved from one point to another over time

// Ex: a stream of data over the internet being moved from one computer to another
// Ex: a stream of data being transferred from one file to another within the same computer

// Process streams of data in chunks as they arrive instead of waiting for the entire data to
// be available before processing

// Ex: watching a video on YouTube

// The data arrives in chunks and you watch in chunks while the rest of the data arrives over time

// Ex: transferring file contents from fileA to fileB

// The contents arrives in chunks and you transfer in chunks while the remaining contents arrive over time

// Prevents unnecessary data downloads and memory usage


// BUFFERS
// Area where people wait is nothing but the buffer

// Node.js cannot control the pace at which data arrives in the stream

// It can only decide when is the right time to send the data for processing

// If there is data already processed or too little data to process, Node.js puts the arriving data in a buffer

// It is an intentionally small area that Node.js maintains in the runtime to process a stream of data
// Ex: streaming a video online

// If your internet connection is fast enough, the speed of the stream will be fast enough to instantly fill up the buffer
// and send it out for processing

// That will repeat till the stream is finished

// If your connection is slow, after processing the first chunk of data that arrived, the video player will display a loading spinner
// which indicates it is waiting for more data to arrive

// Once the buffer is filled up and the data is processed, the video player shows the video

// While the video is playing, more data will continue to arrive and wait in the buffer
