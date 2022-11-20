
module.exports = {
    env: {
        customKey: 'my-value'
    }
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/about',
                destination: '/',
                permanent: true,
            }
        ]
    }
}