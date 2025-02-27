const awsmobile = {
    Auth: {
        region: "ap-northeast-2",
        userPoolId: "ap-northeast-2_XXXXXXXXX",
        userPoolWebClientId: "XXXXXXXXXXXXXXXXXXXX",
    },
    API: {
        endpoints: [
            {
                name: "WildRydesAPI",
                endpoint: "https://xxxxxx.execute-api.ap-northeast-2.amazonaws.com/prod",
            },
        ],
    },
};
export default awsmobile;

