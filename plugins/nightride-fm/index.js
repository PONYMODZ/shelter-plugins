const {
  flux: { dispatcher },
} = shelter;

export function onLoad() {
  dispatcher.dispatch({
    type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
    applicationId: '1072140926614523964',
    originURL: `https://nightride.fm/`,
  });
}

export function onUnload() {
  dispatcher.dispatch({
    type: 'DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS',
    applicationId: undefined,
    originURL: `https://nightride.fm/`,
  });
}