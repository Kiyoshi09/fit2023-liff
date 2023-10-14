import './index.css';
import liff from '@line/liff';

document.addEventListener('DOMContentLoaded', function () {
  liff
    .init({ liffId: '2001156183-2w0837lY' })
    .then(() => {
      console.log(`=== Success! you can do something with LIFF API here ===`);
    })
    .catch((error) => {
      console.log(error);
    });
});
