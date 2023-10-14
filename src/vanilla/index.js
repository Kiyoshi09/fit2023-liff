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

document.getElementById('submitButton').addEventListener('click', function () {
  let emailValue = document.getElementById('inputField').value;
  let resultMessage = document.getElementById('resultMessage');

  // Email validation
  let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regex.test(emailValue)) {
    resultMessage.textContent = 'LINEID と Email アドレスがスティッチされました';
    resultMessage.style.color = 'green';
  } else {
    resultMessage.textContent = 'メールアドレスが正しくありません';
    resultMessage.style.color = 'red';
  }
});
