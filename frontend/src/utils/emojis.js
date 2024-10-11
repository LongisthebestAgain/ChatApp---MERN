// Function to generate 100 different emojis
const EmojiList = () => {
    // Array of 100 different emojis
    const emojis = [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
        "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
        "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥳",
        "🤯", "😤", "😡", "😠", "🤬", "😈", "👿", "💀", "☠️", "👻",
        "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽",
        "🙀", "😿", "😾", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻",
        "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🐔",
        "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🐺",
        "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦟",
        "🦗", "🦂", "🐢", "🐍", "🦎", "🐙", "🦑", "🦐", "🦞", "🦀"
    ];

    return emojis;
}

const getRandomEmojiList = () => {
    const emojis = EmojiList();
    return emojis[Math.floor(Math.random() * emojis.length)];
}

export default getRandomEmojiList;