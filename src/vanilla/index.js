import './index.css';
import liff from '@line/liff';

document.addEventListener('DOMContentLoaded', function () {
  liff
    .init({ liffId: '2001156183-2w0837lY' })
    .then(() => {
      console.log(`=== Success! you can do something with LIFF API here ===`);

      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const accessToken = liff.getAccessToken();
        console.log(`Access Token : ${accessToken}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
