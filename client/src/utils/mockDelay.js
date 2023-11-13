export const mockDelay = (delay, ...handlers) => {
    console.log('MOCKED DELAY!');
    setTimeout(() => {
        handlers.forEach(h => h());
    }, delay);
};