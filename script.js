function generateKey() {
    const keyLength = 16;
    const characters = '0123456789ABCDEF';
    let randomKey = '';

    for (let i = 0; i < keyLength; i++) {
        randomKey += characters[Math.floor(Math.random() * characters.length)];
    }

    document.getElementById('random-key').textContent = `Generated Key: ${randomKey}`;
}
