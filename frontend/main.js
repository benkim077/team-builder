import { renderTable } from './src/util/renderTable.js';
import { attachSubmitEventHandlerTo } from './src/util/attachEventTo.js';
import { getUserIdFrom, getUserRankTierBy } from './src/api/index.js';
import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>팀 짜기</h1>
  <section id="team-container">
    ${renderTable()}
  </section>
`;

const submitEventHandler = async (event) => {
  event.preventDefault();
  // await getUserIdFrom(event.target[0].value); // TODO: [0] <= 이거 없애버리기
  // TODO: 라이엇 서버 요청은 be에서 해야 함.(api key 노출 때문에)
};

// 이벤트 상속하는 식으로 변경하자.
attachSubmitEventHandlerTo(document.querySelectorAll('form'), submitEventHandler);
